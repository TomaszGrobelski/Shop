export interface Shoe {
    id: number;
    img?: string;
    name: string;
    type: string;
    gender: string;
    oldPrice?: number;  
    price: number;
    sizes: number[];    
    imgURL?: string;
    selectedSize?: number | number; 
    stripePrice?: string;
    
}