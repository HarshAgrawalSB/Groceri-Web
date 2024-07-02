import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { createPortal } from "react-dom";
import { login } from '../../services/AuthService';
import { useDispatch } from 'react-redux'
import { setToken } from '../../redux/slices/tokenSlice';
import { useNavigate } from 'react-router-dom';
import SignUp from '../../pages/SignUp';
import toast from 'react-hot-toast';

const AuthModal = forwardRef(({ }, ref) => {

    const dispatch = useDispatch();

    const [formName, setFormName] = useState('signin')


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialog.current.showModal();
            },
        };
    });

    const handleLogin = async () => {


        const data = await login(email, password)

        if (data.message) {
            toast.success(data.message)
        }



        const userData = {
            token: data.token,
            name: data.user.name,
            email: data.user.email
        }

        dispatch(setToken(userData));

        dialog.current.close()


    }


    const openSignUpForm = (fName) => {
        setFormName(fName)
    }




    return createPortal(
        <>
            <dialog id="auth-modal" ref={dialog} className=" w-8/12 h-[65%] rounded-lg p-1 overflow-y-hidden">

                <div onClick={() => { dialog.current.close() }} className='flex justify-end text-xl font-semibold cursor-pointer'>
                    X
                </div>


                {/* <div className='grid md:grid-cols-2 grid-rows-2 '> */}



                {/* </div> */}

                <div className="grid md:grid-cols-2 ">
                    <img
                        className="mx-auto h-full w-full"
                        src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Flogin.png&w=1920&q=75"
                        alt="Logo"
                    />

                    {
                        formName == 'signin' ?
                            <div className="max-w-md w-full space-y-8 px-4">
                                <div>
                                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                                        Sign in to your account
                                    </h2>
                                </div>
                                <div className="mt-8 space-y-6">
                                    <div className="rounded-md shadow-sm -space-y-px">
                                        <div className='md:w-[70%] md:mx-auto my-1'>
                                            <label htmlFor="email" className="sr-only">Email address</label>
                                            <input
                                                value={email}
                                                onChange={(e) => { setEmail(e.target.value) }}
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                required
                                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                                placeholder="Email address"
                                            />
                                        </div>
                                        <div className='md:w-[70%] md:mx-auto my-1'>
                                            <label htmlFor="password" className="sr-only">Password</label>
                                            <input
                                                value={password}
                                                onChange={(e) => { setPassword(e.target.value) }}
                                                id="password"
                                                name="password"
                                                type="password"
                                                autoComplete="current-password"
                                                required
                                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                                placeholder="Password"
                                            />
                                        </div>
                                    </div>

                                </div>
                                <div className='md:w-[70%] md:mx-auto'>
                                    <button
                                        onClick={handleLogin}

                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        Sign in
                                    </button>
                                </div>

                                {
                                    formName == 'signin' ?

                                        <div>
                                            <p>Don't have an account, <span className='text-emerald-600' onClick={() => { openSignUpForm('signup') }}>Sign Up</span></p>
                                        </div>

                                        :

                                        <div>
                                            <p>Already have an account, <span className='text-emerald-600' onClick={() => { openSignUpForm('signin') }}>Sign In</span></p>
                                        </div>
                                }



                            </div>
                            :
                            <SignUp formName={formName} setName={openSignUpForm} />
                    }

                </div>

            </dialog>
        </>,
        document.getElementById("auth-modal")
    );

})

export default AuthModal