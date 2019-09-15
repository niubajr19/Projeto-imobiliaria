export class Client {
    
    public id: number

    constructor(    
        public name: String,
        public cpf: String,
        public dateOfBirth: String,
        public profession: String,
        public rg: String,
        public address: { street: string, number: number, 
            district: String},
        public email: String,
        public telephone: number,
    ){}
}
