import { CheckoutSteps } from "@/types/checkoutSteps"
import { zodResolver } from "@hookform/resolvers/zod"
import { Dispatch, SetStateAction } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { useUser } from "@/contexts/UserContext"

const formSchema = z.object({
    street: z.string().min(2, "Preencha o campo endereço."),
    number: z.string().min(1, "Preencha o campo número."),
    complement: z.string().optional(),
    district: z.string("Preencha o campo corretamente.").min(2, "Preencha o campo bairro."),
    city: z.string("Preencha o campo corretamente.").min(2, "Preencha o campo cidade."),
    state: z.string("Preencha o campo corretamente.").min(2, "Preencha o campo estado.")
})

type Props = {
    setSteps: Dispatch<SetStateAction<CheckoutSteps>>
}
export const StepAddress = ({ setSteps }: Props) => {
    const userContext = useUser()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            street: "",
            number: "",
            complement: "",
            district: "",
            city: "",
            state: ""
        }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        userContext?.addAddress(values.street, values.number, values.complement, values.district, values.city, values.state)
        setSteps("finish")
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                <div className="flex gap-5">
                    <FormField
                        control={form.control}
                        name="street"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Rua</FormLabel>
                                <FormControl>
                                    <Input placeholder="Digite o nome da sua rua" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="number"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Número</FormLabel>
                                <FormControl>
                                    <Input placeholder="Digite o número da casa" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex gap-5">
                    <FormField
                        control={form.control}
                        name="complement"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Complemento</FormLabel>
                                <FormControl>
                                    <Input placeholder="Apto, bloco, casa, lote… (opcional)" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="district"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Bairro</FormLabel>
                                <FormControl>
                                    <Input placeholder="Nome do seu bairro" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex gap-5">
                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Cidade</FormLabel>
                                <FormControl>
                                    <Input placeholder="Nome da cidade" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Estado</FormLabel>
                                <FormControl>
                                    <Select defaultValue={field.value} onValueChange={field.onChange}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Selecione o estado" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="CE">Ceará, CE</SelectItem>
                                            <SelectItem value="MG">Minas Gerais, MG</SelectItem>
                                            <SelectItem value="PR">Curitiba, PR</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>


                <div className="flex justify-between">
                    <Button variant={"outline"} onClick={() => setSteps("user")} type="submit" className="cursor-pointer">Voltar</Button>

                    <Button type="submit" className="cursor-pointer">Finalizar</Button>
                </div>
            </form>
        </Form>
    )
}