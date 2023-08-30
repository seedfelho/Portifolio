import './Main.css'

function Main(){
    return(
        <main>
            <div className="containerMain">
                <p className="textMain">Ola, me chamo Sergio, sou um aluno do curso tecnico em informatica para internet que ao longo do curso desenvolveu alguns projetos. O objetivo deste portifolio é mostrar alguns deles</p>
            </div>
            <div>
                <nav className="navfeitos">
                    <ul className='feitos'><p className="titulofeitos">Aqui voce podera ver um pouco do meu trabalho:</p>
                        <li className="lifeitos">
                            <a className="textfeitos" href="#">Github</a>
                        </li>
                        <li className="lifeitos">
                            <a className="textfeitos" href="#">Site Barbie</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </main>
    )
}

export default Main