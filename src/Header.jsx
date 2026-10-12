import './header.css'

function Header () {
    return(
       <header className='header'>
            <p id='header-logo'>First Project</p>
            <nav className='header-nav'>
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
       </header> 
    )
}

export default Header;