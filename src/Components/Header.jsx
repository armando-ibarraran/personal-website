import headshot from '../assets/imgs/me.jpeg'
import './Header.css'

function Header() {
    return (
        <header>
            <div className='header-top'>
                <img className="header-portrait" src={headshot}></img>
                <div className='header-presentation'>
                    <h1 className="header-name">Carlos Armando Ibarrarán Arnaldo</h1>
                </div>
            </div>
            <p className='header-description'>I'm an undergraduate student in Applied Mathematics & Computer Engineering at ITAM, eager to solve real-world challenges with AI and statistics.</p>
            <hr className='header-divider'/>
        </header>
    )
}

export default Header