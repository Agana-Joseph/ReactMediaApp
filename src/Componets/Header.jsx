import React, { useState } from "react";
import './styles/Header.scss';
import { Close, MenuBookOutlined } from '@material-ui/icons'
import { Link } from "react-router-dom";


const Header = ( ) => {
    const  [active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active)
    }


    return (
        <div className="header">
            <div className="header_logo">
                <h1>JOSEPH</h1>
            </div>
            

            <nav>
                <ul>
                    <div className="closed">
                        <Close className="close" onClick={showMenu} />
                    </div>

                    <li>
                        <Link to = '/'> <b>Home</b> </Link>
                        <Link to = '/'> <b>About</b> </Link>
                        <Link to = '/'> <b>Porfolio</b> </Link>
                        <Link to = '/'> <b>Blog</b> </Link>
                        <Link to = '/'> <b>Contact</b> </Link>
                    </li>
                </ul>
            </nav>

            <div className="changer">
                <MenuBookOutlined className="menu" onClick={showMenu}/>
            </div>

        </div>
    )
}

export default Header