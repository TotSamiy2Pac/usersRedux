import axios from "axios";
import {ADD_USER, AUTH_USER, DELETE_USER, EDIT_USER, GET_USERS, REGIS_USER} from "../types/types";
import {type} from "@testing-library/user-event/dist/type";

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

export const addNewUser = (values) => {
    return (dispatch) => {
        axios.post(`https://api.escuelajs.co/api/v1/users/`, values)
            .then(res => console.log(res.data))
    }
}

export const signInUser = (values) => {
    return (dispatch) => {
        axios.post(`https://api.escuelajs.co/api/v1/auth/login`, values)
            .then(res => {
                dispatch({type: AUTH_USER, payload: res.data})
                localStorage.setItem('token', JSON.stringify(res.data.access_token))
                // Cookies.set({'token': res.data.access_token})
            })
    }
}