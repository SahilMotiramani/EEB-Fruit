import React, { useState } from 'react';
import { fruits } from '../../data/Data';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/CartSlice';

const Fruits = () => {
    const dispatch = useDispatch();
    
    // State to track which fruit has been added to cart
    const [addedToCartMessage, setAddedToCartMessage] = useState(null);

    // Function to handle adding to cart and showing message
    const handleAddToCart = (val) => {
        dispatch(addToCart(val));
        setAddedToCartMessage(val.id); // Set the current fruit's ID

        // Automatically hide the message after 2 seconds
        setTimeout(() => {
            setAddedToCartMessage(null);
        }, 2000);
    };

    return (
        <div className='mt-40 container ml-auto mr-auto'>
            <div className='flex flex-col mb-10 mx-4 md:mx-20 lg:flex lg:justify-between lg:flex-row lg:mx-10 lg:gap-10'>
                <h1 className='text-3xl font-semibold mb-6 lg:text-4xl lg:flex lg:justify-center lg:items-center' style={{color: '#45595b'}}>Our Organic Products</h1>
                <ul className='flex flex-row flex-wrap'>
                    <li className='py-2 px-3 border rounded-full text-white w-32 text-center mx-2 my-2 lg:mx-1 hover:cursor-pointer' style={{backgroundColor: '#ffb524'}}>All Products</li>
                    <li className='py-2 px-3 border rounded-full w-32 text-center mx-2 my-2 lg:mx-1 hover:cursor-pointer' style={{backgroundColor: '#f4f6f8'}}>Vegetables</li>
                    <li className='py-2 px-3 border rounded-full w-32 text-center mx-2 my-2 lg:mx-1 hover:cursor-pointer' style={{backgroundColor: '#f4f6f8'}}>Fruits</li>
                    <li className='py-2 px-3 border rounded-full w-32 text-center mx-2 my-2 lg:mx-1 hover:cursor-pointer' style={{backgroundColor: '#f4f6f8'}}>Bread</li>
                    <li className='py-2 px-3 border rounded-full w-32 text-center mx-2 my-2 lg:mx-1 hover:cursor-pointer' style={{backgroundColor: '#f4f6f8'}}>Meat</li>
                </ul>
            </div>
            <div className='mx-4 sm:mx-20 md:grid md:grid-cols-2 md:gap-4 lg:mx-10 lg:grid-cols-3 xl:grid-cols-4 '>
                {fruits.map((val) => {
                    return (
                        <div key={val.id} className='box border rounded-lg border-orange-400 mx-auto mb-6 w-full'>
                            <div className='w-full relative overflow-clip'>
                                <img className='hover:scale-150 duration-500 w-full rounded-lg' src={val.img} alt="" />
                                <span className='absolute top-3 left-3 text-white text-lg py-1 px-4 rounded-xl' style={{backgroundColor: '#ffb524'}}>Fruits</span>
                            </div>
                            <div className='text-center'>
                                <h3 className='text-2xl mt-5 font-semibold' style={{color: '#45595b'}}>{val.name}</h3>
                                <p className='leading-normal font-normal my-4 w-10/12 mx-auto' style={{color: '#020e1ccf'}}>{val.desc}</p>
                            </div>
                            <div className='flex justify-between items-center mb-8 mx-6 xl:mx-3'>
                                <p className='font-semibold text-lg' style={{color: '#0c363b'}}>₹{val.price} / Kg</p>
                                <div className='border rounded-full border-orange-400 py-2 px-4 lg:px-2 '>
                                    <span className='pr-4 lg:pr-1 ' style={{color: '#81c408'}}>{val.icon}</span>
                                    <button 
                                        onClick={() => handleAddToCart(val)} 
                                        className='font-semibold' 
                                        style={{color: '#81c408'}}
                                    >
                                        {val.cart}
                                    </button>
                                </div>
                            </div>
                            {/* Show the "Added to Cart" message if the current fruit's ID matches */}
                            {addedToCartMessage === val.id && (
                                <p className='text-green-500 text-center mb-4'>Added to Cart!</p>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Fruits;
