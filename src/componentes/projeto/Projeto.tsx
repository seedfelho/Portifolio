import "./Projeto.css";
type ProjetoProps={
    titulo:string,
    imagem:string,
    resumo:string
}
function Projeto(props:ProjetoProps){
    return(
        <div className="projeto_content">
            <div className="img_projeto">
                <img className="imgbar" src={props.imagem} alt=""/>
            </div>
            <div className="titulofoto">
                <h1 className="h1-titulo">{props.titulo}</h1>
                <p className="resumo">{props.resumo}</p>
            </div>
        </div>
    )
}

export default Projeto