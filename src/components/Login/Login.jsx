import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from "./login.module.css";


const onSubmit = (formData) => {
    console.log(formData);
}

const Login = () => (
    <div>
        <Formik
            initialValues={{ myLogin: '', password: '', rememberMe: '' }}
            validate={values => {
                const errors = {};
                if (!values.myLogin) {
                    errors.myLogin = 'Enter you login please';
                }
                if (!values.password) {
                    errors.password = 'Enter you password please';
                }
                if (values.myLogin.length > 10) {
                    errors.myLogin = 'Max 10 symbols';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                    let formData = values;
                     onSubmit(formData);
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
                            className={(errors.myLogin && touched.myLogin && errors.myLogin) ? s.fielderror : ""}
                            type="text"
                            name="myLogin"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.login}
                        />
                    </div>
                    <span className={s.error}>{errors.myLogin && touched.myLogin && errors.myLogin}</span>
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
);

export default Login;
