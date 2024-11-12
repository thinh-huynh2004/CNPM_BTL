import style from  './Header.module.css'
import Component1 from '../assets/logo.svg'
import Bell from '../assets/Bell.svg'
import rectangle from '../assets/rectangle.svg'
import avatar from '../assets/avatar.png'
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
                            this is a dropdown
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
