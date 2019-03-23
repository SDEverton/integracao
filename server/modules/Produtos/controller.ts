import { Request, Response } from 'express';
import * as HTTPStatus from 'http-status';
import * as _ from 'lodash';
import Handlers from '../../api/responses/handlers'
import Produtos from './service';


class ProdutoController {

    constructor() { }

    getAll(req: Request, res: Response) {
        Produtos
            .getAll()
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.onError, res, `Erro ao Buscar todos os Produtos`))
    }

    createProduto(req: Request, res: Response) {
        Produtos
            .create(req.body)
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.dbErrorHandler, res))
            .catch(_.partial(Handlers.onError, res, `Erro ao inserir novo Produto`))
    }

    getById(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        Produtos.getById(userId)
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.onError, res, `Produto não encontrado`))
    }

    updateProduto(req: Request, res: Response) {
        const produtoId = parseInt(req.params.id);
        const props = req.body;
        Produtos.update(produtoId, props)
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.onError, res, `Falha ao Atualizar o Produto`))
    }

    deleteProduto(req: Request, res: Response) {
        const produtoId = parseInt(req.params.id);
        Produtos.delete(produtoId)
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.onError, res, `Erro ao excluir Poduto`))
    }
}

export default new ProdutoController();