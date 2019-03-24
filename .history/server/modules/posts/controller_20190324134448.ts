import { Request, Response } from 'express';
import handlers from '../../api/responses/handlers';
import * as _ from 'lodash';
import Post from './service';

class PostController {

    getAll(req: Request, res: Response) {
        Post
            .getAll()
            .then(_.partial(handlers.onSuccess, res))
            .catch(_.partial(handlers.onError, res, 'Erro ao Buscar todos autores'))
    }

    createPost(req: Request, res: Response) {
        Post
            .create(req.body)
            .then(_.partial(handlers.onSuccess, res))
            .catch(_.partial(handlers.dbErrorHandler, res))
            .catch(_.partial(handlers.onError, res, 'Erro ao inserir um novo autor'))
    }

    getById(req: Request, res: Response) {
        const postId = parseInt(req.params.id);
        Post
            .getById(postId)
            .then(_.partial(handlers.onSuccess, res))
            .catch(_.partial(handlers.onError, res, 'Erro ao buscar autor'))
    }

    updatePost(req: Request, res: Response) {
        const postId = parseInt(req.params.id);
        const props = req.body;
        Post
            .update(postId, props)
            .then(_.partial(handlers.onSuccess, res))
            .catch(_.partial(handlers.onError, res, 'Erro ao atualizar o autor'))
    }

    deletePost(req: Request, res: Response) {
        const postId = parseInt(req.params.id);
        Post
            .delete(postId)
            .then(_.partial(handlers.onSuccess, res))
            .catch(_.partial(handlers.onError, res, 'Erro ao excluir o autor'))
    }

}

export default new PostController();