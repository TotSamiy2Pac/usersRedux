import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addUser, getUsers} from "../redux/action/userAction";
import CustomTable from "../components/Table";
import ModalField from "../components/ModalField";
import {CLOSE, OPEN} from "../redux/types/types";
const UserPage = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.usersReducer.users)
    const [user, setUser] = useState({})

    const handleOpen = () => dispatch({type: OPEN});
    const handleClose = () => dispatch({type: CLOSE});


    useEffect(() => {
        dispatch(getUsers())
    },[])

    return (
        <div className={'container'}>
            <ModalField handleOpen={handleOpen} handleClose={handleClose}/>
            <CustomTable users={users} />
        </div>
    );
};

export default UserPage;