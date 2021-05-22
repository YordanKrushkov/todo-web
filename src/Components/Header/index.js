import styles from './index.module.css';
import { Link } from 'react-router-dom';


const Header = () => {
    
    return (
        <div className={ styles.header }>
            <nav className={ styles.nav }>
                <Link to="/" className={ styles.link }>Home</Link>
                <Link to="/about" className={ styles.link }>About</Link>
            </nav>
        </div>
    );
}

export default Header;