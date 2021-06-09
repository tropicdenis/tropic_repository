import React from "react";
import {UserType} from "../../Redux/UsersReducer";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

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
let Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props}: PropsType) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <Paginator totalUsersCount={totalUsersCount} currentPage={currentPage}
                       onPageChanged={onPageChanged} pageSize={pageSize}/>

            {
                users.map(u => <User user={u} folowingInProgress={props.folowingInProgress}
                                     follow={props.follow} unfollow={props.unfollow} key={u.id}
                />)
            }
        </div>
    )
}

export default Users