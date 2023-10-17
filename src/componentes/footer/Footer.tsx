import './Footer.css'
import { Link } from 'react-router-dom'

function Footer(){
    return(
        <footer>
            <div className='container'>
                <Link className='text' to="/contato">Contatos</Link>
            </div>
        </footer>
    )
}

export default Footer