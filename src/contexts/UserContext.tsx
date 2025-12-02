import { userReducer } from "@/reducers/userReducer";
import { UserType } from "@/types/userType";
import { createContext, ReactNode, useContext, useReducer } from "react";

type UserContextType = {
    user: UserType
    addName: (newName: string) => void
    addAddress: (street: string, number: string, complement: string | undefined, district: string, city: string, state: string) => void
}
const UserContext = createContext<UserContextType | null>(null)

type Props = {
    children: ReactNode
}
const initialUser: UserType = {
    name: "",
    address: {
        street: "",
        number: "",
        complement: "",
        district: "",
        city: "",
        state: "",
    }
}

export const UserProvider = ({children}: Props) => {
    const [user, dispatch] = useReducer(userReducer, initialUser)

    const addName = (name: string) => {
        dispatch({
            type: "addUser",
            payload: {
                name
            }
        })
    }

    const addAddress = (street: string, number: string, complement: string | undefined, district: string, city: string, state: string) => {
        dispatch({
            type: "addAddress",
            payload: {
                street,
                number,
                complement,
                district,
                city,
                state
            }
        })
    }
    return (
        <UserContext.Provider value={{user, addName, addAddress}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)