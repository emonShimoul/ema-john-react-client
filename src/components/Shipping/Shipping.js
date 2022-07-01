import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import './Shipping.css';

const Shipping = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {user} = useAuth();
    const navigate = useNavigate();
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const onSubmit = data => {
        const savedCart = getStoredCart();
        data.order = savedCart;
        console.log(data);
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                alert('Order processed successfully!!');
                clearTheCart();
                reset();
            }
        })
        navigate('/placeorder');
        setCart([]);
        clearTheCart();
    };
    return (
        <div>
            {/* react hook form */}
            <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name")} />
                <input defaultValue={user.email} {...register("email", { required: true })} />

                {errors.email && <span className='error'>This field is required</span>}
                <input placeholder='Address' defaultValue="" {...register("address")} />
                <input placeholder='City' defaultValue="" {...register("city")} />
                <input placeholder='Phone Number' defaultValue="" {...register("phone")} />
                
                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;