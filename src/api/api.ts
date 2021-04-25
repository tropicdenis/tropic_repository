import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "5ce17daa-8642-4a76-b5a3-3d919299f84b"
    }
})

export const usersAPI = {
    getUsers (currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`
            )
    },
    getProfile(userId: number) {
        return instance.get(`profile/` + userId);
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}


