import React from 'react'
import './Login.css'
// import Link from "react-router-dom"

function Login() {
    return (
        <div className='login'>
            <img src="https://press.aboutamazon.in/system/files-encrypted/styles/nir_asset_small/encrypt/nasdaq_kms/assets/2020/03/05/18-21-23/Amazon-logo-th.jpg?itok=Q473rW7n" />
            <div className='login__container'>
                <h1 className='text'>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" required />
                    <h5>Password</h5>
                    <input type="password" required />
                    <button type="submit" className='signin_button'>Submit</button>

                </form>
                <button className='signup_button'>Create  Your Amazon Account</button>
            </div>

        </div>
    )
}

export default Login