export interface Product {
    color: string,
    createdAt: string,
    downloadURL: List[],
    id: string,     
    name: string,     
    price: number,
    purchasePrice: number,     
    size: List[]   
}

export interface List {
    value: any,
}