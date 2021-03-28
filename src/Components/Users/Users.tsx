import React from 'react';
import styles from './users.module.css';

let Users = (props:) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://cdn24.img.ria.ru/images/155319/66/1553196608_0:6:3072:1734_1920x0_80_0_0_ee81a8f77cd08ddce13416b49b839a7f.jpg',
                    followed: false,
                    fullName: "Hi, how are you?",
                    status: 'I am a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://cdn24.img.ria.ru/images/155319/66/1553196608_0:6:3072:1734_1920x0_80_0_0_ee81a8f77cd08ddce13416b49b839a7f.jpg',
                    followed: true,
                    fullName: "Hi, how are you?",
                    status: 'I am a boss',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://cdn24.img.ria.ru/images/155319/66/1553196608_0:6:3072:1734_1920x0_80_0_0_ee81a8f77cd08ddce13416b49b839a7f.jpg',
                    followed: false,
                    fullName: "Hi, how are you?",
                    status: 'I am a boss',
                    location: {city: 'Kiev', country: 'Ukrain'}
                }
            ]
        )
    }

    return <div>
        {props.users.map(u: => <div key={u.id}>
            <span>
            <div>
            <img src={u.photoUrl} className={styles.userPhoto}/>
            </div>
            <div>
        {u.followed
            ? <button onClick={()=> {props.unfollow(u.id)}}>Unfollow</button>
            : <button onClick={()=> {props.follow(u.id)}}>Follow</button>
        }
            <button>Follow</button>
            </div>
            </span>
            <span>
            <span>
            <div>{u.fullName}</div><div>{u.status}</div>
            </span>
            <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
            </span>
            </span>
            </div>)}
    </div>
}

export default Users