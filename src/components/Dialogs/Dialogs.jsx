import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {Redirect} from "react-router-dom";

export const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);

    if (!props.isAuth) return <Redirect to={"/Login"}/>;

    const addNewMessage = (values) => {
        props.sendMessage(values.message);
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.dialog}>
                    {messagesElements}
                </div>
            </div>


            <Formik
                initialValues={{message: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.message) {
                        errors.message = 'Enter you message please';
                    }
                    if (values.message.length > 20) {
                        errors.message = 'Max 20 symbols';
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    addNewMessage(values);
                    setSubmitting(false);
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting
                  }) => (
                    <Form onSubmit={handleSubmit}>
                        <div>
                            <Field
                                className={(errors.message && touched.message && errors.message) ? s.fielderror : ""}
                                type="textarea"
                                name="message"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.message}
                            />
                        </div>
                        <span className={s.error}>{errors.message}</span>
                        <div>
                            <button type="submit" disabled={isSubmitting}>
                                Send Message
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
export default Dialogs;
        