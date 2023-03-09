
import logo from '../download.png'
import SearchIcon from "@mui/icons-material/Search"
import './Header.css'
import { Link } from "react-router-dom"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'

function Header() {

    return (
        <nav className='header'>
            <img className='logo' src={logo} alt='logo' />
            <div className='header__search'>
                <input type="text" className="header__searchinput" />
                <SearchIcon className="searchicon" />
            </div>
            <div className='header__nav'>
                <Link to="/" className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionone'>Hello,user</span>
                        <Link to="/login">
                            <span className='header__optiontwo'>sign in</span>
                        </Link>
                    </div>
                </Link>
                <Link to="/" className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionone'>return</span>
                        <span className='header__optiontwo'>&order</span>
                    </div>
                </Link>
                <Link to="/" className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionone'>you</span>
                        <span className='header__optiontwo'>prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className='shop_icon'>
                    <div className='header__optionBasket' >
                        <ShoppingBasketIcon />
                        <span className=' header__basketcount'>2</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header