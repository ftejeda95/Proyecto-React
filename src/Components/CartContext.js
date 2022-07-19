import React , { createContext, useEffect, useState } from "react";


export const cartContext= createContext()
const { Provider }= cartContext

const CartContext= ({children}) =>{

    const [products, setProducts] = useState([])

    const [QuantityProducts,setQuantityProducts] = useState(0)
    
    const [Price,setPrice] = useState([0])

    const GetQuantityProducts = ()=>{
        let quantity = 0 
        products.forEach(product => {
            quantity += product.qty
        });
        return (setQuantityProducts(quantity))
        
    }
    const AddItem = (product)=>{
        if(IsInCart(product.id)){
            const found = products.find(p=>p.id === product.id)
            const index = products.indexOf(found)
            const aux = [...products]
            aux[index].qty += product.qty
            setProducts(aux)
           
        
        }else(setProducts([...products,product]))
        
    }
    const RemoveItem = (id)=>{
        setProducts(products.filter(product=>product.id !== id))
    }
    const Clear = ()=>{
        setProducts([])
        GetQuantityProducts(0)
        PriceFinally(0)
    }

    const IsInCart= (id)=>{
        
        return (products.some(product=>product.id===id))
    }
    const PriceFinally = ()=>{
        let price = 0
        products.forEach(product=>{
            price += ((product.price)*(product.qty))})
            return(setPrice(price))
    }
    useEffect(()=>{
        GetQuantityProducts();
        PriceFinally()
        console.log(products)
    },[products])




    return(
        <Provider value={{products, AddItem, RemoveItem, Clear, IsInCart, QuantityProducts, Price}}>
            {children}
        </Provider>
    )

}
export default CartContext