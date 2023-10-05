import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, Form } from "./styles";
import { toast, ToastContainer } from "react-toastify";

export function Promotion() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [percentage, setPercentage] = useState("");
  const [code, setCode] = useState("");

  const placeholderText = product && product.isPromotion
    ? `Current Promotion Percentage: ${product.promotionPercentage}`
    : "MIN: 1, MAX: 90";

  async function handleNewPromotion() {
    if (!percentage) {
      toast.dark('Please fill all fields');
      return;
    }

    const productData = {
      code,
      promotionPercentage: percentage,
    };

    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await api.post(`/products/${code}/promotion`, productData, config);

      toast.dark('Promotion created successfully');

      setTimeout(() => {
        navigate(-1);
      }, 3000);
    } catch (error) {
      console.error('Error creating promotion:', error);
      toast.dark('Failed to create promotion');
    }
  }

  async function handleDeletePromotion() {

    const productData = {
      code,
    };

    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: productData
      };

      await api.delete(`/products/${code}/promotion`, config);

      toast.dark('Promotion deleted with successfull');

      setTimeout(() => {
        navigate(-1);
      }, 3000);
    } catch (error) {
      console.error('Error deleting promotion:', error);
      toast.dark('Failed to delete promotion');
    }
  }

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await api.get(`/products/${id}`, config);
        // Formatar a data expDate para "dd/mm/yyyy"
        const date = new Date(response.data.expDate);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();
        const formattedExpDate = `${day}/${month}/${year}`;

        // Adicionar a data formatada ao objeto do produto
        response.data.formattedExpDate = formattedExpDate;

        setProduct(response.data);
        setCode(response.data.code);
      } catch (error) {
        console.error("Erro ao buscar os detalhes do produto:", error);
      }
    }

    fetchProductDetails();
  }, [id]);

  const navigate = useNavigate();

  // Criando a página de produtos
  return (
    <Container>
      <Header />

      <main>
        {product ? (
          <Form>
            <header>
              <h1>Create Promotion</h1>
              <Link to={`/products/${id}`}>back</Link>
            </header>

            <div>
              <h5>Product Name</h5>
              <Input
                placeholder={product.name}
                disabled={product}
              />
            </div>

            <div>
              <h5>Product Code</h5>
              <Input
                placeholder={product.code}
                disabled={product}
              />
            </div>

            <div>
              <h5>EXP Date</h5>
              <Input
                placeholder={product.formattedExpDate}
                disabled={product}
              />
            </div>

            <div>
              <h2>Insert the percentage of promotion</h2>
              <Input
                placeholder={placeholderText}
                onChange={(e) => setPercentage(e.target.value)}
                disabled={product && product.isPromotion}
              />
            </div>
            <div className="containerButtons">
              <Button title="Save" onClick={handleNewPromotion} disabled={product && product.isPromotion} />
              <Button title="Delete" onClick={handleDeletePromotion} disabled={product && !product.isPromotion} />
            </div>

          </Form>
        ) : (
          <p>Loading...</p>
        )}
      </main>
      <ToastContainer />
    </Container>
  );
}