import { IProduto, IProdutoDetail, createProduto, createProdutos, createProdutoById, createProdutoByName } from './interface';
import * as Bluebird from 'bluebird';
const model = require('../../models');

class Produto implements IProduto {
    public id: number;
    public name: string;
    public valor: number;
    public descricao: string;

    constructor() { }

    create(produto: any) {
        return model.Produto.create(produto);
    }

    getAll(): Bluebird<IProduto[]> {
        return model.Produto.findAll({
            order: ['name']
        })
            .then(createProdutos);
    }

    getById(id: number): Bluebird<IProdutoDetail> {
        return model.Produto.findOne({
            where: { id }
        })
            .then(createProdutoById);
    }

    getByName(name: string): Bluebird<IProdutoDetail> {
        return model.Poduto.findOne({
            where: { name }
        })
            .then(createProdutoByName);
    }

    update(id: number, produto: any) {
        return model.Produto.update(produto, {
            where: { id },
            fields: ['name', 'descricao', 'valor']
        });
    }

    delete(id: number) {
        return model.User.destroy({
            where: { id }
        });
    }
}

export default new Produto();
