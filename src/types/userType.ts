export type UserType = {
    name: string
    address: {
        street: string,
        number: string
        complement?: string
        district: string
        city: string
        state: string
    }
}