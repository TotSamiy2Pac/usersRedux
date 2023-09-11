import {ADD_USER, AUTH_USER, CLOSE, DELETE_USER, EDIT_USER, GET_USERS, LOG_OUT, OPEN, SET_USER} from "../types/types";


const initialState = {
    users: [],
    user: {},
    isOpen: false,
    isUpdate: false,
    isAuth: false,
    token : {}
}

export default function  usersReducer (state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {...state, users: action.payload}
        case ADD_USER:
            return {...state, isOpen: false, users: [...state.users, action.payload]}
        case DELETE_USER:
            return {...state, users: state.users.filter(user => user.id !== action.payload.id)}
        case EDIT_USER:
            return {...state, user: {}, isUpdate: false, isOpen: false, users: state.users.map(user => user.id === action.payload.id ? action.payload : user)}
        case SET_USER:
            return {...state, user: action.payload, isOpen: true, isUpdate: true}
        case OPEN:
            return {...state, isOpen: true}
        case CLOSE:
            return {...state, isOpen: false, isUpdate: false, user: {}}
        case AUTH_USER:
            return {...state, isAuth: true, token: action.payload.access_token}
        case LOG_OUT:
            return {...state, isAuth: false}
        default:
            return state
    }
}