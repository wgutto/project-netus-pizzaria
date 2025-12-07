import { Cart } from "../cart/Cart"
import { Avatar, AvatarImage } from "../ui/avatar"
import { ToggleModeTheme } from "./ToggleModeTheme"

export const Header = () => {
    return (
        <div className="w-full flex items-center justify-between px-8 p-2">
            <Avatar className="w-25 h-25 object-cover">
                <AvatarImage src="/logo-netus-pizzaria.png" />
            </Avatar>

            <div className="flex items-center gap-6">
                <Cart />
                <ToggleModeTheme />
            </div>
        </div>
    )
}