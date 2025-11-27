"use client"

import { PizzaListData } from "@/data/pizza_listData"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Avatar, AvatarImage } from "./ui/avatar"
import { ShoppingCart } from "lucide-react"
import { Button } from "./ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { usePizza } from "@/contexts/PizzaContext"
import { toast } from "sonner"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { useState } from "react"

export const PizzaList = () => {
    const pizzaContext = usePizza()
    const [selectedSizes, setSelectedSizes] = useState<{ [id: string]: string }>({});

    return (
        <Tabs defaultValue="savory-pizzas" className="max-w-7xl mx-auto">
            <TabsList className="w-full">
                <TabsTrigger value="savory-pizzas" className="cursor-pointer">Pizzas Salgadas</TabsTrigger>
                <TabsTrigger value="sweet-pizzas" className="cursor-pointer">Pizzas Doces</TabsTrigger>
                <TabsTrigger value="pastries" className="cursor-pointer">Pastéis</TabsTrigger>
                <TabsTrigger value="calzone" className="cursor-pointer">Calzone</TabsTrigger>
            </TabsList>
            <TabsContent value="savory-pizzas">
                {PizzaListData.length > 0 &&
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-6">
                        {PizzaListData.map((item) =>
                            <Card key={item.id}>
                                <CardHeader className="flex justify-center">
                                    <Avatar className="w-28 h-28">
                                        <AvatarImage src={item.img} />
                                    </Avatar>
                                </CardHeader>

                                <CardContent className="flex flex-col gap-4">
                                    <CardTitle className="text-center">{item.flavor}</CardTitle>

                                    <Select
                                        value={selectedSizes[item.id] || "P"}
                                        onValueChange={(value) =>
                                            setSelectedSizes({ ...selectedSizes, [item.id]: value })
                                        }
                                    >
                                        <SelectTrigger className="mx-auto">
                                            <SelectValue placeholder="Selecione o tamanho" />
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

                                <CardFooter className="flex items-center justify-between">
                                    
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
                                            description: `Pizza de ${item.flavor} (${size}).`
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
        </Tabs >
    )
}