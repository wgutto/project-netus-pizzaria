import { PizzaListType } from "@/types/pizza_listType";

export const AllPizzasList: PizzaListType[] = [
    // -------------------
    // PIZZAS SALGADAS
    // -------------------
    {
        id: crypto.randomUUID(),
        img: "/pizzas-images/pizza-savory.png",
        flavor: "Frango com Catupiry",
        amount: 1,
        category: "savory",
        ingredients: ["Frango desfiado", "Catupiry", "Mussarela", "Milho", "Molho de tomate"],
        sizes: [
            { label: "P", price: 22.5 },
            { label: "M", price: 32.5 },
            { label: "G", price: 42.5 }
        ],
        price: 22.5
    },
    {
        id: crypto.randomUUID(),
        img: "/pizzas-images/pizza-savory.png",
        flavor: "Quatro Queijos",
        amount: 1,
        category: "savory",
        ingredients: ["Mussarela", "Parmesão", "Gorgonzola", "Provolone", "Molho branco"],
        sizes: [
            { label: "P", price: 32.5 },
            { label: "M", price: 42.5 },
            { label: "G", price: 52.5 }
        ],
        price: 32.5
    },
    {
        id: crypto.randomUUID(),
        img: "/pizzas-images/pizza-savory.png",
        flavor: "Portuguesa",
        amount: 1,
        category: "savory",
        ingredients: ["Presunto", "Mussarela", "Ovo", "Cebola", "Azeitonas", "Pimentão", "Molho de tomate"],
        sizes: [
            { label: "P", price: 42.5 },
            { label: "M", price: 52.5 },
            { label: "G", price: 62.5 }
        ],
        price: 42.5
    },
    {
        id: crypto.randomUUID(),
        img: "/pizzas-images/pizza-savory.png",
        flavor: "Pepperoni",
        amount: 1,
        category: "savory",
        ingredients: ["Pepperoni", "Mussarela", "Molho de tomate", "Orégano"],
        sizes: [
            { label: "P", price: 52.5 },
            { label: "M", price: 62.5 },
            { label: "G", price: 72.5 }
        ],
        price: 52.5
    },
    {
        id: crypto.randomUUID(),
        img: "/pizzas-images/pizza-savory.png",
        flavor: "Bacon Crocante",
        amount: 1,
        category: "savory",
        ingredients: ["Bacon", "Mussarela", "Cebola", "Molho de tomate"],
        sizes: [
            { label: "P", price: 28.5 },
            { label: "M", price: 38.5 },
            { label: "G", price: 48.5 }
        ],
        price: 28.5
    },
    {
        id: crypto.randomUUID(),
        img: "/pizzas-images/pizza-savory.png",
        flavor: "Marguerita",
        amount: 1,
        category: "savory",
        ingredients: ["Mussarela", "Tomate", "Manjericão", "Molho de tomate"],
        sizes: [
            { label: "P", price: 30.5 },
            { label: "M", price: 40.5 },
            { label: "G", price: 50.5 }
        ],
        price: 30.5
    },
    {
        id: crypto.randomUUID(),
        img: "/pizzas-images/pizza-savory.png",
        flavor: "Napolitana",
        amount: 1,
        category: "savory",
        ingredients: ["Mussarela", "Tomate", "Parmesão", "Molho de tomate", "Orégano"],
        sizes: [
            { label: "P", price: 27.9 },
            { label: "M", price: 37.9 },
            { label: "G", price: 47.9 }
        ],
        price: 27.9
    },
    {
        id: crypto.randomUUID(),
        img: "/pizzas-images/pizza-savory.png",
        flavor: "Carne Seca com Catupiry",
        amount: 1,
        category: "savory",
        ingredients: ["Carne seca desfiada", "Catupiry", "Cebola roxa", "Mussarela", "Molho de tomate"],
        sizes: [
            { label: "P", price: 35.9 },
            { label: "M", price: 45.9 },
            { label: "G", price: 55.9 }
        ],
        price: 35.9
    },
    {
        id: crypto.randomUUID(),
        img: "/pizzas-images/pizza-savory.png",
        flavor: "Lombo Canadense",
        amount: 1,
        category: "savory",
        ingredients: ["Lombo canadense", "Mussarela", "Cebola", "Molho de tomate"],
        sizes: [
            { label: "P", price: 34.5 },
            { label: "M", price: 44.5 },
            { label: "G", price: 54.5 }
        ],
        price: 34.5
    },
    {
        id: crypto.randomUUID(),
        img: "/pizzas-images/pizza-savory.png",
        flavor: "Strogonoff de Frango",
        amount: 1,
        category: "savory",
        ingredients: ["Strogonoff de frango", "Batata palha", "Mussarela"],
        sizes: [
            { label: "P", price: 33.9 },
            { label: "M", price: 43.9 },
            { label: "G", price: 53.9 }
        ],
        price: 33.9
    },
    {
        id: crypto.randomUUID(),
        img: "/pizzas-images/pizza-savory.png",
        flavor: "Atum com Cebola",
        amount: 1,
        category: "savory",
        ingredients: ["Atum", "Cebola", "Mussarela", "Azeitonas", "Molho de tomate"],
        sizes: [
            { label: "P", price: 31.9 },
            { label: "M", price: 41.9 },
            { label: "G", price: 51.9 }
        ],
        price: 31.9
    },
    {
        id: crypto.randomUUID(),
        img: "/pizzas-images/pizza-savory.png",
        flavor: "Milho e Bacon",
        amount: 1,
        category: "savory",
        ingredients: ["Milho", "Bacon", "Mussarela", "Molho de tomate"],
        sizes: [
            { label: "P", price: 36.5 },
            { label: "M", price: 46.5 },
            { label: "G", price: 56.5 }
        ],
        price: 36.5
    },

    // -------------------
    // PIZZAS DOCES
    // -------------------
    {
        id: crypto.randomUUID(),
        img: "/pizzas-images/pizza-sweet.png",
        flavor: "Chocolate com Morango",
        amount: 1,
        category: "sweet",
        ingredients: ["Chocolate ao leite", "Morango", "Granulado", "Creme doce"],
        sizes: [
            { label: "P", price: 29.9 },
            { label: "M", price: 39.9 },
            { label: "G", price: 49.9 }
        ],
        price: 29.9
    },
    {
        id: crypto.randomUUID(),
        img: "/pizzas-images/pizza-sweet.png",
        flavor: "Prestígio",
        amount: 1,
        category: "sweet",
        ingredients: ["Chocolate ao leite", "Coco ralado", "Creme de coco"],
        sizes: [
            { label: "P", price: 27.5 },
            { label: "M", price: 37.5 },
            { label: "G", price: 47.5 }
        ],
        price: 27.5
    },
    {
        id: crypto.randomUUID(),
        img: "/pizzas-images/pizza-sweet.png",
        flavor: "Ovomaltine",
        amount: 1,
        category: "sweet",
        ingredients: ["Chocolate ao leite", "Creme Ovomaltine", "Flocos crocantes"],
        sizes: [
            { label: "P", price: 32.9 },
            { label: "M", price: 42.9 },
            { label: "G", price: 52.9 }
        ],
        price: 32.9
    },
    {
        id: crypto.randomUUID(),
        img: "/pizzas-images/pizza-sweet.png",
        flavor: "Nutella com Banana",
        amount: 1,
        category: "sweet",
        ingredients: ["Nutella", "Banana", "Açúcar mascavo"],
        sizes: [
            { label: "P", price: 36.9 },
            { label: "M", price: 46.9 },
            { label: "G", price: 56.9 }
        ],
        price: 36.9
    },
    {
        id: crypto.randomUUID(),
        img: "/pizzas-images/pizza-sweet.png",
        flavor: "Romeu e Julieta",
        amount: 1,
        category: "sweet",
        ingredients: ["Goiabada", "Queijo minas", "Açúcar cristal"],
        sizes: [
            { label: "P", price: 26.9 },
            { label: "M", price: 36.9 },
            { label: "G", price: 46.9 }
        ],
        price: 26.9
    },
    {
        id: crypto.randomUUID(),
        img: "/pizzas-images/pizza-sweet.png",
        flavor: "Brigadeiro",
        amount: 1,
        category: "sweet",
        ingredients: ["Chocolate ao leite", "Creme de brigadeiro", "Granulado"],
        sizes: [
            { label: "P", price: 28.5 },
            { label: "M", price: 38.5 },
            { label: "G", price: 48.5 }
        ],
        price: 28.5
    }
];
