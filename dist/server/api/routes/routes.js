"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("../../modules/User/routes");
var routes_2 = require("../../modules/Produtos/routes");
var auth_1 = require("../../modules/auth/auth");
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.prototype.initRoutes = function (app, auth) {
        //rota usuarios
        app.route('/api/users/all').all(auth.config().authenticate()).get(routes_1.default.index);
        app.route('/api/users/create').all(auth.config().authenticate()).post(routes_1.default.create);
        app.route('/api/users/:id').all(auth.config().authenticate()).get(routes_1.default.findOne);
        app.route('/api/users/:id/update').all(auth.config().authenticate()).put(routes_1.default.update);
        app.route('/api/users/:id/destroy').all(auth.config().authenticate()).delete(routes_1.default.destroy);
        //rota produtos
        app.route('/api/prod/all').all(auth.config().authenticate()).get(routes_2.default.index);
        app.route('/api/prod/create').all(auth.config().authenticate()).post(routes_2.default.create);
        app.route('/api/prod/:id').all(auth.config().authenticate()).get(routes_2.default.findOne);
        app.route('/api/prod/:id/update').all(auth.config().authenticate()).put(routes_2.default.update);
        app.route('/api/prod/:id/destroy').all(auth.config().authenticate()).delete(routes_2.default.destroy);
        app.route('/token').post(auth_1.default.auth);
    };
    return Routes;
}());
exports.default = new Routes();
