import PropTypes from 'prop-types';
import { Container, ImageProduct } from './styles';
import { FiMinus, FiPlus, FiShoppingCart } from 'react-icons/fi';
import { useState } from 'react';

export function Product({ data, ...rest }) {
    const [quantity, setQuantity] = useState(0);

    const handleAdd = () => {
        setQuantity(quantity + 1);
    };

    const handleRemove = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const renderPrice = () => {
        if (data.isPromotion) {
            // Se o produto está em promoção, exibe o preço promocional e a porcentagem de desconto
            return (
                <>
                    <span className="discount-price">
                        {new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        }).format(data.promotionPrice)}
                    </span>
                    <span className="original-price">
                        {new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        }).format(data.price)}
                    </span>
                    <span className="discount-percentage">
                        {data.promotionPercentage}%
                    </span>
                </>
            );
        } else {
            // Se o produto não está em promoção, exibe apenas o preço original
            return (
                <span className="original-price">
                    {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    }).format(data.price)}
                </span>
            );
        }
    };

    return (
        <Container {...rest}>
            <ImageProduct src={data.src} />
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <h4>{renderPrice()}</h4>
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
    );
}

Product.propTypes = {
    data: PropTypes.shape({
        src: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        price: PropTypes.number.isRequired,
        isPromotion: PropTypes.bool,
        promotionPrice: PropTypes.number,
        promotionPercentage: PropTypes.number,
    }),
};
