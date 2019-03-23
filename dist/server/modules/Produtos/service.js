"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var interface_1 = require("./interface");
var model = require('../../models');
var Produto = /** @class */ (function () {
    function Produto() {
    }
    Produto.prototype.create = function (produto) {
        return model.Produto.create(produto);
    };
    Produto.prototype.getAll = function () {
        return model.Produto.findAll({
            order: ['name']
        })
            .then(interface_1.createProdutos);
    };
    Produto.prototype.getById = function (id) {
        return model.Produto.findOne({
            where: { id: id }
        })
            .then(interface_1.createProdutoById);
    };
    Produto.prototype.getByName = function (name) {
        return model.Poduto.findOne({
            where: { name: name }
        })
            .then(interface_1.createProdutoByName);
    };
    Produto.prototype.update = function (id, produto) {
        return model.Produto.update(produto, {
            where: { id: id },
            fields: ['name', 'descricao', 'valor']
        });
    };
    Produto.prototype.delete = function (id) {
        return model.User.destroy({
            where: { id: id }
        });
    };
    return Produto;
}());
exports.default = new Produto();
