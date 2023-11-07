const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, excluiLivro } = require("../servicos/livro-service")

function getLivros(req, res) {
    try{
        // Simulação de erro
        // throw new Error("test")
        const livros = getTodosLivros()
        res.send(livros)
    }catch (error){
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {
    try{
        const id = req.params.id
        const livro = getLivroPorId(id)
        res.send(livro)
    }catch (error){
        res.status(500)
        res.send(error.message)
    }
}

function cadastraLivro(req, res){
    try{
        const livroNovo = req.body
        insereLivro(livroNovo)
        res.status(201)
        res.send('Livro criado com sucesso')
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function atualizaLivro(req, res){
    try{
        const id = req.params.id
        const body = req.body
        modificaLivro(body, id)
        res.status(204)
        res.send('Livro atualizado com sucesso')
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res) {
    try{
        const id = req.params.id
        const livro = excluiLivro(id)
        res.status(202)
        res.send(`Livro com id: ${id} excluido com sucesso`)
    }catch (error){
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    cadastraLivro,
    atualizaLivro,
    deleteLivro
}