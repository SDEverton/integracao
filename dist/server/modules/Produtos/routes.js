"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controller_1 = require("./controller");
var ProdutoRoutes = /** @class */ (function () {
    function ProdutoRoutes() {
    }
    ProdutoRoutes.prototype.index = function (req, res) {
        return controller_1.default.getAll(req, res);
    };
    ProdutoRoutes.prototype.create = function (req, res) {
        return controller_1.default.createProduto(req, res);
    };
    ProdutoRoutes.prototype.findOne = function (req, res) {
        return controller_1.default.getById(req, res);
    };
    ProdutoRoutes.prototype.update = function (req, res) {
        return controller_1.default.updateProduto(req, res);
    };
    ProdutoRoutes.prototype.destroy = function (req, res) {
        return controller_1.default.deleteProduto(req, res);
    };
    return ProdutoRoutes;
}());
exports.default = new ProdutoRoutes();
