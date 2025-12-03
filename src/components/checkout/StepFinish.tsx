import { useUser } from "@/contexts/UserContext"
import { Button } from "../ui/button"
import Link from "next/link"
import { usePizza } from "@/contexts/CartContext"

export const StepFinish = () => {
    const userContext = useUser()
    const pizzaContext = usePizza()

    const user = userContext?.user
    const items = pizzaContext?.itemsCart || []
    const subtotal = pizzaContext?.subtotalValue ?? 0
    const delivery = pizzaContext?.deliveryValue ?? 0
    const total = subtotal + delivery

    const itemsText = items.length > 0
        ? items.map(i => {
            const line = `- ${i.amount}x ${i.flavor} ${i.size ? `(${i.size})` : ""} — R$ ${i.price.toFixed(2)} — Subtotal: R$ ${(i.price * i.amount).toFixed(2)}`
            return line
        }).join("\n")
        : "- Nenhum item adicionado"

    const message = `Olá, segue meu pedido!\n\n*Dados para entrega:*\n\nNome: *${user?.name || ""}*\nEndereço: *${user?.address?.street || ""}, ${user?.address?.number || ""}${user?.address?.complement ? `, ${user.address.complement}` : ""}*\nBairro: *${user?.address?.district || ""}*\nCidade / UF: *${user?.address?.city || ""} / ${user?.address?.state || ""}*\n\n*Pedido:*\n${itemsText}\n\nSubtotal: *R$ ${subtotal.toFixed(2)}*\nEntrega: *R$ ${delivery.toFixed(2)}*\nTotal: *R$ ${total.toFixed(2)}*\n\nPor favor, confirme o recebimento desta mensagem e informe a previsão de entrega.\n\nAtenciosamente,\n*Equipe Net'us Pizzaria*`;

    const phone = process.env.NEXT_PUBLIC_WHATSAPP || ""
    const linkWhatsApp = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

    return (
        <div className="flex flex-col">
            <p className="text-center text-lg mb-2">
                Perfeito, <span className="font-medium">{user?.name}</span>.
            </p>
            <p className="text-center">
                Envie seu pedido pelo WhatsApp para finalizarmos a compra. Nosso(a) atendente dará continuidade ao atendimento.
            </p>

            <Button className="flex self-center mt-5 bg-green-600 text-white cursor-pointer hover:bg-green-700">
                <Link target="_blank" href={linkWhatsApp}>Enviar para o WhatsApp</Link>
            </Button>

        </div>
    )
}