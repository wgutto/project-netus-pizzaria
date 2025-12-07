import { UserType } from "@/types/userType";
type addUser = {
    type: "addUser",
    payload: {
        name: string
    }
}
type addAddress = {
    type: "addAddress",
    payload: {
        street: string,
        number: string
        complement?: string
        district: string
        city: string
        state: string
    }
}


type Actions = addUser | addAddress

export const userReducer = (user: UserType, actions: Actions) => {
    switch (actions.type) {
        case "addUser":
            return {...user, name: actions.payload.name}
        case "addAddress":
            return {
                ...user,
                address: {
                    street: actions.payload.street,
                    number: actions.payload.number,
                    complement: actions.payload.complement ?? "",
                    district: actions.payload.district,
                    city: actions.payload.city,
                    state: actions.payload.state,
                }
            }
        default:
            return user
    }
}