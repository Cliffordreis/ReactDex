import { Link } from 'react-router-dom';

function Header (){
    return(
        <nav className="bg-gray-900 p-4 text-white flex gap-4 font-bold items-center">
            <img className='' src='../Logo.png' width={150}></img>
            <Link to="/" className='hover:text-blue-200'>Home</Link>
            <Link to="/Buladex" className='hover:text-blue-200'>Buladex</Link>
            <Link to="/Podetipo" className='hover:text-blue-200'>Poketipo</Link>
            <Link to="/Digipokemon" className='hover:text-blue-200'>Digipokemon</Link>
        </nav>
    )
}

export default Header;