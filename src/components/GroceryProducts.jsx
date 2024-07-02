import React, { useEffect, useState } from 'react'
import { getProducts } from '../services/ProductService'
import ProductCard from './ProductCard'
import ProductModal from './modal/ProductModal'
import { useLocation, useSearchParams } from 'react-router-dom'

const GroceryProducts = ({ filterProducts }) => {

    const [searchParams, setSearchParams] = useSearchParams()
    const location = useLocation();
    const [products, setProducts] = useState([])


    const { pathname, search, hash } = location;

    useEffect(() => {
        try {
            const fetchProducts = async () => {
                const data = await getProducts();
                if (data.length > 0) {
                    setProducts(data)
                }
            }
            fetchProducts()

        } catch (error) {
            console.log(error);
        }
    }, [])



    return (

        <>

            <div className='md:mx-10'>

                {
                    pathname === "/" &&


                    <div className='text-center my-10'>

                        <h1 className='text-2xl font-medium py-1'>Best Groceries In Our Store</h1>
                        <h3 className=' font-normal py-1'>We provide best quality & fresh grocery items near your location</h3>

                    </div>
                }
                <div className='md:py-10 py-5'>

                    <div className='grid md:grid-cols-4 grid-cols-2 gap-4 mx-auto '>
                        {
                            products?.map((item, index) => (
                                <ProductCard key={item._id} item={item} />
                            ))
                        }
                    </div>

                </div>


            </div>
        </>
    )
}

export default GroceryProducts