import React from 'react';
import {toast, ToastContainer} from "react-toastify";
import {Box, Button} from "@mui/material";
import {Field, Form, Formik} from "formik";
import {TextField} from "formik-mui";
import Layout from "../components/Layout";
import {useDispatch, useSelector} from "react-redux";
import {signInUser} from "../redux/action/userAction";
import * as Yup from "yup";
import {string} from "yup";
import {Navigate} from "react-router-dom";



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


const SignInPage = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.usersReducer.isAuth)

    const notify = () => toast("Wow success registration!");
    const handleSubmit = (values) => {
        dispatch(signInUser(values))
        notify()
        // console.log(isAuth)
    }


    return (
        <Layout>
            {isAuth && (
                <Navigate to="/user-page" replace={true} />
            )}
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
                        email: '',
                        password: ''
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
                            <Button type="submit" >Submit</Button>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Layout>
    );
};

let userSchema = Yup.object().shape({
    email: string().email().required(),
    password: string().required().min(4).max(35),
});

export default SignInPage;