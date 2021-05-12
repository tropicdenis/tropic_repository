import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import React from "react";

const maxLength100 = maxLengthCreator(100)

const AddMessageForm = (props:) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newMessageBody"
                       validate={[required, maxLength100]}
                       placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send Message</button>
            </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)