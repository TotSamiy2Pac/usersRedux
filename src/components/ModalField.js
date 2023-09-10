import React, {useState} from 'react';
import {Box, Button, Modal} from "@mui/material";
import {Field, Form, Formik} from "formik";
import {CheckboxWithLabel, TextField} from 'formik-mui';
import {useDispatch, useSelector} from "react-redux";
import {addUser, editUser} from "../redux/action/userAction";
import {OPEN} from "../redux/types/types";



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const ModalField = ({ handleOpen, handleClose}) => {
    const dispatch = useDispatch()
    const open = useSelector(state => state.usersReducer.isOpen)
    const user = useSelector(state => state.usersReducer.user)
    const isUpdate = useSelector(state => state.usersReducer.isUpdate)


    const handleSubmit = (values) => {
        if (!!isUpdate){
            dispatch(editUser(values, user.id))
        }else {
            dispatch(addUser(values))
        }
    }

    return (
        <div className={'modalWrapper'}>
            <Button className={'btnCreate'} onClick={handleOpen}>CREATE</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingBottom: "20px"

                    }}>
                        {isUpdate ?
                            <h2>Update in User</h2>
                            :
                            <h2>Create new User</h2>
                        }
                    </div>
                    <Formik
                        initialValues={{
                            name: user.name || '',
                            country: user.country || '',
                            email: user.email || '',
                            hired: user.hired || false
                        }}
                        onSubmit={(values) => {
                            handleSubmit(values)
                        }}
                    >
                        {({ handleSubmit }) => (
                            <Form onSubmit={handleSubmit} className={'customForm'}>
                                <div className={'boxField'}>
                                    <label>Your Name</label>
                                    <Field
                                        component={TextField}
                                        label="Name"
                                        name="name"
                                        variant="outlined"
                                        disabled={false}
                                    />
                                </div>
                                <div className={'boxField'}>
                                    <label>Your Country</label>
                                    <Field
                                        component={TextField}
                                        label="Country"
                                        name="country"
                                        variant="outlined"
                                        disabled={false}
                                    />
                                </div>
                                <div className={'boxField'}>
                                    <label>Your Email</label>
                                    <Field
                                        component={TextField}
                                        label="Email"
                                        name="email"
                                        variant="outlined"
                                        disabled={false}
                                    />
                                </div>
                                {isUpdate ?
                                    <Field
                                        component={CheckboxWithLabel}
                                        type="checkbox"
                                        name="hired"
                                        color={'success'}
                                        Label={{ label: 'Hired' }}
                                        disabled={false}
                                    />
                                    :
                                    <></>
                                }
                                <Button type="submit" >Submit</Button>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Modal>
        </div>
    );
};

export default ModalField;