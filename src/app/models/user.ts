export interface UserInterface {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    photoUrl?: string;
    inhabilitado?: string;
    admin?: string;
    carrito?: object[],

    firstnames?: string;
    lastnames?: string;
    estado?: string;
    direccion?: string;
    codigoPostal?: number; 
    telefono?: number;
}