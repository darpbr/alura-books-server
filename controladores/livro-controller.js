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

        if(validaId(id)){
            const livro = getLivroPorId(id)
            if(livro){
                res.status(200)
                res.send(livro)
            }else{
                res.status(404)
                res.send('Livro não encontrado!')
            }
        }else{
            res.status(422)
            res.send('ID inválido.')
        }

    }catch (error){
        res.status(500)
        res.send(error.message)
    }
}

function cadastraLivro(req, res){
    try{
        const livroNovo = req.body
        if(validaBody(livroNovo)){
            insereLivro(livroNovo)
            res.status(201)
            res.send('Livro criado com sucesso')
        }else{
            res.status(422)
            res.send('Livro contém dados inválidos. Favor verificar.')
        }
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function atualizaLivro(req, res){
    try{
        const id = req.params.id
        if(validaId(id)){
            const body = req.body
            modificaLivro(body, id)
            res.status(200)
            res.send('Livro atualizado com sucesso')
        }else{
            res.status(422)
            res.send('ID inválido.')
        }
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res) {
    try{
        const id = req.params.id
        if(validaId(id)){
            const livro = excluiLivro(id)
            res.status(202)
            res.send(`Livro com id: ${id} excluido com sucesso`)
        }else{
            res.status(422)
            res.send('ID inválido.')
        }
    }catch (error){
        res.status(500)
        res.send(error.message)
    }
}

function validaId(id){
    return id && Number(id)
}

function validaBody(body){
    return body.nome
}

module.exports = {
    getLivros,
    getLivro,
    cadastraLivro,
    atualizaLivro,
    deleteLivro
}