import { CheckoutSteps } from "@/types/checkoutSteps"
import { Dispatch, SetStateAction } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useUser } from "@/features/user/context/UserContext"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

const formSchema = z.object({
    name: z.string("Preencha o campo corretamente.").min(2, "O nome deve conter no minímo 2 caracteres.")
})

type Props = {
    setSteps: Dispatch<SetStateAction<CheckoutSteps>>
}
export const StepUser = ({ setSteps }: Props) => {
    const userContext = useUser()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: ""
        }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        userContext?.addName(values.name)
        setSteps("address")
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                                <Input placeholder="Digite seu nome" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-end"><Button type="submit" className="cursor-pointer">Próximo</Button></div>
            </form>
        </Form>
    )
}