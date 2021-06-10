import {Redirect} from "react-router-dom";
import React, {ComponentType, Suspense} from "react";
import {AppStateType} from "../Redux/redux_store";
import {connect} from "react-redux";
import Preloader from "../Components/common/Preloader/Preloader";

type MapStatePropsForRedirectType = {
    isAuth: boolean
};

let mapStateToPropsForRedirect = (state: AppStateType): MapStatePropsForRedirectType => {
    return {
        isAuth: state.auth.isAuth
    }
};

export function withSuspense <T>(Component: ComponentType<T>) {
    return (props: any) => {
        return <Suspense fallback={<Preloader/>}>
            <Component {...props}/>
            </Suspense>
    }
    const RedirectComponent = (props: MapStatePropsForRedirectType) => {
        let {isAuth, ...restProps} = props
console.log(isAuth)
        if (!isAuth) return <Redirect to={"/login"}/>
        return <Component {...restProps as T}/>
    }
    const ConnectRedirectComponent = connect (mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectRedirectComponent
}

