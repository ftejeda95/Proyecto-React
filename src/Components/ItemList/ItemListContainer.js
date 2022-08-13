import React, { useEffect , useState } from "react";
import ItemList from "./ItemList";
import { ScaleLoader  } from "react-spinners";
import { useParams } from "react-router";
import { db } from "../../Firebase/Firebase"
import { getDocs, collection, query, where } from "firebase/firestore"

const ItemListContainer = ({greeting})=> {
    
    const [products,setProduct]=useState([]);
    const [loading,setLoading]=useState([true]);
    const {categoryId} = useParams();

    useEffect(()=>{
        const productsCollection = collection(db,"Products");
        const q = query(productsCollection, where("category","==",`${categoryId}`));
        const categories = categoryId ? q : productsCollection;
        getDocs(categories)
            .then(result => {
                const lista = result.docs.map(doc => {
                    return{
                        id:doc.id,
                        ...doc.data()}
                })
            setProduct(lista)
            })
            .finally(()=>setLoading(false));
    },[categoryId]);

    return  <> 
                <h2 className="slogan">
                    {greeting}
                </h2>;

                {loading ? <div className="spinner"><ScaleLoader  color="#82f682" /></div>: <ItemList products={products}/>};        
            </>
};
export default ItemListContainer;