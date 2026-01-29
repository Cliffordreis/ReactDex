import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    // Estado para controlar abrir/fechar o menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Classes comuns para os links (para não repetir código)
    const linkClasses = "bg-gray-700 p-2 rounded-md hover:text-blue-200 hover:bg-gray-600 transition-colors text-center";

    return (
        <nav className="bg-gray-900 text-white p-4 shadow-lg relative z-50">
            
            {/* =======================================================
               VERSÃO DESKTOP (Aparece apenas em LG ou maior)
               O layout que você já fez: Links cercando a Logo
            ======================================================= */}
            <div className="hidden lg:flex items-center justify-center gap-6 font-bold">
                <Link to="/Buladex" className={linkClasses}>Buladex</Link>
                <Link to="/Poketipo" className={linkClasses}>Poketipo</Link>
                
                {/* Logo Central */}
                <Link to="/">
                    <img 
                        className='drop-shadow-[0_0_15px_rgba(34,211,238,0.7)] hover:scale-105 transition-transform' 
                        src='../Logo.png' 
                        alt="ReactDex Logo"
                        width={150} 
                    />
                </Link>

                <Link to="/Digipokemon" className={linkClasses}>Digipokemon</Link>
                <Link to="/Sobre" className={linkClasses}>Sobre</Link>
            </div>


            {/* =======================================================
               VERSÃO MOBILE & TABLET (Aparece em MD ou menor)
               Logo centralizada e Botão na direita
            ======================================================= */}
            <div className="lg:hidden flex items-center justify-between">
                
                <div className="w-10"></div>

                {/* 2. Logo Centralizada */}
                <Link to="/">
                    <img 
                        className='drop-shadow-[0_0_15px_rgba(34,211,238,0.7)]' 
                        src='../Logo.png' 
                        alt="ReactDex Logo"
                        width={150} // Um pouco menor no mobile
                        onClick={() => setIsMenuOpen(false)}
                    />
                </Link>

                {/* 3. Botão Hambúrguer (Direita) */}
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 text-gray-300 hover:text-white focus:outline-none w-10"
                >
                    {isMenuOpen ? (
                        // Ícone X (Fechar)
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    ) : (
                        // Ícone Barras (Menu)
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                    )}
                </button>
            </div>


            {/* =======================================================
               DROPDOWN MENU (Abre quando clica no botão)
            ======================================================= */}
            {isMenuOpen && (
                <div className="lg:hidden absolute card-anm-out top-full left-0 w-full bg-gray-800 border-t border-gray-700 flex flex-col p-4 gap-3 shadow-xl animate-fade-in-down">
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