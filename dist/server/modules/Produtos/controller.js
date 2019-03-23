"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var handlers_1 = require("../../api/responses/handlers");
var service_1 = require("./service");
var ProdutoController = /** @class */ (function () {
    function ProdutoController() {
    }
    ProdutoController.prototype.getAll = function (req, res) {
        service_1.default
            .getAll()
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, "Erro ao Buscar todos os Produtos"));
    };
    ProdutoController.prototype.createProduto = function (req, res) {
        service_1.default
            .create(req.body)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.dbErrorHandler, res))
            .catch(_.partial(handlers_1.default.onError, res, "Erro ao inserir novo Produto"));
    };
    ProdutoController.prototype.getById = function (req, res) {
        var userId = parseInt(req.params.id);
        service_1.default.getById(userId)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, "Produto n\u00E3o encontrado"));
    };
    ProdutoController.prototype.updateProduto = function (req, res) {
        var produtoId = parseInt(req.params.id);
        var props = req.body;
        service_1.default.update(produtoId, props)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, "Falha ao Atualizar o Produto"));
    };
    ProdutoController.prototype.deleteProduto = function (req, res) {
        var produtoId = parseInt(req.params.id);
        service_1.default.delete(produtoId)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, "Erro ao excluir Poduto"));
    };
    return ProdutoController;
}());
exports.default = new ProdutoController();
