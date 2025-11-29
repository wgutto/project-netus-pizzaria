"use client"

import { ShoppingCart } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { CartList } from "./CartList"
import { Button } from "../ui/button"

export const Cart = () => {
    return (
            <Sheet>
                <SheetTrigger asChild>
                        <Button className="w-20 h-10 cursor-pointer">
                            <ShoppingCart className="size-5 text-card"/>
                        </Button>
                </SheetTrigger>
                <SheetContent>
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