import { Dispatch, SetStateAction, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"
import { StepUser } from "./StepUser"
import { StepAddress } from "./StepAddress"
import { Progress } from "../ui/progress"
import { CheckoutSteps } from "@/types/checkoutSteps"
import { StepFinish } from "./StepFinish"

type Props = {
    open: boolean
    onOpenChange: Dispatch<SetStateAction<boolean>>
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
        <Dialog open={open} onOpenChange={(value) => onOpenChange(value)}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-left">
                        {steps === "user" &&
                            "Qual o seu nome?"
                        }

                        {steps === "address" &&
                            "Endereço de entrega"
                        }

                        {steps === "finish" &&
                            "Envio para o WhatsApp"
                        }
                    </DialogTitle>
                </DialogHeader>

                <Progress value={progressPct}/>

                {steps === "user" && <StepUser setSteps={setSteps}/>}
                {steps === "address" && <StepAddress setSteps={setSteps}/>}
                {steps === "finish" && <StepFinish/>}

            </DialogContent>
        </Dialog>
    )
}