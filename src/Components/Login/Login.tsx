import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect, useDispatch, useSelector} from "react-redux";
import {login} from "../../Redux/auth_reducer";
import { Redirect } from "react-router-dom";
import style from './../common/FormsControls/FormControls.module.css';
import {AppStateType} from "../../Redux/redux_store";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
type LoginOwnProps= {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginOwnProps> & LoginOwnProps> = ({handleSubmit, error, captchaUrl}) => {
    return (
            <form onSubmit={handleSubmit}>
                    {createField("Email", "email", [required], Input)}
                    {createField("Password", "password", [required], Input, {type:"password"})}
                    {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}
                {captchaUrl && <img src={captchaUrl}/>}
                {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}
                {error && <div className={style.formSummaryError}>
                    {error}
                </div> }
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
};

const LoginReduxForm = reduxForm<FormDataType, LoginOwnProps>({form: 'login'})(LoginForm);

// type LoginPropsType = {
//     isAuth: boolean
//     login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
//     captchaUrl: string | null
// }

const Login: FC= () => {
    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl )
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth )
    const dispatch = useDispatch()

    const onSubmit = (formData: FormDataType) => {
            dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha));
    }
    debugger

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    )
};

const mapStateToProps = (state: AppStateType) => ({
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {login})(Login);