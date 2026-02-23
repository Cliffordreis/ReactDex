import { useState } from 'react';
import { Link } from 'react-router-dom';
import LOGOIMG from '../assets/logo.png';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const linkClasses = `
        px-3 py-1.5 rounded-lg 
        text-slate-300 
        hover:text-white 
        hover:bg-slate-700/50 
        transition-all duration-200
    `;

    return (
        <nav className="bg-slate-900/70 backdrop-blur-md border-b border-slate-700 text-white p-4 sticky top-0 z-50">
            
            {/* DESKTOP */}
            <div className="hidden lg:flex items-center justify-center gap-6 font-semibold">
                
                <Link to="/Buladex" className={linkClasses}>Buladex</Link>
                <Link to="/Poketipo" className={linkClasses}>Poketipo</Link>
                
                {/* Logo */}
                <Link to="/">
                    <img 
                        className='drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] hover:scale-105 transition-all duration-300' 
                        src={LOGOIMG}
                        alt="ReactDex Logo"
                        width={150} 
                    />
                </Link>

                <Link to="/Digipokemon" className={linkClasses}>Digipokemon</Link>
                <Link to="/Sobre" className={linkClasses}>Sobre</Link>
            </div>

            {/* MOBILE */}
            <div className="lg:hidden flex items-center justify-between">
                
                <div className="w-10"></div>

                <Link to="/">
                    <img 
                        className='drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]' 
                        src={LOGOIMG}
                        alt="ReactDex Logo"
                        width={140}
                        onClick={() => setIsMenuOpen(false)}
                    />
                </Link>

                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 text-slate-300 hover:text-white w-10 transition"
                >
                    {isMenuOpen ? (
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* MENU MOBILE */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md border-t border-slate-700 flex flex-col p-4 gap-3 shadow-xl animate-fade-in-down">
                    
                    <Link to="/Buladex" onClick={() => setIsMenuOpen(false)} className={linkClasses}>Buladex</Link>
                    <Link to="/Poketipo" onClick={() => setIsMenuOpen(false)} className={linkClasses}>Poketipo</Link>
                    <Link to="/Digipokemon" onClick={() => setIsMenuOpen(false)} className={linkClasses}>Digipokemon</Link>
                    <Link to="/Sobre" onClick={() => setIsMenuOpen(false)} className={linkClasses}>Sobre</Link>

                </div>
            )}
        </nav>
    )
}

export default Header;