export class Event {
    constructor(
        public _id: string,
        public titulo: string,
        public descripcion :string,
        public categorias : string[],
        public fecha : string,
        public sede : string,
        public lugarEvento : {
            nombre : string,
            direccion : string ,
            ciudad : string
        },
        public facultadOrganizadora : string,
        public programaOrganizado : string
    ){}
}
