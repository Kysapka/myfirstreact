import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from "./login.module.css";
import connect from "react-redux/lib/connect/connect";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";






const Login = (props) => {

    // const onSubmit = (formData) => {
    //     props.login(formData.email, formData.password, formData.rememberMe );
    // }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return (
    <div>
        <Formik
            initialValues={{email: '', password: '', rememberMe: ''}}
            validate={values => {
                const errors = {email: '', password: '', rememberMe: ''};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                if (!values.password) {
                    errors.password = 'Enter you password please';
                }

                return errors;
            }}
            onSubmit={(values, {setSubmitting}) => {
                let formData = values;
                console.log(formData)
                // onSubmit(formData);
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
                    <h1>Login</h1>
                    <div>
                        <Field
                            className={(errors.email && touched.email && errors.email) ? s.fielderror : ""}
                            type="text"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.login}
                        />
                    </div>
                    <span className={s.error}>{errors.email && touched.email && errors.email}</span>
                    <div>
                        <Field
                            className={(errors.password && touched.password && errors.password) ? s.fielderror : ""}
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                    </div>
                    <span className={s.error}>{errors.password && touched.password && errors.password}</span>
                    <div>
                        <button type="submit" disabled={isSubmitting}>
                            Login
                        </button>
                    </div>
                    <div>
                        <Field
                            type="checkbox"
                            name="rememberMe"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />remember me
                    </div>
                </Form>
            )}
        </Formik>
    </div>
    )
};
const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login} )(Login);
