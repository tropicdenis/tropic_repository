import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth_reducer";
import { Redirect } from "react-router-dom";
import style from './../common/FormsControls/FormControls.module.css';
import {AppStateType} from "../../Redux/redux_store";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Email"} name={"email"}
                           validate={[required]}
                           component={Input}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} type={"password"}
                           validate={[required]}
                           component={Input}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"}
                           component={Input}/> remember me
                </div>
                { props.error && <div className={style.formSummaryError}>
                    {props.error}
                </div> }
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm);

type LoginPropsType = {
    isAuth: boolean
    login: (email: string, password: string, rememberMe: boolean) => void
}

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
            props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

const mapStateToProps = (state: AppStateType) => ({
        isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {login})(Login);