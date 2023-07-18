
export class Accounts {

    constructor(
        private id: string,
        private ownerId: string,
        private balance: number,
        private createdAt: string
    ){}

    public getId = (): string => {
        return this.id
    }

    public getOwnerId = (): string => {
        return this.ownerId
    }

    public getBalance = (): number => {
        return this.balance
    }

    public getCreatedAt = (): string => {
        return this.createdAt
    }
    
    public setBalance = (newBalance: number): void => {
        this.balance = newBalance
    }


}