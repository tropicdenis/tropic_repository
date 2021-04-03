import React from 'react';
import styles from './users.module.css';
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../.././assets/images/user-avatar.jpg'

export const Users = (props: UsersPropsType) => {
    if (props.usersPage.users.length === 0) {
        debugger
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then( response => {
            props.setUsers(response.data.items);
        });
    }

    return <div>

        {props.usersPage.users.map(u => <div key={u.id}>
            <span>

            <div>
            <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
            </div>
            <div>
        {u.followed
            ? <button onClick={() => {
                props.unfollow(u.id)
            }}>Unfollow</button>
            : <button onClick={() => {
                props.follow(u.id)
            }}>Follow</button>
        }
            </div>
            </span>
            <span>
            <span>
            <div>{u.fullName}</div><div>{u.status}</div>
            </span>
            <span>
            </span>
            </span>
        </div>)}
    </div>
}

export default Users