const Produto = require("../models/Produto");
const { update } = require("./UserController");

const ProdutoController = {
    create: async (req, res) => {
        try {

            const { nomeProduto, quantidade, preco } = req.body;
            const produtoCriado = await Produto.create({ nomeProduto, quantidade, preco });

            return res.status(200).json({
                msg: 'Produto criado com sucesso',
                produto: produtoCriado
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o suporte' })
        }
    },

    update: async (req, res) => {
        try {

            const { id } = req.params;
            const { nomeProduto, quantidade, preco } = req.body
            console.log('Atualizando o objeto');
            console.log({ id });
            console.log({ nomeProduto, quantidade, preco });


            const produtoUpdate = await Produto.findByPk(id);

            if (produtoUpdate == null) {
                return res.status(404).json({
                    msg: "Produto não encontrado."
                })
            }

            const updated = await produtoUpdate.update({
                nomeProduto, quantidade, preco
            })

            if (updated) {
                return res.status(200).json({
                    msg: 'Produto atualizado com sucesso'
                })
            }

            return res.status(500).json({
                msg: 'Erro ao atualizar o produto'
            })

        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o suporte' });
        }
    },

    getAll: async (req, res) => {
        try {

            const allProdutos = await Produto.findAll();

            return res.status(200).json({
                msg: 'Produtos encontrados:',
                produtos: allProdutos
            })

        } catch (error) {
            console.error(error);
            return res.status(500).json({ msh: 'Acione o suporte' });
        }
    },

    getOne: async (req, res) => {
        try {
            const { id } = req.params;
            const produtosEncontrado = await Produto.findByPk(id);

            if (produtosEncontrado == null) {
                return res.status(404).json({
                    msg: 'Produto não encontrado'
                })
            }

            return res.status(200).json({
                msg: 'Produto encontrado com sucesso:',
                produto: produtosEncontrado
            })

        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o Suporte' });
        }
    },

    delete: async (req, res) => {
        try {
            const { id } = req.params;

            const produtoFinded = await Produto.findByPk(id);

            if (produtoFinded == null) {
                return res.status(404).json({
                    msg: 'Produto não encontrado'
                })
            }

            await produtoFinded.destroy();

            return res.status(200).json({
                msg: 'Produto deletado com sucesso!'
            })

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg: 'Acione o suporte'
            })
        }
    }
}

module.exports = ProdutoController