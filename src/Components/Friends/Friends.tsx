import React from "react";
import s from './Friends.module.css'
import {StateType} from "../../Redux/State";

type FriendsPropsType = {
    friends: StateType
}

export const Friends = (props:FriendsPropsType) => {
    return (
        <div>
            <h2>Friends</h2>
            <div className={s.friendsItem}>
                <img className={s.friendImage}
                     src={props.friends.friends[0].avatarURL}/>
                <p>{props.friends.friends[0].name}</p>
            </div >
            <div className={s.friendsItem}>
                <img className={s.friendImage}
                     src={props.friends.friends[1].avatarURL}/>
                <p>{props.friends.friends[1].name}</p>
            </div>
            <div className={s.friendsItem}>
                <img className={s.friendImage}
                     src={props.friends.friends[2].avatarURL}/>
                <p>{props.friends.friends[2].name}</p>
            </div>
        </div>
    )
}