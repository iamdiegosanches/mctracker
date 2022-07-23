import './style.css';
import logo from '../../assets/imgs/logo.png';

import profile from '../../assets/imgs/profile.svg'

function Header() {

    return (
        <nav>
            <div className="container">
                <img src={logo} className="logo" alt="logo"/>
                <div className="search-bar">
                    <span className="material-symbols-sharp">search</span>
                    <input type="search"/>
                </div>
                <div className="profile-area">
                    <div className="profile">
                        <img src={profile} alt="Profile picture" />
                    </div>
                </div>
                <button id="menu-btn">
                    <span className="material-symbols-sharp">menu</span>
                </button>
            </div>
        </nav>
    )
}

export default Header;