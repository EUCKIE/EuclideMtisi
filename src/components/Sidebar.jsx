import { useState } from 'react';
import '../styles/index.css';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="mobile-header">
                <span className="mobile-header__logo">EM</span>
                <button className={`hamburger ${isOpen ? 'hamburger--active' : ''}`} onClick={toggleSidebar} aria-label="Toggle menu">
                    <span className="hamburger__line"></span>
                    <span className="hamburger__line"></span>
                    <span className="hamburger__line"></span>
                </button>
            </div>
            <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#hero" className="nav__link" onClick={() => setIsOpen(false)}>
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link" onClick={() => setIsOpen(false)}>
                                About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link" onClick={() => setIsOpen(false)}>
                                Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" className="nav__link" onClick={() => setIsOpen(false)}>
                                Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link" onClick={() => setIsOpen(false)}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
}

export default Sidebar;