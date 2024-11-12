import style from  './Header.module.css'
import Component1 from '../assets/logo.svg'
import Bell from '../assets/Bell.svg'
import rectangle from '../assets/rectangle.svg'
import avatar from '../assets/avatar.png'
import logout from '../assets/logout_icon.svg'
import { Link } from 'react-router-dom';



function Header() {
    return (
        
        <header className={style.header}>
            <div className={style.Header_left}>
            <Link to="/">
                <img className={style.logo} src={Component1} alt="LOGO" />
                </Link>
                <svg  xmlns="http://www.w3.org/2000/svg">
                    <polygon points="0,0 320,0 320,80 200,150 0,150" style={ { fill: "#2e5ca7" }} />
               </svg>
            </div>
            <div className={style.Header_mid}></div>
            <div className={style.Header_right}>
                <div className={style.Header_right_layout}>
                    <div className={style.Header_bell}>
                        <img src={Bell} alt="bell" />
                    </div>
                    <div className={style.Header_avatar}>
                        <img src={avatar} alt="avatar" style={{width:"60px", height:"60px", borderRadius:"50px", border:"1px solid white"}} />
                        <div className={style.user_infor}>
                            <p className={style.user_inf}>email.example.hcmut.edu.vn</p>
                            <p className={style.user_inf} style={{marginBottom:"6px"}}>Nguyễn Thị Văn Tên</p>
                            <div className={style.infor_line}></div>
                            <div className={style.logout}>
                                <p style={{fontSize:"16px", fontWeight:"700", color:"#032B91"}}>Đăng xuất</p>
                                <img src={logout} className={style.logout_icon}></img>
                            </div>
                        </div>
                    </div>
                    <div className={style.Header_text}>
                        Số dư:
                    </div>
                    <div className={style.Header_cast}>
                        <p className={style.Cast_content}>99.000</p>
                        <img src={rectangle} alt="r" className={style.Cast_option} />
                    </div>
                </div>
            <svg className={style.reverse}  xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,0 320,0 320,80 200,150 0,150" style={ { fill: "#2e5ca7" }} />
                </svg>
            </div>
        </header>
    );
}

export default Header;
