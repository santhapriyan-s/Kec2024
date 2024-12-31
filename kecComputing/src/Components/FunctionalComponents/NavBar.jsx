import '../../assets/css/NavBar.css'
import { Link } from 'react-router-dom';
var NavBar = () =>{
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to='/' className='link'>Home</Link></li>
                    <li><Link to="/about" className='link' target='_blank'>About</Link></li>
                    <li><Link to="/gallery" className='link'>Gallery</Link></li>
                    <li><Link to="/contact" className='link'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar;