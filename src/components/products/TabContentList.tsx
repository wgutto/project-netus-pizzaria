import { PizzaListType } from "@/types/pizzaListType"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { TabsContent } from "../ui/tabs"
import { Avatar, AvatarImage } from "../ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Button } from "../ui/button"
import { toast } from "sonner"
import { ShoppingCart } from "lucide-react"
import { useState } from "react"
import { usePizza } from "@/contexts/CartContext"

type Props = {
    value: string
    products: PizzaListType[]
}
export const TabContentList = ({ value, products }: Props) => {
    const [selectedSizes, setSelectedSizes] = useState<{ [id: string]: string }>({});
    const pizzaContext = usePizza()

    return (
        <TabsContent value={value}>
            {products.length > 0 &&
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 my-6">
                    {products.map((item) =>
                        <Card key={item.id}>
                            <CardHeader className="flex justify-center">
                                <Avatar className="w-28 h-28">
                                    <AvatarImage src={item.img} />
                                </Avatar>
                            </CardHeader>

                            <CardContent className="flex flex-col gap-4">
                                <CardTitle className="text-center">

                                    <HoverCard>
                                        <HoverCardTrigger>{item.flavor}</HoverCardTrigger>
                                        <HoverCardContent>
                                            {item.ingredients.map((item, index) =>
                                                <div key={index}>{item}</div>
                                            )}

                                        </HoverCardContent>
                                    </HoverCard>

                                </CardTitle>

                                <Select
                                    value={selectedSizes[item.id] || "P"}
                                    onValueChange={(value) =>
                                        setSelectedSizes({ ...selectedSizes, [item.id]: value })
                                    }
                                >
                                    <SelectTrigger className="mx-auto">
                                        <SelectValue className="overflow-x-scroll" placeholder="Selecione o tamanho" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="P">Tamanho P</SelectItem>
                                            <SelectItem value="M">Tamanho M</SelectItem>
                                            <SelectItem value="G">Tamanho G</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </CardContent>

                            <CardFooter className="flex flex-col items-center justify-between sm:flex-row gap-5">

                                <CardTitle>
                                    R$ {
                                        item.sizes.find(size => size.label === (selectedSizes[item.id] || "P"))?.price.toFixed(2)
                                    }
                                </CardTitle>

                                <Button onClick={() => {
                                    const size = selectedSizes[item.id] || "P";
                                    if (!size) {
                                        toast.error("Selecione um tamanho!");
                                        return;
                                    }

                                    const selectedSize = item.sizes.find(s => s.label === size);

                                    pizzaContext?.addPizza({
                                        ...item,
                                        size,
                                        price: selectedSize!.price
                                    });

                                    toast.success("Pizza adicionada com sucesso.", {
                                        description: `Pizza sabor ${item.flavor} (${size}).`
                                    });
                                }}
                                    className="w-20 h-10 cursor-pointer">
                                    <ShoppingCart className="size-5" />
                                </Button>
                            </CardFooter>
                        </Card>
                    )}
                </div>
            }
        </TabsContent>
    )
}