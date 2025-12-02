import { Frown, Minus, Plus } from "lucide-react"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog"
import { Avatar, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card"
import { SheetDescription, SheetTitle } from "../ui/sheet"
import { usePizza } from "@/contexts/CartContext"
import { useState } from "react"
import { Checkout } from "../checkout/Checkout"

export const CartList = () => {
    const pizzaContext = usePizza()
    const [checkoutOpen, setCheckoutOpen] = useState(false)
    return (
        <>
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
                                        <CardTitle>{item.flavor} ({item.size})</CardTitle>
                                        <CardDescription>Valor R$ {item.price?.toFixed(2)}</CardDescription>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button onClick={() => pizzaContext.decreaseQuantity(item.id)} className="size-6 cursor-pointer"><Minus /></Button>
                                    <div className="text-lg">{item.amount}</div>
                                    <Button onClick={() => pizzaContext.increaseQuantity(item.id)} className="size-6 cursor-pointer"><Plus /></Button>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                    <div className="w-full border-y-2 my-2 p-2">
                        <div className="flex justify-between">
                            <SheetTitle className="text-md font-light">Subtotal</SheetTitle>
                            <SheetTitle className="text-md font-light">R$ {pizzaContext.subtotalValue.toFixed(2)}</SheetTitle>
                        </div>
                        <div className="flex justify-between">
                            <SheetTitle className="text-md font-light">Entrega</SheetTitle>
                            <SheetTitle className="text-md font-light">R$ {pizzaContext.deliveryValue.toFixed(2)}</SheetTitle>
                        </div>
                        <div className="flex justify-between">
                            <SheetTitle className="text-md font-light">Total</SheetTitle>
                            <SheetTitle className="text-md font-light">R$ {(pizzaContext.subtotalValue + pizzaContext.deliveryValue).toFixed(2)}</SheetTitle>
                        </div>

                    </div>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button className="w-full cursor-pointer">
                                Finalizar pedido
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Deseja realmente finalizar o pedido?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Próximo passo será preencher seus dados para a entrega.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel className="cursor-pointer">Cancelar</AlertDialogCancel>
                                <AlertDialogAction onClick={() => setCheckoutOpen(true)} className="cursor-pointer">Confirmar</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            }
            {pizzaContext?.itemsCart && pizzaContext.itemsCart.length <= 0 &&
                <SheetDescription className="flex flex-col my-auto items-center gap-2">
                    <Frown size={80} />
                    Ops, o carrinho está vazio.
                </SheetDescription>
            }


            {checkoutOpen &&
                <Checkout open={checkoutOpen} onOpenChange={setCheckoutOpen}/>
            }
        </>
    )
}