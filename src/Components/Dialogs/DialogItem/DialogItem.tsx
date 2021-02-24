import React from "react";
import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css"

type DialogItemType = {
    name: string,
    id: number
}

const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
            <img className={s.dialogItemImage}
                src={"https://m.buro247.ru/images/senina/SpongeBob_stock_art.jpg"}
                alt={"Spounge Bob"}
            />
        </div>
    )
}



export default DialogItem

