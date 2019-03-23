"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createProduto(_a) {
    var id = _a.id, name = _a.name, descricao = _a.descricao, valor = _a.valor;
    return {
        id: id, name: name, descricao: descricao, valor: valor
    };
}
exports.createProduto = createProduto;
function createProdutos(data) {
    return data.map(createProduto);
}
exports.createProdutos = createProdutos;
function createProdutoById(_a) {
    var id = _a.id, name = _a.name, descricao = _a.descricao, valor = _a.valor, createdAt = _a.createdAt;
    return {
        id: id, name: name, descricao: descricao, valor: valor, createdAt: createdAt
    };
}
exports.createProdutoById = createProdutoById;
function createProdutoByName(_a) {
    var id = _a.id, name = _a.name, descricao = _a.descricao, valor = _a.valor, createdAt = _a.createdAt;
    return {
        id: id, name: name, descricao: descricao, valor: valor, createdAt: createdAt
    };
}
exports.createProdutoByName = createProdutoByName;
