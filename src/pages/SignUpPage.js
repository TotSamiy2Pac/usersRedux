import React from 'react';
import {Box, Button} from "@mui/material";
import {Field, Form, Formik} from "formik";
import {TextField} from "formik-mui";
import Layout from "../components/Layout";
import {string} from "yup";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import {addNewUser} from "../redux/action/userAction";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const style = {
    // position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    margin: '20px auto',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const SignUpPage = () => {
    const dispatch = useDispatch()

    const notify = () => toast("Wow success registration!");

    const handleSubmit = (values) => {
        dispatch(addNewUser(values))
        notify()
    }

    return (
        <Layout>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <Box sx={style}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingBottom: "20px"

                }}>
                    <h2>Register</h2>
                </div>
                <Formik
                    initialValues={{
                        name: '',
                        country: '',
                        email: '',
                        password: '',
                        password1: '',
                        avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867"
                    }}
                    validationSchema={userSchema}
                    onSubmit={(values,action) => {
                        handleSubmit(values)
                        action.resetForm()
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
                            <div className={'boxField'}>
                                <label>Your Password</label>
                                <Field
                                    component={TextField}
                                    label="Password"
                                    name="password"
                                    variant="outlined"
                                    type={'password'}
                                    disabled={false}
                                />
                            </div>
                            <div className={'boxField'}>
                                <label>Repeate password</label>
                                <Field
                                    component={TextField}
                                    label="Repeate password"
                                    name="password1"
                                    variant="outlined"
                                    type={'password'}
                                    disabled={false}
                                />
                            </div>
                            <Button type="submit" >Submit</Button>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Layout>
    );
};

let userSchema = Yup.object().shape({
    name: string().required().min(2),
    country: string().required().min(2),
    email: string().email().required(),
    password: string().required().min(4).max(35),
    password1: string().required().min(4).max(35).oneOf([Yup.ref('password'), null], 'Пароли должны совпадать'),
});

export default SignUpPage;