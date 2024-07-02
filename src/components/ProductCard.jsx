import React, { useRef } from 'react'
import { GrFormView } from "react-icons/gr";
import ProductModal from './modal/ProductModal';

const ProductCard = ({ item }) => {
    const productModal = useRef()

    const handleProductModal = () => {
        productModal.current.open()
    }

    return (

        <>

            <ProductModal ref={productModal} item={item} />

            <div className=' md:w-56 w-44 p-5 mx-auto border rounded-xl border-opacity-20 m-2'>

                <div className='hover:border-b'>
                    <img src={item.images[0]} alt={item.name} className='h-32 w-32 mx-auto' />
                    <div className='relative md:flex md:justify-end mt-1  bottom-5'>
                        <button onClick={handleProductModal}>

                            <GrFormView className='bg-[#02B290] text-white rounded-full w-7 h-7' />
                        </button>
                    </div>
                </div>

                <div>
                    <h3 className='text-xl font-medium'><span className='mx-0.5'>&#8377;</span>{item.price}</h3>
                    <h4 className='whitespace-nowrap overflow-hidden text-ellipsis '>{item.description}</h4>
                </div>


            </div >
        </>
    )
}

export default ProductCard