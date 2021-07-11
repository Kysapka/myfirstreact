import React from "react";
import { reduxForm } from 'redux-form'
import Field from "redux-form/lib/Field";


const LoginForm = (props) => {
    return (
        <form>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    return <div>
        <h1>Login</h1>
        <LoginReduxForm />
    </div>

}

export default Login;
