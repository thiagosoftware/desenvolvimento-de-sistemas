const User = require("../models/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserController = {
    login: async (req, res) => {
        try {
            const { email, senha } = req.body;

            const user = await User.findOne({ where: { email } });

            if (!user) {
                return res.status(400).json({
                    msg: 'Email ou senha incorretos. Revise suas credenciais!'
                });
            }

            const isValida = await bcrypt.compare(senha, user.senha);
            if (!isValida) {
                return res.status(400).json({
                    msg: 'Email ou senha incorretos. Revise suas credenciais!'
                });
            }

            const token = jwt.sign({ 
                email: user.email, 
                nome: user.nome 
            }, process.env.SECRET, { expiresIn: '1h' });

            return res.status(200).json({
                msg: 'Login realizado com sucesso!',
                token
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg: "Acione o Suporte"
            });
        }
    },
    create: async (req, res) => {
        try {
            const { nome, senha, email } = req.body;

            const hashSenha = await bcrypt.hash(senha, 10);

            const UserCriado = await User.create({ nome, senha: hashSenha, email });

            return res.status(200).json({
                msg: 'Usuário criado com sucesso!',
                user: UserCriado
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o Suporte' });
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { nome, senha, email } = req.body;

            const userUpdate = await User.findByPk(id);

            if (userUpdate == null) {
                return res.status(404).json({
                    msg: "Usuário não encontrado."
                });
            }

            const updated = await userUpdate.update({
                nome, senha, email
            });

            if (updated) {
                return res.status(200).json({
                    msg: 'Usuário atualizado com sucesso!'
                });
            }

            return res.status(500).json({
                msg: "Erro ao atualizar usuário"
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o Suporte' });
        }
    },
    getAll: async (req, res) => {
        try {
            const allUser = await User.findAll();

            return res.status(200).json({
                msg: 'Usuários encontrados:',
                usuarios: allUser
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o Suporte' });
        }
    },
    getOne: async (req, res) => {
        try {
            const { id } = req.params;
            const usuarioEncontrado = await User.findByPk(id);

            if (usuarioEncontrado == null) {
                return res.status(404).json({
                    msg: 'Usuário não encontrado'
                });
            }

            return res.status(200).json({
                msg: 'Usuário encontrado com sucesso:',
                usuario: usuarioEncontrado
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o Suporte' });
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;

            const userFinded = await User.findByPk(id);

            if (userFinded == null) {
                return res.status(404).json({
                    msg: "Usuário não encontrado"
                });
            }

            await userFinded.destroy();

            return res.status(200).json({
                msg: 'Usuário deletado com sucesso!'
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o Suporte' });
        }
    }
};

module.exports = UserController;
