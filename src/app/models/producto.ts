export class Producto{
    id?:string;
    name?:string;
    category?:string;
    price?:number;
    descripcion?:string;
    imagenPrincipal?:string;
    imagenSecundaria?:string;
    apreciacion?:number;
    disponibles?:number;
    promocion?:boolean;
    oferta?:boolean;
    userUid?:string;
    comentarios?:string[];
    oldPrice?: string;
}
