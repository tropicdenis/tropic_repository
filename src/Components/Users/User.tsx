import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user-avatar.jpg";
import {NavLink} from 'react-router-dom';
import {UserType} from "../../Redux/UsersReducer";
import Paginator from "../common/Paginator/Paginator";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    users: Array<UserType>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    folowingInProgress: Array<number>
}
let User = ({user, folowingInProgress, unfollow, follow}: any) => {
    return (
        <div key={user.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                             className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={folowingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id);
                        }}>Unfollow</button>
                        : <button disabled={folowingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }}>Follow</button>
                    }
                </div>
            </span>
            <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                    <   div>{"user.location.city"}</div>
                    </span>
            </span>
        </div>)
}

export default User