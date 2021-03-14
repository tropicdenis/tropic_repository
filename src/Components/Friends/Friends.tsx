import React from "react";
import s from './Friends.module.css'
import {FriendType} from "../../Redux/State";


type FriendsPropsType = {
    friends: FriendType[]
}

export const Friends = (props:FriendsPropsType) => {
    return (
        <div>
            <h2>Friends</h2>
            <div className={s.friendsItem}>
                <img className={s.friendImage}
                     src={props.friends[0].avatarURL}/>
                <p>{props.friends[0].name}</p>
            </div >
            <div className={s.friendsItem}>
                <img className={s.friendImage}
                     src={props.friends[1].avatarURL}/>
                <p>{props.friends[1].name}</p>
            </div>
            <div className={s.friendsItem}>
                <img className={s.friendImage}
                     src={props.friends[2].avatarURL}/>
                <p>{props.friends[2].name}</p>
            </div>
        </div>
    )
}