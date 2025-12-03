"use client"

import { ShoppingCart } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { CartList } from "./CartList"
import { Button } from "../ui/button"
import { usePizza } from "@/contexts/CartContext"

export const Cart = () => {
    const pizzaContext = usePizza()
    return (
            <Sheet>
                <SheetTrigger asChild>
                        <Button className="w-20 h-10 relative cursor-pointer">
                            <ShoppingCart className="size-5 text-card"/>

                            {pizzaContext?.itemsCart && pizzaContext?.itemsCart.length > 0 &&
                                <div className="absolute -top-1 -right-1 size-3 rounded-full bg-red-600"></div>
                            }
                        </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                    <SheetHeader className="pb-2">
                        <SheetTitle className="text-3xl">Carrinho</SheetTitle>
                        <SheetDescription>
                            Aqui estão os itens que foram adicionados.
                        </SheetDescription>
                    </SheetHeader>
                    <CartList/>
                </SheetContent>
            
            </Sheet>
    )
}