export interface IProduto {
    readonly id: number,
    name: string,
    descricao: string,
    valor: number
}

export interface IProdutoDetail extends IProduto {
    name: string,
    descricao: string,
    valor: number,
    createdAt: any
}

export function createProduto({ id, name, descricao, valor }: any): IProduto {
    return {
        id, name, descricao, valor
    }
}

export function createProdutos(data: any[]): IProduto[] {
    return data.map(createProduto)
}

export function createProdutoById({ id, name, descricao, valor, createdAt }: any): IProdutoDetail {
    return {
        id, name, descricao, valor, createdAt
    }
}

export function createProdutoByName({ id, name, descricao, valor, createdAt }: any): IProdutoDetail {
    return {
        id, name, descricao, valor, createdAt
    }
}
