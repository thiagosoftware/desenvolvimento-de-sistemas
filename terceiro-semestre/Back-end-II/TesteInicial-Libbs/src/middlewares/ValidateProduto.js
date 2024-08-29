/* Nome, quantidade e preco */

/*  Req = Request
    Res = Response
    next = NextFunction
*/

const ValidateProduto = (req, res, next) => {
    const { nomeProduto, quantidade, preco }= req.body;

    if (!nomeProduto || !quantidade || !preco) {
        return res.status(400).json ({
            msg: "Dados inválidos, revise as credênciais."
        });
    }

    return next();
}

const ValidateProdutoId = (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json ({
            msg: "Paramêtro inválido"
        
        });
    }

    return next();
}

module.exports  = { ValidateProduto, ValidateProdutoId };