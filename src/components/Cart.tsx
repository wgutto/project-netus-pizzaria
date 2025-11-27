"use client"

import { Frown, Minus, Plus, ShoppingCart } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { usePizza } from "@/contexts/PizzaContext"
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"

export const Cart = () => {
    const pizzaContext = usePizza()

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center cursor-pointer bg-foreground w-20 h-10 rounded-md hover:opacity-90">
                <ShoppingCart className="size-5 text-card" />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="text-3xl">Carrinho</SheetTitle>
                    <SheetDescription>
                        Aqui estão os itens que foram adicionados.
                    </SheetDescription>
                </SheetHeader>

                {pizzaContext?.itemsCart && pizzaContext.itemsCart.length > 0 &&
                    <div className="flex flex-col gap-3 px-2">
                        {pizzaContext.itemsCart.map((item) =>
                            <Card key={item.id}>
                                <CardContent className="flex justify-between items-center gap-2 px-4">
                                    <div className="flex items-center gap-2">
                                        <Avatar className="w-14 h-14">
                                            <AvatarImage src={item.img} />
                                        </Avatar>

                                        <div className="flex flex-col gap-1">
                                            <CardTitle>{item.flavor}</CardTitle>
                                            <CardDescription>Valor R$ {item.price?.toFixed(2)}</CardDescription>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Button onClick={() => pizzaContext.decreaseQuantity(item.id)} className="size-6"><Minus/></Button>

                                        <div className="text-lg">{item.amount}</div>

                                        <Button onClick={() => pizzaContext.increaseQuantity(item.id)} className="size-6"><Plus/></Button>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                        
                        <div className="w-full flex justify-between border-t-2 my-2 p-2">
                            <SheetDescription className="text-xl">Total</SheetDescription>
                            <SheetDescription className="text-xl">R$ {pizzaContext.totalValue.toFixed(2)}</SheetDescription>
                        </div>
                    </div>
                }

                {pizzaContext?.itemsCart && pizzaContext.itemsCart.length <= 0 && 
                    <SheetDescription className="flex flex-col my-auto items-center gap-2">
                        <Frown size={80}/>

                        <p className="text-sm">Ops, o carrinho está vazio.</p>
                    </SheetDescription>
                }

            </SheetContent>
        </Sheet>
    )
}