import React, { useState } from 'react';
import axios from 'axios';

import log_back from '../assets/log_back.svg'
import logo from '../assets/logo.svg'
import style from './Login.module.css'


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {

        console.log({username, password});
        window.location.href = '/admin-dashboard';
        // try {
        //     const response = await axios.post('/api/login', { username, password });
        //     const data = response.data;

        //     localStorage.setItem('userData', JSON.stringify(data));

        //     if (data.userType === 'admin') {
        //         window.location.href = '/admin-dashboard';
        //     } else if (data.userType === 'regular') {
        //         window.location.href = '/user-dashboard';
        //     }
        // } catch (err) {
        //     setError('Login failed. Please check your credentials.');
        // }
    };


    return (
        <>
            <div >
                <img className={style.back} src={log_back} alt="" />
                <div className={style.grap} >
                    <div className={style.logo}>

                        <img className={style.main_logo} src={logo} alt="LOGO" />

                        <div className={style.title}>
                            <div className={style.space}>
                                <p className={style.in}>in</p>
                            </div>
                            <div className={style.small_text} style={{ color: "rgb(46, 92, 167)" }}>
                                <p className={style.text}>Bách Khoa</p>
                                <p className={style.text} >giáo trình - tài liệu - đồ án</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.login}>
                        <div className={style.board}>
                            <div className={style.content}>
                                <h1 className={style.header1}>Đăng nhập</h1>
                                <p className={style.small_text}>Hãy sử dụng tài khoản my BK</p>
                                <hr className={style.line} />
                                <div className={style.mail_grap}>
                                    <p className={style.norm_text} > Email</p>
                                    <input className={style.inputt}
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div className={style.pass_grap}>
                                    <p className={style.norm_text} > Password</p>
                                    <input className={style.inputt}
                                        type="text"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <p className={style.forgot}>Quên mật khẩu</p>
                                <button className={style.login_button} onClick={handleLogin}>Đăng nhập</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Login;