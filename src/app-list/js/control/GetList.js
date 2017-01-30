import { setDirty, setPending } from '../AppListActions';

import lodash from 'lodash';
import { query } from '../../../api/ApiActions';

export default class GetList {
    constructor(dispatch, listManager, q, params, target) {
        dispatch(setPending(true, target));
        if (listManager) {
            const get = listManager.get;
            if (get && get.action) {
                const q2 = { ...q };
                if (get.query) {
                    lodash.forIn(get.query, (value, field) => {
                        lodash.set(q2, field, value);
                    });
                }
                dispatch(query(get.action, {
                    query: q2,
                    params: params
                }));
                dispatch(setDirty(false, target));
            }
        }
    }
}