import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Back from './common/Back';

const Checkout = () => {
    const items = useSelector(state => state.cart.items);
    
    // State to manage form inputs
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        address: '',
        town: '',
        country: '',
        postcode: '',
        mobile: '',
        email: '',
        createAccount: false,
        shipDifferent: false,
        orderNotes: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const requiredFields = [
            'firstName', 'lastName', 'companyName', 'address', 
            'town', 'country', 'postcode', 'mobile', 'email'
        ];
        const isAllFilled = requiredFields.every(field => formData[field]);
        
        if (!isAllFilled) {
            alert('Please fill all the required fields.');
        } else {
            alert('Your order is placed.');
            setFormData({
                firstName: '',
                lastName: '',
                companyName: '',
                address: '',
                town: '',
                country: '',
                postcode: '',
                mobile: '',
                email: '',
                createAccount: false,
                shipDifferent: false,
                orderNotes: ''
            });
        }
    };

    return (
        <div>
            <Back title='Checkout'/>
            <div className='mx-5 sm:mx-16'>
                <h2 className='text-2xl font-semibold mb-6 mt-20 md:text-3xl lg:text-5xl' style={{color: '#45595b'}}>Billing details</h2>
                <div className='lg:flex lg:justify-between'>
                    <form className='lg:w-10/12 lg:mr-10' onSubmit={handleSubmit} style={{color: '#45595b'}}>
                        {/* Form Fields */}
                        <div>
                            <label>First Name<sup className='relative top-2 text-4xl'>*</sup></label>
                            <input name="firstName" value={formData.firstName} onChange={handleChange} className='w-full border border-gray-300 outline-green-300 rounded-lg px-2 py-2 mt-2' type="text" />
                        </div>
                        <div>
                            <label>Last Name<sup className='relative top-2 text-4xl'>*</sup></label>
                            <input name="lastName" value={formData.lastName} onChange={handleChange} className='w-full border border-gray-300 outline-green-300 rounded-lg px-2 py-2 mt-2' type="text" />
                        </div>
                        <div>
                            <label>Company Name<sup className='relative top-2 text-4xl'>*</sup></label>
                            <input name="companyName" value={formData.companyName} onChange={handleChange} className='w-full border border-gray-300 outline-green-300 rounded-lg px-2 py-2 mt-2' type="text" />
                        </div>
                        <div>
                            <label>Address<sup className='relative top-2 text-4xl'>*</sup></label>
                            <input name="address" value={formData.address} onChange={handleChange} className='w-full border border-gray-300 outline-green-300 rounded-lg px-2 py-2 mt-2' type="text" placeholder='House Number Street Name'/>
                        </div>
                        <div>
                            <label>Town/City<sup className='relative top-2 text-4xl'>*</sup></label>
                            <input name="town" value={formData.town} onChange={handleChange} className='w-full border border-gray-300 outline-green-300 rounded-lg px-2 py-2 mt-2' type="text"/>
                        </div>
                        <div>
                            <label>Country<sup className='relative top-2 text-4xl'>*</sup></label>
                            <input name="country" value={formData.country} onChange={handleChange} className='w-full border border-gray-300 outline-green-300 rounded-lg px-2 py-2 mt-2' type="text"/>
                        </div>
                        <div>
                            <label>Postcode/Zip<sup className='relative top-2 text-4xl'>*</sup></label>
                            <input name="postcode" value={formData.postcode} onChange={handleChange} className='w-full border border-gray-300 outline-green-300 rounded-lg px-2 py-2 mt-2' type="text"/>
                        </div>
                        <div>
                            <label>Mobile<sup className='relative top-2 text-4xl'>*</sup></label>
                            <input name="mobile" value={formData.mobile} onChange={handleChange} className='w-full border border-gray-300 outline-green-300 rounded-lg px-2 py-2 mt-2' type="text"/>
                        </div>
                        <div>
                            <label>Email Address<sup className='relative top-2 text-4xl'>*</sup></label>
                            <input name="email" value={formData.email} onChange={handleChange} className='w-full border border-gray-300 outline-green-300 rounded-lg px-2 py-2 mt-2' type="text"/>
                        </div>
                        <div className='my-4'>
                            <input name="createAccount" type="checkbox" checked={formData.createAccount} onChange={handleChange} id='account'/>
                            <label className='ml-2' htmlFor='account'>Create an account?</label>
                        </div>
                        <hr />
                        <div className='my-4'>
                            <input name="shipDifferent" type="checkbox" checked={formData.shipDifferent} onChange={handleChange} id='ship'/>
                            <label className='ml-2' htmlFor='ship'>Ship to a different address?</label>
                        </div>
                        <textarea name="orderNotes" value={formData.orderNotes} onChange={handleChange} className='w-full border border-gray-300 outline-green-300 rounded-lg px-2 py-2 mt-2' cols="30" rows="10" placeholder='Order Notes (Optional)'></textarea>
                        <button type="submit" className='bg-green-600 hover:bg-green-700 rounded-lg py-3 px-10 text-white'>Place Order</button>
                    </form>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Products</th>
                                    <th scope="col" className="px-6 py-3">Name</th>
                                    <th scope="col" className="px-6 py-3">Price</th>
                                    <th scope="col" className="px-6 py-3">Quantity</th>
                                    <th scope="col" className="px-6 py-3">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map(item => (
                                    <tr className="border-b" key={item.id}>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <img className="img-cart rounded-full" src={item.img} alt={item.name} />
                                        </td>
                                        <td className="px-6 py-4">{item.name}</td>
                                        <td className="px-6 py-4">{item.price}</td>
                                        <td className="px-6 py-4">{item.quantity}</td>
                                        <td className="px-6 py-4">{(item.price * item.quantity).toFixed(2)} ₹</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className='flex justify-end pr-10 my-8' style={{color: '#45595b'}}>
                            <h3>Subtotal</h3>
                            <span className='ml-20'>₹{items.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2)}</span>
                        </div>
                        <hr />
                        <div className='flex justify-center items-center my-20' style={{color: '#45595b'}}>
                            <h3>Shipping</h3>
                            <div className='ml-10 sm:ml-20'>
                                <div>
                                    <input type="checkbox" id='free' checked readOnly/>
                                    <label className='ml-2' htmlFor='free'>Free Shipping</label>
                                </div>
                                <div>
                                    <input type="checkbox" id='tax' checked readOnly/>
                                    <label className='ml-2' htmlFor='tax'>Tax Included</label>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-end pr-10 mb-20' style={{color: '#45595b'}}>
                            <h3>Total</h3>
                            <span className='ml-20'>₹{items.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
