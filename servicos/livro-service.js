const fs = require("fs")

function getTodosLivros(){
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    // Retorna uma lista de apenas um elemento
    // [ { id: 2, nome: "livro encontrado" }]
    const livroEncontrado = livros.filter(livro => livro.id === id)[0] 
    return livroEncontrado
}

function insereLivro(livroNovo){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const novaListaLivros = [...livros, livroNovo]
    fs.writeFileSync("livros.json", JSON.stringify(novaListaLivros))
}

function modificaLivro(modificacoes, id){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)
    // Altera apenas o conteudo modificado.
    // Se alterar o nome do livro a linha a seguir busca o livro no
    const conteudoAlterado = { ...livrosAtuais[indiceModificado], ...modificacoes }
    livrosAtuais[indiceModificado] = conteudoAlterado
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function excluiLivro(id){
    const livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    
    // Nova lista com livros filtrados por id diferente do passado
    const livrosFiltrados = livrosAtuais.filter( livro => livro.id !== id)
    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    excluiLivro
}