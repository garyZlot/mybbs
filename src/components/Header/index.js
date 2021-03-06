import { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css"

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="nav">
                    <span className="left-link">
                        <Link to="/">
                            首页
                        </Link>
                    </span>
                    <span className="right-link">
                        <Link to="/login">
                            登录
                        </Link>
                    </span>
                </div>
            </div>
        )
    }
}

export default Header;