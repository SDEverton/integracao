import { Request, Response } from 'express';
import ProdutoController from './controller';

class ProdutoRoutes {

    constructor() { }

    index(req: Request, res: Response) {
        return ProdutoController.getAll(req, res);
    }

    create(req: Request, res: Response) {
        return ProdutoController.createProduto(req, res);
    }

    findOne(req: Request, res: Response) {
        return ProdutoController.getById(req, res);
    }

    update(req: Request, res: Response) {
        return ProdutoController.updateProduto(req, res);
    }

    destroy(req: Request, res: Response) {
        return ProdutoController.deleteProduto(req, res);
    }
}

export default new ProdutoRoutes();