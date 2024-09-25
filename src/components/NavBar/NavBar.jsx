import logo from "../../assets/Logo.jpg"
import Cartwidget from "./CartWidget"
import "./navbar.scss"
import ItemListConteiner from "../ItemListConteiner/ItemListConteiner"

const NavBar = () => {
    return ( 
        <nav className="navbar">
            <div className="brand">
                <img src={logo} alt="logo" width={30} />
            </div>
            <ul className="categorias">
                <li>inicio</li>
                <li>Cosas</li>
                <li>Cosas 2</li>
            </ul>
            <Cartwidget />
        </nav>
    )
}

export default NavBar