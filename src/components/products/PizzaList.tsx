"use client"

import { TabContentList } from "./TabContentList"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs"
import { Frown } from "lucide-react"
import { AllPizzasList } from "@/data/pizzaListData"
import { PizzaListType } from "@/types/pizzaListType"

type Tab = {
    title: string
    value: string
    products: PizzaListType[]
}

export const PizzaList =  () => {

    const tabs: Tab[] = [
        {
            title: "Pizza Salgadas",
            value: "savory",
            products: AllPizzasList.filter((pizza) => pizza.category === "savory")
        },
        {
            title: "Pizza Doces",
            value: "sweet",
            products: AllPizzasList.filter((pizza) => pizza.category === "sweet")
        }
    ]

    return (
        <Tabs defaultValue="savory" className="max-w-7xl mx-auto">
            <TabsList className="w-full">
                {tabs.map((pizza) => 
                    <TabsTrigger key={pizza.value} value={pizza.value} className="cursor-pointer">{pizza.title}</TabsTrigger>
                )}
                <TabsTrigger value="pastries">Pastéis</TabsTrigger>
                <TabsTrigger value="calzone">Calzone</TabsTrigger>
            </TabsList>

            {tabs.map((pizza) =>
                    <TabContentList key={pizza.value} value={pizza.value} products={pizza.products}/>
            )}

            <TabsContent value="pastries">
                <div className="flex flex-col gap-5 items-center my-10">
                    <Frown size={80} />
                    <p>Ainda não existe itens nessa área.</p>
                </div>
            </TabsContent>

            <TabsContent value="calzone">
                <div className="flex flex-col gap-5 items-center my-10">
                    <Frown size={80} />
                    <p>Ainda não existe itens nessa área.</p>
                </div>
            </TabsContent>
        </Tabs >
    )
}