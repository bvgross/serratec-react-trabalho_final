import { createContext, useState, useContext, useEffect } from "react";


const carrinhoContext = createContext()

export const CarrinhoProvider = (props) => {
    const [carrinho, setCarrinho] = useState([])

    const [total, setTotal] = useState(0)

    useEffect(() => {
    
    const novoTotal = carrinho.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(novoTotal);
}, [carrinho]);

    function adicionarItens(produto) {

        const produtoExistente = carrinho.find((item) => item.id === produto.id)

        if (produtoExistente) {
            const novoCarrinho = carrinho.map((item) => {
                if (item.id === produto.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
                
            });
            setCarrinho(novoCarrinho)
        }

        else {
            setCarrinho([...carrinho, { ...produto, quantity: 1 }])

        }

    console.log(carrinho)

        
        
    //     carrinho.forEach(item=>{
    //         const preco = item.price
    //         const quantitade = item.quantity
    //         const totalItem = preco * quantitade
    //         setTotal(total + totalItem) 
    //     })   

    //    console.log(total)

    }

    return (
        <carrinhoContext.Provider
            value={{
                adicionarItens, carrinho, total
            }}
        >
            {props.children}
        </carrinhoContext.Provider>
    )

}

export function useCarrinho() {
    return useContext(carrinhoContext)

}



