import axios from "axios";
import {ADD_USER, DELETE_USER, EDIT_USER, GET_USERS} from "../types/types";

// export const authUser = (value) => {
//     return (dispatch) => {
//         axios.post(`https://api.escuelajs.co/api/v1/auth/login`, value)
//
//     }
// }


export const getUsers = () => {
    return (dispatch) => {
        axios(`https://64e2ee93bac46e480e77eb43.mockapi.io/users`)
            .then(res => dispatch({type: GET_USERS, payload: res.data}))
    }
}

export const addUser = (user) => {
    return (dispatch) => {
        axios.post(`https://64e2ee93bac46e480e77eb43.mockapi.io/users`, user)
            .then(res => dispatch({type: ADD_USER, payload: res.data}))
    }
}

export const deleteUser  = (user) => {
    return (dispatch) => {
        axios.delete(`https://64e2ee93bac46e480e77eb43.mockapi.io/users/${user.id}`)
            .then(res => dispatch({type: DELETE_USER, payload: res.data}))
    }
}

export const editUser = (user, userId) => {
    console.log(user, 'userac')
    return (dispatch) => {
        axios.put(`https://64e2ee93bac46e480e77eb43.mockapi.io/users/${userId}`, user)
            .then(res => dispatch({type: EDIT_USER, payload: res.data}))
    }
}