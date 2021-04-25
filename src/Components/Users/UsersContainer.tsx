import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    getUsers,
    setCurrentPage,
    toggleIsFollowingProgress,
    unfollow,
    UserType
} from "../../Redux/UsersReducer";
import {AppStateType} from "../../Redux/redux_store";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    folowingInProgress: Array<number>
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);

        this.props.getUsers(pageNumber, this.props.pageSize);

    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   folowingInProgress={this.props.folowingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
        return {
            users: state.usersPage.users,
            pageSize: state.usersPage.pageSize,
            totalUsersCount: state.usersPage.totalUsersCount,
            currentPage: state.usersPage.currentPage,
            isFetching: state.usersPage.isFetching,
            folowingInProgress: state.usersPage.folowingInProgress


        }
    }
;


type MapDispatchToPropsType =
    {
        follow: (userId: number) => void
        unfollow: (userId: number) => void
        setUsers: (users: Array<UserType>) => void
        setCurrentPage: (pageNumber: number) => void
        setTotalUsersCount: (totalCount: number) => void
        toggleIsFetching: (isFetching: boolean) => void
        toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
        getUsers: (currentPage: number, pageSize: number) => void
    }

export default connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, toggleIsFollowingProgress, getUsers: getUsers})(UsersContainer)

