export class Asistent {
    constructor(
        public id: string,
        public nombreUsuario: string,
        public nombreCompleto: string,
        public tipoUsuario: string,
        public email: string,
        public ciudad: {
            nombre: string,
            departamento: string,
            pais: string
        }
        
    ){}
}