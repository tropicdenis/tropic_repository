import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user-avatar.jpg";
import {NavLink} from 'react-router-dom';
import {UserType} from "../../Redux/UsersReducer";
import axios from "axios";


type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    users: Array<UserType>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    toggleIsFollowingProgress: (toggle: boolean, userId: number) => void
    folowingInProgress: Array<number>
}
let Users = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? styles.selectedPage : ''}
                                 onClick={(event) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>

            {
                props.users.map(u => <div key={u.id}>
                <span>

                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </NavLink>
                </div>
             <div>
                {u.followed
                    ? <button disabled={props.folowingInProgress.some(id => id === u.id)} onClick={() => {
                        props.toggleIsFollowingProgress(true, u.id)
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                            {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "5ce17daa-8642-4a76-b5a3-3d919299f84b"
                                }
                            })
                            .then(response => {
                                if (response.data.resultCode == 0) {
                                    props.unfollow(u.id)
                                }
                                props.toggleIsFollowingProgress(false, u.id)
                            });
                    }}>Unfollow</button>
                    : <button disabled={props.folowingInProgress.some(id => id === u.id)} onClick={() => {
                        props.toggleIsFollowingProgress(true, u.id)
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                            {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "5ce17daa-8642-4a76-b5a3-3d919299f84b"
                                }
                            })
                            .then(response => {
                                if (response.data.resultCode == 0) {
                                    props.follow(u.id)
                                }
                                props.toggleIsFollowingProgress(false, u.id)
                            });


                    }}>Follow</button>
                }
                    </div>
                    </span>
                    <span>
                    <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    </span>
                    <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                    </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users