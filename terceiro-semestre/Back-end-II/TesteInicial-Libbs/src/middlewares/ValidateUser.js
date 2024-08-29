/* Nome, email e senha  -> String */

/*  Req = Request
    Res = Response
    next = NextFunction
*/

const ValidateUser = (req, res, next) => {
    const { nome, email, senha } = req.body;

    // preenchido / não preenchido
    if (!nome || !email || !senha) {
        return res.status(400).json({
            msg: "Dados inválidos, revise as credênciais."
        });
    }

    // Pode avançar
    return next();
}

const ValidateUserId = (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({
            msg: "Parametro inválido"
        });
    }

    return next();
}

module.exports = { ValidateUser, ValidateUserId };