import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";

import { Container, Form } from "./styles";
import { toast, ToastContainer } from "react-toastify";

export function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [expDate, setExpDate] = useState("");
  const [price, setPrice] = useState("");
  const [qtd, setQtd] = useState("");
  const [src, setSrc] = useState("");
  const [product, setProduct] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        // Recuperando o token
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        // Solicitando os detalhes do produto atual
        const response = await api.get(`/products/${id}`, config);

        setProduct(response.data);
        setCode(response.data.code);
      } catch (error) {
        console.error("Erro ao buscar os detalhes do produto:", error);
      }
    }

    fetchProductDetails();
  }, [id, navigate]);

  // Função para atualizar o produto
  async function handleUpdateProduct() {
    try {
      // Recuperando o token
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Modelo da requisição
      const productData = {
        name: name !== "" ? name : product.name,
        code: code !== "" ? code : product.code,
        src: src !== "" ? src : product.src,
        price: price !== "" ? parseFloat(price) : product.price,
        qtd: qtd !== "" ? qtd : product.qtd,
        expDate: expDate !== "" ? expDate : product.expDate,
      };
      

      // Fazendo a requisição de atualização
      await api.put(`/product`, productData, config);

      toast.dark(`Product successfully updated`);

      setTimeout(() => {
        navigate(`/products/${id}`);
      }, 3000);
    } catch (error) {
      console.error("Error updating product:", error);
      toast.dark("Error updating product");
    }
  }

  // Criando a página de edição de produtos
  return (
    <Container>
      <Header />

      <main>
        {product && (
          <Form>
            <header>
              <h1>Edit Product</h1>
              <Link to={`/products/${id}`}>Back</Link>
            </header>

            <Input
              placeholder={product.name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder={product.code}
              disabled={product}
            />
            <Textarea
              placeholder="Expiration date (YYYY-MM-DD)"
              onChange={(e) => setExpDate(e.target.value)}
            />

            <div>
              <h2>Value and Image of product</h2>
              <article>
                <Input
                  placeholder={product.price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <Input
                  placeholder={product.qtd}
                  onChange={(e) => setQtd(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder={product.src}
                  onChange={(e) => setSrc(e.target.value)}
                />
              </article>
            </div>

            <Button title="Save" onClick={handleUpdateProduct} />
          </Form>
        )}
      </main>
      <ToastContainer />
    </Container>
  );
}
