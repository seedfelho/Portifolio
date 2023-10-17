
use("Portifolio");
db.dropDatabase();
db.createCollection("contato")
db.createCollection("projetos");

db.projetos.insertMany([
    {
        _id:1,
        titulo: "Barbie",
        resumo:"Site desenvolvido na materia de Framework 2 no 6° periodo do curso tecnico em informatica para internet",
        imagem:"/barbie.png"
    },
    {
        _id:2,
        titulo: "Gameficação na educação",
        resumo:"O projeto tem como objetivo desenvolver um site para os professores poderem acessar e ver ferramentas que ele pode ultilizar para deixar o estudar algo mais divertido",
        imagem:"/gamificacao.png"
    },
    {
        _id:3,
        titulo: "OBI",
        resumo:"Projeto com objetivo de preparar os alunos para a OBI(olímpida brasileira de informatica) e estuda mais sobre programação",
        imagem:"/logoObi.png"
    }
])



db.contato.insertMany([
    {
        _id:,
        nome:"",
        email:"",
        descricao:""
    }
])