import React from "react";
import reduxForm from "redux-form"
import Field from "redux-form";

const LoginForm: React.FC<MixFormPropsType> = (props: any) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Login"} name={"login"} component={"input"}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component={"input"}/>
                </div>
                <div>
                    <Field type={"chekbox"} name={"remember me"} component={"input"}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
};

const LoginReduxForm = reduxForm({form: "contact"})(LoginForm);

const Login = (props: any) => {
    const onSubmit = (formData: any) => {
            console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};
export default Login;