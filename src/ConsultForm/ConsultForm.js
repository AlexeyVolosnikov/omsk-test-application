import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import {EmailField} from "./EmailField";
import {PhoneField} from "./PhoneField";
import {MessageField} from "./MessageField";
import './consultForm.scss';
import {SubmitButton} from "./SubmitButton";

/*
* Пустое ли поле
* */
const required = value => (value || typeof value === 'number' ? undefined : 'This field is required')


/*
* Регулярное выражение для проверки валидности вводимого в поле майла
* */
const validateEmail = value => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const valid = re.test(String(value).toLowerCase());
    return (valid) ? "" : "Email is invalid"
}


class ConsultForm extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <Field
                        name="emailField"
                        component={EmailField}
                        validate={[required, validateEmail]}
                        label={"*Please enter your email"}
                    />
                    <Field
                        name={"phone-number"}
                        component={PhoneField}
                        label={'WhatsApp (optional)'}
                    />
                    <Field
                        name={"message"}
                        component={MessageField}
                        validate={required}
                        label={"Your message"}
                    />
                    <SubmitButton
                        value={"GET FREE CONSULTATION"}
                    />
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'whatsapp'
})(ConsultForm)
