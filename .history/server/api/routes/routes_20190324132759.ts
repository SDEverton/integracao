import { Application, Request, Response } from 'express';
import UserRoutes from '../../modules/User/routes';
import ProdutoRoutes from '../../modules/Produtos/routes';
import TokenRoutes from '../../modules/auth/auth';
import AuthorRoutes from '../../modules/author/routes';

class Routes {

    constructor(){ }

    initRoutes(app: Application, auth: any): void{
        //rota usuarios
        app.route('/api/users/all').all(auth.config().authenticate()).get(UserRoutes.index);
        app.route('/api/users/create').all(auth.config().authenticate()).post(UserRoutes.create);
        app.route('/api/users/:id').all(auth.config().authenticate()).get(UserRoutes.findOne);
        app.route('/api/users/:id/update').all(auth.config().authenticate()).put(UserRoutes.update);
        app.route('/api/users/:id/destroy').all(auth.config().authenticate()).delete(UserRoutes.destroy);
        //rota author
        app.route('/api/author/all').get(AuthorRoutes.index);
        app.route('/api/author/create').post(AuthorRoutes.create);
        app.route('/api/author/:id').get(AuthorRoutes.findOne);
        app.route('/api/author/:id/update').put(AuthorRoutes.update);
        app.route('/api/author/:id/destroy').delete(AuthorRoutes.destroy);

        app.route('/token').post(TokenRoutes.auth)
    }
}

export default new Routes();