import React from 'react'
import './Details.css';
import { useParams } from 'react-router-dom';
import { products } from './data/Products';

const ProductDetails = () => {

    const { id } = useParams();
    const product = products.find((p) => p.id === id);
    console.log(id);
    console.log(';lkjhg', product);
    
    

    if (!product) {
        return <h2 style={{ textAlign: 'center' }}>Products Not Found</h2>
    }
    return (
        <div className='details-container'>
            {/* left */}
            <div className=''>
                <img src={product.image}
                    alt={product.title}
                    className='details-image'
                />

                <div className='details-thumbnails'>
                    {product.gallary?.map((img, i) => (
                        <img key={i} src={img} className='details-thumb ' />

                    ))}

                </div>
            </div>

            {/* right */}
            <div>

                <h1 className='details-title'>{product.title}</h1>
                <div className='details-rating '>
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < product.rating ? "star filled" : "star"}>
                            ★
                        </span>
                    ))}

                </div>

                <p className='details-description'>{product.description}</p>

                <div className='details-price-row'>
                    <span className='details-new-price'>
                        {product.price}

                    </span>
                    {product.oldPrice && (
                        <span className='details-old-price'>
                            ₹{product.oldPrice}

                        </span>
                    )}

                </div>
                <button className='details-btn '>Add to Cart</button>
            </div>

        </div>
    )
}

export default ProductDetails
