import './Header.css'
import Logo from '../../Img/Logo - white.png'

function Header() {

    return(
        <div className="cabecalhoPrincipal">
            <div className="container">
                <div className="cabecalhoLogo">
                    <img src={Logo} alt="" className="logoContech" />
                </div>
                <nav className="cabecalhoNav">
                    <ul className="navList">
                        <li><a href="" className="navLink">Embarque</a></li>
                        <li><a href="../../pages/Inicio/Inicial" className="navLink">Início</a></li>
                        <li><a href="../../pages/Login/Login" className="navLink">Login</a></li>
                        <li className='cadastro'><a href="" id="cadastro" className="navLink">Cadastre-se </a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;