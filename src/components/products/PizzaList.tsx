"use client"

import { TabContentList } from "./TabContentList"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs"
import { Frown } from "lucide-react"
import { PizzasSavoryList, PizzasSweetList } from "@/data/pizza_listData"

export const PizzaList =  () => {

    return (
        <Tabs defaultValue="savory" className="max-w-7xl mx-auto">
            {}
            <TabsList className="w-full">
                <TabsTrigger value="savory" className="cursor-pointer">Pizzas Salgadas</TabsTrigger>
                <TabsTrigger value="sweet" className="cursor-pointer">Pizzas Doces</TabsTrigger>
                <TabsTrigger value="pastries" className="cursor-pointer">Pastéis</TabsTrigger>
                <TabsTrigger value="calzone" className="cursor-pointer">Calzone</TabsTrigger>
            </TabsList>
            <TabContentList value="savory" listItem={PizzasSavoryList}/>

            <TabContentList value="sweet" listItem={PizzasSweetList}/>

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