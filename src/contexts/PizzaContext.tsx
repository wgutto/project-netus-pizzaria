"use client"

import { pizzaReducer } from "@/reducers/pizzaReducer";
import { PizzaListType } from "@/types/pizza_listType";
import { createContext, ReactNode, useContext, useMemo, useReducer } from "react";

type PizzaContextType = {
    itemsCart: PizzaListType[]
    totalValue: number
    addPizza: (item: PizzaListType) => void
    removePizza: (id: string) => void
    increaseQuantity: (id: string) => void
    decreaseQuantity: (id: string) => void
}
export const PizzaContext = createContext<PizzaContextType | null>(null)

type Props = {
    children: ReactNode
}
export const PizzaProvider = ({ children }: Props) => {
    const [itemsCart, dispatch] = useReducer(pizzaReducer, [])

    const addPizza = (item: PizzaListType) => {
        dispatch({
            type: "add",
            payload: item
        })

        console.log(item)
    }

    const removePizza = (id: string) => {
        dispatch({
            type: "remove",
            payload: {
                id
            }
        })
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

    const totalValue = useMemo(() => {
    return itemsCart.reduce((vAccumulated, item) => {
        return vAccumulated + item.price * item.amount;
    }, 0);
}, [itemsCart]);

    return (
        // Aqui eu criei as funções e passei elas no value do PostContext.Provider, pois é mais seguro do que passar o dispatch direto
        <PizzaContext.Provider value={{ itemsCart, totalValue, addPizza, removePizza, increaseQuantity, decreaseQuantity }}>
            {children}
        </PizzaContext.Provider>
    )
}

export const usePizza = () => useContext(PizzaContext)