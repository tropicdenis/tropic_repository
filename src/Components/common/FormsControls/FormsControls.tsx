import React from "react";
import styles from './FormControls.module.css';
import {Field} from "redux-form";
import {required} from "../../../utils/validators/validators";

export const FormControl = ({input, meta: {touched, error}, children}: any) => {
    const hasError = touched && error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}

        </div>
    )
}

export const Textarea = (props: any) => {
    const {input, meta, children, ...restProps} = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
    )
};

export const Input = (props: any) => {
    const {input, meta, children, ...restProps} = props;
    return (
        <FormControl {...props}><input {...input} {...restProps} /></FormControl>

    )
};

export const createField = (placeholder: string | null, name: string, validators: any[],
                            component: (props: any) => JSX.Element, props?: any, text?: "" | string) => (
    <div>
        <Field placeholder={placeholder}
               name={name}
               validate={validators}
               component={component}
               {...props}
               {...text}
        />
    </div>
)