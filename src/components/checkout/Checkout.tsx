import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"
import { StepUser } from "./StepUser"
import { StepAddress } from "./StepAddress"
import { Progress } from "../ui/progress"
import { CheckoutSteps } from "@/types/checkoutSteps"

type Props = {
    open: boolean
    onOpenChange: () => void
}
export const Checkout = ({ open, onOpenChange }: Props) => {
    const [steps, setSteps] = useState<CheckoutSteps>("user")

    let progressPct = 0

    switch(steps) {
        case "user":
            progressPct = 30
        break
        case "address":
            progressPct = 50
        break
        case "finish":
            progressPct = 100
        break
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {steps === "user" &&
                            "Qual o seu nome?"
                        }

                        {steps === "address" &&
                            "Endereço de entrega"
                        }

                        {steps === "finish" &&
                            "Enviar pro WhatsApp"
                        }
                    </DialogTitle>
                </DialogHeader>

                <Progress value={progressPct}/>

                {steps === "user" && <StepUser setSteps={setSteps}/>}
                {steps === "address" && <StepAddress setSteps={setSteps}/>}
                {steps === "finish" && <p>Whats</p>}

            </DialogContent>
        </Dialog>
    )
}