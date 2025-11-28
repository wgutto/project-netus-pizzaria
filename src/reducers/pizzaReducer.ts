import { PizzaListType } from "@/types/pizza_listType"

// Define os tipos de ações que o reducer pode receber
type addCart = {
    type: "add" // Adiciona um item ao carrinho
    payload: PizzaListType
}
type removeCart = {
    type: "remove" // Remove um item do carrinho
    payload: { id: string }
}
type increaseQuantityCart = {
    type: "increase" // Incrementa a quantidade de um item
    payload: { id: string }
}
type decreaseQuantityCart = {
    type: "decrease" // Decrementa a quantidade de um item (mínimo 1)
    payload: { id: string }
}

// União de todos os tipos de ação possíveis
type acoes = addCart | removeCart | increaseQuantityCart | decreaseQuantityCart

// Reducer: função pura que recebe o estado atual e uma ação, e retorna o novo estado
export const pizzaReducer = (itemsCart: PizzaListType[], acao: acoes) => {
    switch (acao.type) {

        case "add":
            // Verifica se o item já existe no carrinho
            const existingItem = itemsCart.find((item) => item.id === acao.payload.id && item.size === acao.payload.size)

            if (existingItem) {
                // Se já existe, apenas incrementa a quantidade
                return itemsCart.map((item) => {
                    return item.id === existingItem.id
                        ? { ...item, amount: item.amount + 1 } // aumenta quantidade
                        : item
                })
            } else {
                // Se não existe, adiciona o item ao carrinho
                return [
                    ...itemsCart,
                    {
                        id: crypto.randomUUID(),
                        flavor: acao.payload.flavor,
                        img: acao.payload.img,
                        amount: acao.payload.amount,
                        ingredients: acao.payload.ingredients,
                        sizes: acao.payload.sizes,
                        size: acao.payload.size,
                        price: acao.payload.price
                    }
                ]
            }

        case "remove":
            // Remove o item filtrando pelo id
            return itemsCart.filter((item) => item.id !== acao.payload.id)

        case "increase":
            // Incrementa a quantidade de um item específico
            return itemsCart.map((item) =>
                item.id === acao.payload.id ? { ...item, amount: item.amount + 1 } : item
            )

        case "decrease":
            // Decrementa a quantidade, garantindo que nunca seja menor que 1
            return itemsCart.map((item) =>
                item.id === acao.payload.id
                    ? { ...item, amount: item.amount - 1 }
                    : item
            ).filter((item) => item.amount > 0)

        default:
            // Caso a ação não seja reconhecida, retorna o estado atual sem alterações
            return itemsCart
    }
}
