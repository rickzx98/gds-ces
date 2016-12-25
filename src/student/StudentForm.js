import { Field, FieldValidator } from './../app-form/js/AppForm';

import AppForm from './../app-form/js/AppFormComponent';
import React from 'react';
import { connect } from 'react-redux';
import { setId } from '../app-form/js/AppFormActions';

@connect()
export default class StudentForm extends React.Component {
    componentWillMount() {
        this.props.dispatch(setId('00001'));
        this.formManager = {
            create: {
                action: '{Students.createStudent}'
            },
            update: {
                action: '{Students.updateStudent}',
                params: { studentId: '{id}' }
            },
            delete: {
                action: '{Students.deleteStudent}',
                params: { studentId: '{id}' }
            },
            get: {
                action: '{Students.getProfileByStudentId}',
                params: { studentId: '{id}' }
            },
            deletePopup: {
                title: 'Students',
                message: 'Do you want to remove this student?',
                okButton: 'Oh yeah!',
                cancelButton: 'No, wait!'
            }
        };

        this.formFields = [];

        let field = new Field('input');
        field.setLabel('First name');
        field.setName('firstName');
        field.setRequired(true);
        field.setValidator({
            required: new FieldValidator('onBlur', 'First name is REQUirED!', (event, done) => {
                done(event.target.value != null && !!event.target.value.length);
            })
        });
        field.setProperties({
            placeholder: 'Enter first name here'
        })
        this.formFields.push(field);

        field = new Field('input');
        field.setLabel('Last name');
        field.setName('lastName');
        field.setRequired(true);
        field.setValidator({
            required: new FieldValidator('onBlur', 'Last name is REQUirED!', (event, done) => {
                done(event.target.value != null && !!event.target.value.length);
            })
        });
        this.formFields.push(field);

        field = new Field('column');
        field.setProperties({
            className: 'columns large-6'
        });
        this.formFields.push(field);

        field = new Field('input');
        field.setName('studentId');
        field.setLabel('Student ID');
        field.setRequired(true);
        this.formFields.push(field);

        field = new Field('radio');
        field.setName('gender');
        field.setLabel('Gender');
        field.setRequired(true);
        field.setProperties({
            options: {
                'Male': 'male',
                'Female': 'female'
            }
        });
        this.formFields.push(field);
    }

    render() {
        return (
            <div>
                <div class="row large-12 medium-12 small-12">
                    <AppForm formManager={this.formManager} formFields={this.formFields} />
                </div>
            </div>)
    }
}