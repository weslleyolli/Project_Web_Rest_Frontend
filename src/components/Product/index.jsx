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

    // console.log(data.src);

    return (
        <Container {...rest}>
            <ImageProduct src={data.src}/>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <h4>
                 {/* Formatando para padrão BR com 2 casas após a vírgula */}
                {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                }).format(data.price)}
            </h4>
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