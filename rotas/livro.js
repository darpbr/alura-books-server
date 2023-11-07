const { Router } = require("express")
const { getLivros, getLivro, cadastraLivro, atualizaLivro, deleteLivro } = require("../controladores/livro-controller")

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', cadastraLivro)

router.patch('/:id', atualizaLivro)

router.delete('/:id', deleteLivro)

module.exports = router