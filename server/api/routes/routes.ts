import { Application, Request, Response } from 'express';
import UserRoutes from '../../modules/User/routes';
import ProdutoRoutes from '../../modules/Produtos/routes';
import TokenRoutes from '../../modules/auth/auth';

class Routes {

    constructor(){ }

    initRoutes(app: Application, auth: any): void{
        //rota usuarios
        app.route('/api/users/all').all(auth.config().authenticate()).get(UserRoutes.index);
        app.route('/api/users/create').all(auth.config().authenticate()).post(UserRoutes.create);
        app.route('/api/users/:id').all(auth.config().authenticate()).get(UserRoutes.findOne);
        app.route('/api/users/:id/update').all(auth.config().authenticate()).put(UserRoutes.update);
        app.route('/api/users/:id/destroy').all(auth.config().authenticate()).delete(UserRoutes.destroy);
        //rota produtos
        app.route('/api/prod/all').all(auth.config().authenticate()).get(ProdutoRoutes.index);
        app.route('/api/prod/create').all(auth.config().authenticate()).post(ProdutoRoutes.create);
        app.route('/api/prod/:id').all(auth.config().authenticate()).get(ProdutoRoutes.findOne);
        app.route('/api/prod/:id/update').all(auth.config().authenticate()).put(ProdutoRoutes.update);
        app.route('/api/prod/:id/destroy').all(auth.config().authenticate()).delete(ProdutoRoutes.destroy);

        app.route('/token').post(TokenRoutes.auth)
    }
}

export default new Routes();