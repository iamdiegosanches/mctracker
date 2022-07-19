import './style.css';

function Header() {

    return (
        <nav>
            <div className="container">
                <a href="#" className="brand">Brand</a>
                <ul className="nav-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li className="close-btn"><i className='bx bx-x'></i></li>
                </ul>
                <i className='bx bx-menu-alt-right toggle-menu'></i>
            </div>
        </nav>
    )
}

export default Header;