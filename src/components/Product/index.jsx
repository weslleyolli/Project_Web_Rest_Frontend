/* eslint-disable react/prop-types */


import { Container, ImageProduct } from './styles'
import { FiMinus, FiPlus, FiShoppingCart } from 'react-icons/fi'
import { useState } from 'react'

export function Product({ data, ...rest }) {
    const [quantity, setQuantity] = useState(0)

    const handleAdd = () => {
        setQuantity(quantity + 1)
    }

    const handleRemove = () => {
        setQuantity(quantity - 1)
    }

    return (
        <Container {...rest}>
            <ImageProduct />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <h4>{data.price}</h4>
            <footer>
                <div>
                    <FiMinus onClick={handleRemove} />
                    <p>{quantity}</p>
                    <FiPlus onClick={handleAdd} />
                </div>
                <article>
                    <FiShoppingCart />
                </article>
            </footer>
        </Container>
    )
}