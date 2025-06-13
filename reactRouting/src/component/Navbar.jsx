import {Link} from 'react-router-dom';
import styles from "./Navbar.module.css"

const Navbar = () =>{
    return (
        <header className={styles.header}>
            <a href="/" className="logo">Logo</a>

            <nav className={styles.navbar}>
                <Link to ="/">Home</Link>
                <Link to = "/experience">Experience</Link>
                <Link to ="/portfolio">Portfolio</Link>
                <Link to ="/contact">Contact Me</Link>
            </nav>
        </header>
    )
}

export default Navbar;