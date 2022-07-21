import './style.css';
import logo from '../../assets/imgs/logo.svg';

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
                    <div className="theme-btn">
                        <span className="material-symbols-sharp active">light_mode</span>
                        <span className="material-symbols-sharp">dark_mode</span>
                    </div>
                    <div className="profile">
                        <img src={profile} alt="Profile picture" />
                    </div>
                    <h5>Profile name</h5>
                    <span className="material-symbols-sharp">expand_more</span>
                </div>
                <button id="menu-btn">
                    <span className="material-symbols-sharp">menu</span>
                </button>
            </div>
        </nav>
    )
}

export default Header;