import { Body, Content, Sidebar, View } from '../../common/AppComponents';

import AppInterceptor from '../../app-interceptor/AppInterceptor';
import { Links } from './components/Components';
import React from 'react';
import { Sticky } from 'react-sticky';
import { connect } from 'react-redux';

export default class AppSettings extends React.Component {
    componentWillMount() {
        this.links = [{
            faIcon: 'fa fa-book fa-fw fa-lg',
            label: 'Categories',
            path: '/settings/categories',
            createsNew: true,
            createPath: '/settings/categories/new'
        }];
    }
    render() {
        return (
            <View load={AppInterceptor}>
                <Body className={'app-settings'}>
                    <Sidebar>
                        <Sticky stickyStyle={{ top: '70px' }} >
                            <Links links={this.links} />
                        </Sticky>
                    </Sidebar>
                    <Content>
                        {this.props.controls}
                        {this.props.settingsBody}
                    </Content>
                </Body>
            </View>)
    }
}