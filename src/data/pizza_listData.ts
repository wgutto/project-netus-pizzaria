import { PizzaListType } from "@/types/pizza_listType";

export const PizzaListData: PizzaListType[] = [
    {
        id: crypto.randomUUID(),
        img: "/pizzas-images/pizza.png",
        flavor: "Calabresa Tradicional",
        amount: 1,
        ingredients: ["Calabresa", "Mussarela", "Cebola", "Orégano", "Molho de tomate"],
        sizes: [
            { label: "P", price: 22.5 },
            { label: "M", price: 32.5 },
            { label: "G", price: 42.5 }
        ],
        price: 22.5
    },
    {
        id: crypto.randomUUID(),
        img: "/pizzas-images/pizza.png",
        flavor: "Calabresa Premium",
        amount: 1,
        ingredients: ["Calabresa premium", "Mussarela", "Cebola roxa", "Orégano", "Molho de tomate"],
        sizes: [
            { label: "P", price: 32.5 },
            { label: "M", price: 42.5 },
            { label: "G", price: 52.5 }
        ],
        price: 32.5
    },
    {
        id: crypto.randomUUID(),
        img: "/pizzas-images/pizza.png",
        flavor: "Calabresa Artesanal",
        amount: 1,
        ingredients: ["Calabresa artesanal", "Mussarela especial", "Cebola caramelizada", "Molho de tomate", "Orégano"],
        sizes: [
            { label: "P", price: 42.5 },
            { label: "M", price: 52.5 },
            { label: "G", price: 62.5 }
        ],
        price: 42.5
    },
    {
        id: crypto.randomUUID(),
        img: "/pizzas-images/pizza.png",
        flavor: "Calabresa com Cheddar",
        amount: 1,
        ingredients: ["Calabresa premium", "Cheddar", "Mussarela", "Cebola", "Molho de tomate"],
        sizes: [
            { label: "P", price: 52.5 },
            { label: "M", price: 62.5 },
            { label: "G", price: 72.5 }
        ],
        price: 52.5
    },
    {
        id: crypto.randomUUID(),
        img: "/pizzas-images/pizza.png",
        flavor: "Calabresa Especial",
        amount: 1,
        ingredients: ["Calabresa", "Mussarela", "Cebola", "Pimentão", "Molho de tomate"],
        sizes: [
            { label: "P", price: 28.5 },
            { label: "M", price: 38.5 },
            { label: "G", price: 48.5 }
        ],
        price: 28.5
    },
    {
        id: crypto.randomUUID(),
        img: "/pizzas-images/pizza.png",
        flavor: "Calabresa com Azeitonas",
        amount: 1,
        ingredients: ["Calabresa", "Mussarela", "Cebola", "Azeitonas", "Molho de tomate"],
        sizes: [
            { label: "P", price: 30.5 },
            { label: "M", price: 40.5 },
            { label: "G", price: 50.5 }
        ],
        price: 30.5
    },
    {
        id: crypto.randomUUID(),
        img: "/pizzas-images/pizza.png",
        flavor: "Calabresa com Orégano",
        amount: 1,
        ingredients: ["Calabresa", "Mussarela", "Molho de tomate", "Orégano"],
        sizes: [
            { label: "P", price: 27.9 },
            { label: "M", price: 37.9 },
            { label: "G", price: 47.9 }
        ],
        price: 27.9
    },
    // ---- ADICIONANDO MAIS 5 PARA TOTALIZAR 12 ----
    {
        id: crypto.randomUUID(),
        img: "/pizzas-images/pizza.png",
        flavor: "Calabresa Dupla",
        amount: 1,
        ingredients: ["Calabresa dupla", "Mussarela extra", "Cebola", "Molho de tomate"],
        sizes: [
            { label: "P", price: 35.9 },
            { label: "M", price: 45.9 },
            { label: "G", price: 55.9 }
        ],
        price: 35.9
    },
    {
        id: crypto.randomUUID(),
        img: "/pizzas-images/pizza.png",
        flavor: "Calabresa com Catupiry",
        amount: 1,
        ingredients: ["Calabresa", "Catupiry", "Mussarela", "Molho de tomate"],
        sizes: [
            { label: "P", price: 34.5 },
            { label: "M", price: 44.5 },
            { label: "G", price: 54.5 }
        ],
        price: 34.5
    },
    {
        id: crypto.randomUUID(),
        img: "/pizzas-images/pizza.png",
        flavor: "Calabresa Picante",
        amount: 1,
        ingredients: ["Calabresa apimentada", "Mussarela", "Cebola", "Pimenta calabresa", "Molho de tomate"],
        sizes: [
            { label: "P", price: 33.9 },
            { label: "M", price: 43.9 },
            { label: "G", price: 53.9 }
        ],
        price: 33.9
    },
    {
        id: crypto.randomUUID(),
        img: "/pizzas-images/pizza.png",
        flavor: "Calabresa Caseira",
        amount: 1,
        ingredients: ["Calabresa caseira", "Mussarela", "Cebola roxa", "Molho de tomate"],
        sizes: [
            { label: "P", price: 31.9 },
            { label: "M", price: 41.9 },
            { label: "G", price: 51.9 }
        ],
        price: 31.9
    },
    {
        id: crypto.randomUUID(),
        img: "/pizzas-images/pizza.png",
        flavor: "Calabresa com Bacon",
        amount: 1,
        ingredients: ["Calabresa", "Bacon", "Mussarela", "Cebola", "Molho de tomate"],
        sizes: [
            { label: "P", price: 36.5 },
            { label: "M", price: 46.5 },
            { label: "G", price: 56.5 }
        ],
        price: 36.5
    }
];
