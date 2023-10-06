import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Container, Content } from "./styles.js";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { ToastContainer, toast } from "react-toastify";

export function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

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
        const offset = date.getTimezoneOffset();
        date.setMinutes(date.getMinutes() + offset); // Ajusta o fuso horário
        const day = (date.getDate()).toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();        
        const formattedExpDate = `${day}/${month}/${year}`;

        // Adiciona a data formatada 
        response.data.formattedExpDate = formattedExpDate;

        setProduct(response.data);
      } catch (error) {
        console.error("Erro ao buscar os detalhes do produto:", error);
      }
    }

    fetchProductDetails();
  }, [id]);

  async function handleDeleteProduct() {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await api.delete(`/product/delete/${id}`, config);

      toast.dark("Product deleted successfully");
      setTimeout(() => {
        navigate('/home');
      }, 2000);
    } catch (error) {
      toast.dark("Error for delete product");
      console.error("Erro ao excluir o produto:", error);
    }
  }

  async function handleCreatePromotion(){
    navigate(`/products/${id}/promotion`)
  }

  async function handleEditProduct(){
    navigate(`/products/${id}/edit`)
  }

  return (
    <Container>
      <Header />

      <main>
        {product && (
          <Content>
            <div>
              <ButtonText
                title="Edit Product"
                onClick={handleEditProduct}
              />
              <ButtonText 
                title="Manage promotion"
                onClick={handleCreatePromotion}
              />
              <ButtonText
                title="Delete Product"
                onClick={handleDeleteProduct}
              />
            </div>

            <Section title="Product">
              <p>{product.name}</p>
            </Section>

            <Section title="Expiration date">
              <p>{product.formattedExpDate}</p>
            </Section>

            <Section title="Value">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(product.price)}
            </Section>

            <Button title="Back" onClick={() => navigate("/home")} />
          </Content>
        )}
      </main>
      <ToastContainer />
    </Container>
  );
}
