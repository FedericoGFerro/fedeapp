import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <div>
                Tienda
            </div>
            <div>
                <button>Categorias</button>
                <button>Ofertas</button>
                <button>Informacion</button>
                <button>Promociones</button>
                <button>Contacto</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar