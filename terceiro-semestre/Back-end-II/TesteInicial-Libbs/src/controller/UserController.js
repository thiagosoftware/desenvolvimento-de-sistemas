const User = require("../models/User");

const UserController = {
    create: async (req, res) => {
        try {
            const { nome, senha, email } = req.body;

            const UserCriado = await User.create({ nome, senha, email});
            
            return res.status(200).json({
                msg: 'Usuário criado com sucesso!',
                user: UserCriado
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o Suporte' });
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { nome, senha, email } = req.body
            console.log("Atualizando o objeto");
            console.log({ id });
            console.log({ nome, senha, email })

            return res.status(200).json({
                msg: 'Usuário atualizado com sucesso!'
            });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o Suporte' });
        }
    },
    getAll: async (req, res) => {
        try {

            const allUser = await User.findAll({});

            return res.status(200).json({
                msg: 'Usuários encontrados:',
                usuarios: allUser
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o Suporte' });
        }
    },
    getOne: async (req, res) => {
        try {

            const { id } = req.params;
            const usuarioEncontrado = await User.findByPk(id);

            if(usuarioEncontrado == null) {
                return res.status(404).json({
                    msg: 'Usuário não encontrado'
                })
            }

            return res.status(200).json({
                msg: 'Usuário encontrado com sucesso:',
                usuario: usuarioEncontrado
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o Suporte' });
        }
    },
    delete: async (req, res) => {
        try {
            return res.status(200).json({
                msg: 'Usuário deletado com sucesso!'
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o Suporte' });
        }
    }


}

module.exports = UserController;