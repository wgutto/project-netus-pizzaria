"use client"
import { cartReducer } from "@/reducers/cartReducer";
import { PizzaListType } from "@/types/pizzaListType";
import { createContext, ReactNode, useContext, useMemo, useReducer } from "react";

type CartContextType = {
    itemsCart: PizzaListType[]
    subtotalValue: number
    deliveryValue: number
    addPizza: (item: PizzaListType) => void
    increaseQuantity: (id: string) => void
    decreaseQuantity: (id: string) => void
}
const CartContext = createContext<CartContextType | null>(null)

type Props = {
    children: ReactNode
}
export const CartProvider = ({ children }: Props) => {
    const [itemsCart, dispatch] = useReducer(cartReducer, [])

    const addPizza = (item: PizzaListType) => {
        dispatch({
            type: "add",
            payload: item
        })

        console.log(item)
    }

    const increaseQuantity = (id: string) => {
        dispatch({
            type: "increase",
            payload: {
                id
            }
        })
    }

    const decreaseQuantity = (id: string) => {
        dispatch({
            type: "decrease",
            payload: {
                id
            }
        })
    }

    const subtotalValue = useMemo(() => {
    return itemsCart.reduce((vAccumulated, item) => {
        return vAccumulated + item.price * item.amount;
    }, 0);
}, [itemsCart]);

    return (
        // Aqui eu criei as funções e passei elas no value do PostContext.Provider, pois é mais seguro do que passar o dispatch direto
        <CartContext.Provider value={{ itemsCart, subtotalValue, deliveryValue:10, addPizza, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export const usePizza = () => useContext(CartContext)