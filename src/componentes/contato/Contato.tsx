import './Contato.css'
import { useState } from 'react';
function Contato(){
    const [nome,setNome] = useState("");
    const [email,setEmail] = useState("");
    const [motivo,setMotivo] = useState("");
    function mudaNome(e:React.ChangeEvent<HTMLInputElement>){
        setNome(e.target.value)
    }
    function mudaEmail(e:React.ChangeEvent<HTMLInputElement>){
        setEmail(e.target.value)
    }
    function mudaMotivo(e:React.ChangeEvent<HTMLInputElement>){
        setMotivo(e.target.value)
    }
    return (
        
        <main className="mainContato">
            <form className="formulario" action="get">
                <label className="tituloInput" htmlFor="nome" >Nome</label>
                <input className="inputs" type="text" name="nome" id="nome" onChange={mudaNome} required/>
                <label className="tituloInput" htmlFor="email">E-mail</label>
                <input className="inputs" type="email" name="email" id="email" onChange={mudaEmail} required/>
                <label className="tituloInput" htmlFor="descricao">Motivo de contato</label>
                <textarea className="inputs descricao"  name="descricao" id="descricao" onChange={mudaMotivo} required></textarea>
                <button className="botaoForm" type="submit">Enviar</button>
            </form>
            <div className="alinaP">
                <p className="state">Nome:{nome}</p>
                <p className="state">E-mail: {email}</p>
                <p className="state">Motivo: {motivo}</p> 
            </div>
            
        </main>
    )
}

export default Contato