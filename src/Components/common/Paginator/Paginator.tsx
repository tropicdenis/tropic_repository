import React from "react";
import styles from "./Paginator.module.css";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
}
let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}: PropsType) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(p => {
                return <span className={currentPage === p ? styles.selectedPage : ''}
                             onClick={(event) => {
                                 onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
    )
}

export default Paginator