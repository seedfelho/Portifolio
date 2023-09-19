import { useState } from 'react';
import './Main.css'
import Projeto from '../projeto/Projeto';

type ProjetoType = {
    id: number,
    titulo: string,
    resumo:string,
    imagem: string
}

function Main(){
    const [texto,setTexto] = useState("")

    const projetos:ProjetoType[] = [
        {
            id:1,
            titulo: "Barbie",
            resumo:"Site desenvolvido na materia de Framework 2 no 6° periodo do curso tecnico em informatica para internet",
            imagem:"/barbie.png"
        },
        {
            id:2,
            titulo: "Gameficação na educação",
            resumo:"O projeto tem como objetivo desenvolver um site para os professores poderem acessar e ver ferramentas que ele pode ultilizar para deixar o estudar mais divertido",
            imagem:"/gamificacao.png"
        },
        {
            id:3,
            titulo: "OBI",
            resumo:"Projeto com objetivo de preparar os alunos para a OBI(olímpida brasileira de informatica) e estuda mais sobre programação",
            imagem:"/logoObi.png"
        }
]
    function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
        // console.log(e.target.value)
        setTexto(e.target.value)
    }
    return(
        <main className="main_projeto">
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
            <div className="pesquisa">
            <p>Buscar filme</p>
                <input className="barrapesquisa" type="text" onChange={mudaTexto}/>
                <div>
                    <p className="texto_digitado">Pesquisa: {texto}</p>    
                </div>
            </div>
            <div className="content_projeto">
                { projetos.filter((p) => p.titulo.toLowerCase().includes(texto)).map( (pro) => <Projeto key = { pro.id } titulo={ pro.titulo } resumo={ pro.resumo } imagem={pro.imagem}/>) }
            </div>
        </main>
    )
}

export default Main