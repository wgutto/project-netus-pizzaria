export type PizzaListType = {
    id: string;
    img: string;
    flavor: string;
    amount: number;
    ingredients: string[];
    sizes: {label: string; price: number}[]
    size?: string
    price: number
};
