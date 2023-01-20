import React, { useReducer } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { Grid, GridItem } from '@chakra-ui/react'
import ProductCard from '../Components/ProductCard';

const initialState = {
    products:[],
    isLoading:true,
    isError:""
}

const reducer =(state, action)=>{
    console.log("recived" , action.payload)
    switch (action.type) {
        case 'FETCH-SUCCUSS':
          return {
            ...state,
            products: action.payload,
            isLoading:false,
            isError: false
          };
        case 'FETCH_FAILURE':
          return {
            isLoading:false,
            isError: "something is wrong"
          };
        case 'FETCH_FAILURE':
          return {count: state.count - 1};
        default:
          throw new Error();
      }
}

const ProductPage = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const {products,isLoading,isError} = state
    

    const getData = async()=>{
        axios
        .get("https://fakestoreapi.com/products")
        .then((res)=>{
            dispatch({type:"FETCH-SUCCUSS",payload : res.data})
            console.log(res.data)})
            .catch((err)=>{
                dispatch({type: "FETCH_FAILURE",payload : err})
            });
    }

    useEffect(()=>{
        getData()
    },[])
  return (
    <div>
            <h1>Product Page</h1>
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            {
                products?.length>0 && products.map((e)=>{
                    return <GridItem key={e.id}>
                        <ProductCard 
                        id={e.id}
                        category={e.category}
                        image={e.image}
                        price={e.price}
                        rating={e.rating.rate}
                        title={e.title}
                        />
                    </GridItem>
                })
            }
        </Grid>
    </div>
  )
}

export default ProductPage
