import React from "react";
import {UserType} from "../../Redux/UsersReducer";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    users: Array<UserType>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    folowingInProgress: Array<number>
    portionSize: number
}
let Users = ({totalItemsCount, pageSize, currentPage, onPageChanged, users,portionSize, ...props}: PropsType) => {

    return (
        <div>
            <Paginator totalItemsCount={totalItemsCount} currentPage={currentPage}
                       onPageChanged={onPageChanged} pageSize={pageSize} portionSize={portionSize}/>

            {
                users.map(u => <User user={u} folowingInProgress={props.folowingInProgress}
                                     follow={props.follow} unfollow={props.unfollow} key={u.id}
                />)
            }
        </div>
    )
}

export default Users