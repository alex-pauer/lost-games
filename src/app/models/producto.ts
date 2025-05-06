export interface ProductoI {
    producto: Producto[]
  }

  export interface Producto {
    id: number
    nombre: string
    descripcion: string
    precio: number
    imagen: string
  }
