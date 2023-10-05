import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import setAuthToken from "../../services/token";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { TagItem } from "../../components/TagItem";

import { Section } from "../../components/Section";

import { Container, Form } from "./styles";
import { toast, ToastContainer } from "react-toastify";

export function New() {
  const [name, setName] = useState("");
  const [expDate, setExpDate] = useState("");
  const [price, setPrice] = useState("");
  const [qtd, setQtd] = useState("");
  const [src, setSrc] = useState("");
  const [category, setCategory] = useState("");
  const [code, setCode] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const navigate = useNavigate();

  function handleRemoveTags(deleted) {
    setSelectedTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  function handleAddTags() {
    setSelectedTags((prevState) => [...prevState, category]);
    setCategory("");
  }

  // Verificando se há campos vazios
  async function handleNewNote() {
    if (!name || !src || !price || !qtd || !expDate) {
      return alert("Please, fill in all fields");
    }

    // Recuperando o token
    const token = localStorage.getItem("token");

    if (token) {
      setAuthToken(token);
    } else {
      alert("Token not found");
      navigate("/");
      return;
    }

    // Modelo da requisição
    const productData = {
      name,
      src,
      code,
      price: parseFloat(price),
      qtd,
      category: selectedTags,
      expDate,
    };

    // Fazendo a requisição
    try {
      // Passando o token
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Fazendo a requisição
      await api.post("/product", productData, config);
      toast.dark("Product successfully created");

      setTimeout(() => {
        navigate(-1);
      }, 3000);
    } catch (err) {
      console.error(err);
      toast.dark("Error creating product");
    }
  }

  // Criando a página de produtos
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Create Product</h1>
            <Link to="/home">back</Link>
          </header>

          <Input
            placeholder="Product name"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Product code"
            onChange={(e) => setCode(e.target.value)}
          />
          <Textarea
            placeholder="Expiration date (YYYY-MM-DD)"
            onChange={(e) => setExpDate(e.target.value)}
          />

          <div>
            <h2>Value and Image of product</h2>
            {/* <div>{src && <img src={src} alt="Product" />}</div> */}
            <article>
              <Input
                placeholder="$ Price"
                onChange={(e) => setPrice(e.target.value)}
              />
              <Input
                placeholder="Qty"
                onChange={(e) => setQtd(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Image URL"
                onChange={(e) => setSrc(e.target.value)}
              />
            </article>
          </div>

          <Section title="Type of Product">
            <div className="tags">
              {selectedTags.map((tag, index) => (
                <TagItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTags(tag)}
                />
              ))}
              <TagItem
                isNew={true}
                placeholder="Category"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                onClick={handleAddTags}
              />
            </div>
          </Section>

          <Button title="Save" onClick={handleNewNote} />
        </Form>
      </main>
      <ToastContainer />
    </Container>
  );
}
