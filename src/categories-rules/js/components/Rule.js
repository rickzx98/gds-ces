import React from 'react';
import lodash from 'lodash';

export default class Rule extends React.Component {
    componentWillMount() {
        this.setState({});
    }
    componentDidMount() {
        if (contains(this.props.rules, this.props.name)) {
            $('input#' + this.props.name).attr('checked', true);
        }
        else {
            $('input#' + this.props.name).removeAttr('checked');
        }
    }
    componentWillUnmount() {
        if (contains(this.props.rules, this.props.name)) {
            removeItem(this.props.rules, this.props.name);
        }
    }
    handleChange(event) {
        const isOn = $(event.target).is(':checked');
        if (this.props.rules) {
            if (isOn) {
                if (!contains(this.props.rules, this.props.name)) {
                    this.props.rules.push(this.props.name);
                }
            } else {
                if (contains(this.props.rules, this.props.name)) {
                    removeItem(this.props.rules, this.props.name);
                }
            }
        }
        if (this.props.onChange) {
            this.props.onChange();
        }
    }
    render() {
        return (<td class="rule">
            <div class="row">
                <div class="switch tiny">
                    <input onChange={this.handleChange.bind(this)} class="switch-input" id={this.props.name} type="checkbox" name={this.props.name} />
                    <label class="switch-paddle" for={this.props.name}>
                        <span class="switch-active" aria-hidden="true">Yes</span>
                        <span class="switch-inactive" aria-hidden="true">No</span>
                    </label>
                </div>
                <div class="column"></div>
                <label for={this.props.name}>{this.props.label}</label>
            </div>
        </td>);
    }
}

function contains(list, item) {
    return lodash.findIndex(list, i => i === item) > -1;
}

function removeItem(list, item) {
    const index = lodash.findIndex(list, i => i === item);
    list.splice(index, 1);
}