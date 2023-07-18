
export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private createdAt: string
    ){}
    
    public getId(): string {
        return this.id
    }
    public getName(): string {
        return this.name
    }
    public getEmail(): string {
        return this.email
    }
    public getPassword(): string {
        return this.password
    }
    public getCreatedAt(): string {
        return this.createdAt
    }

    public setName(name: string): void {
        this.name = name
    }
    public setEmail(email: string): void {
        this.email = email
    }
    public setPassword(password: string): void {
        this.password = password
    }

}

const newUser = new User("001", "Wesllei", "wesllei@brito", "123", "2023-07-17")

newUser.setName("Brito")