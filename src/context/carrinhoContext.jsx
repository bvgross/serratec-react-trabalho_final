import { createContext, useState, useContext } from "react";


const carrinhoContext = createContext()

const CarrinhoProvider = (props) => {
    const [carrinho, setCarrinho] = useState([])

    const [total, setTotal] = useState(0)

    function adicionarItens(produto) {
        const produtoExistente = carrinho.find((item) => item.id === produto.id)
        if (produtoExistente) {
            const novoCarrinho = carrinho.map((item) => {
                if (item.id === produto.id) {
                    return { ...item, quantidade: item.quantidade + 1 };
                }
                return item;
                setCarrinho(novoCarrinho)

            });
        }
        else {
            setCarrinho([...carrinho, { ...produto, quantidade: 1 }])

        }

        console.log(carrinho)

    }

    return (
        <carrinhoContext.Provider
            value={{
                adicionarItens, carrinho
            }}
        >
            {
                props.children
            }
        </carrinhoContext.Provider>
    )

}
export function adicionarAoCarrinho () {
    return useContext (carrinhoContext, CarrinhoProvider)
    
}






