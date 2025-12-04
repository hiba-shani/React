import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../slices/ProductSlice';
import { addToCart } from '../slices/cartSlice';

function ProductList() {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) return <p>Loading products...</p>;

    if (error) return <p className='text-danger'>error:{error}</p>;

    return (
        <div className='row'>
            {items.map((product) => (
                <div className='col-md-4 mb-4' key={product.id}>
                    <div className='card h-100'>
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            style={{ height: "200px", objectFit: "cover" }} />
                        <div className='card-body'>
                            <h5 className='card-title'>{product.title}</h5>
                            <p className='card-text'>{product.price}</p>
                            <button className='btn btn-primary' onClick={()=> dispatch(addToCart(product))}>
                                Add to cart
                            </button>
                        </div>

                    </div>

                </div>
            ))}

        </div>
    );
}

export default ProductList;
