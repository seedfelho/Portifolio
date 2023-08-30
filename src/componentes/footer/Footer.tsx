import './Footer.css'

function Footer(){
    return(
        <footer>
            <div className='container'>
                <div className="infos">
                    <h1 className="text2">Me contrate :)</h1></div>
                    <nav className="product">
                        <ul className='ulfooter'><a className="text">Contatos:</a>
                            <li className='lifooter'>
                                <a className="padrao" href="#">LinkedIn</a>
                            </li>
                            <li className='lifooter'>
                                <a className="padrao" href="#">Telefone</a>
                            </li>
                            <li className='lifooter'>
                                <a className="padrao" href="#">Email</a>
                            </li>
                        </ul>
                    </nav>
                <div/> 
            </div>
        </footer>
    )
}

export default Footer