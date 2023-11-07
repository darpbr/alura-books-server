function getLivros(req, res) {
    try{
        // Simulação de erro
        // throw new Error("test")
        res.send("Olá mundo BRASIL")
    }catch (error){
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros
}