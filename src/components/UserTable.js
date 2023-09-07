import React from 'react';
import {IconButton, TableCell} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch} from "react-redux";
import {deleteUser, editUser} from "../redux/action/userAction";
import {OPEN, SET_USER} from "../redux/types/types";

const UserTable = ({user, i}) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteUser(user))
    }

    const handleEdit = () => {
        dispatch({type: SET_USER, payload: user})
        // dispatch(editUser(user))
    }

    const handleChek = () => {

    }
    return (
        <>
            <TableCell align="right">{i+1}</TableCell>
            <TableCell align="right">{user.name}</TableCell>
            <TableCell align="right">{user.country}</TableCell>
            <TableCell align="right">{user.email}</TableCell>
            <TableCell align="right">
                <input
                    type="checkbox"
                    checked={user.hired}
                    onChange={
                    handleChek
                    }
                />
            </TableCell>
            <TableCell align="right">
                <IconButton
                    aria-label="edit"
                    size="large"
                    onClick={handleEdit}
                >
                    <EditIcon fontSize="inherit" />
                </IconButton>
            </TableCell>
            <TableCell align="right">
                <IconButton
                    onClick={handleDelete}
                    aria-label="delete"
                    size="large"
                >
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </TableCell>
        </>
    );
};

export default UserTable;