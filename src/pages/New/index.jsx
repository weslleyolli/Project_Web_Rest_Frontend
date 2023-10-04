import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import setAuthToken from '../../services/token';

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { TagItem } from "../../components/TagItem";

import { Section } from "../../components/Section";

import { Container, Form } from "./styles";
// import { useEffect } from "react";

export function New() {
  const [name, setName] = useState("");
  const [expDate, setExpDate] = useState("");
  const [price, setPrice] = useState("");
  const [qtd, setQtd] = useState("");
  const [src, setSrc] = useState("");
  const [tags, setTags] = useState([]);
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  function handleRemoveTags(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  function handleAddTags() {
    setTags((prevState) => [...prevState, category]);
    setCategory("");
  }

  async function handleNewNote() {
    if (!name || !src || !price || !qtd || !expDate) {
        return alert("Please, fill in all fields");
    }

    // Recuperando o token
    const token = localStorage.getItem('token');

    if(token){
        setAuthToken(token);
    }else{
        alert('Token not found');
        navigate('/')
        return;
    }

    const productData = {
        name,
        src,
        price: parseFloat(price).toFixed(2),
        qtd,
        category,
        expDate
    }

    try {
        // Fazendo a requisição
        await api.post("/product", productData);
        alert("Product Created");
        navigate(-1);
    } catch (err) {
        console.error(err);
        alert('Erro ao criar o produto.')
    }
  }

//   useEffect(() => {
//     const token = localStorage.getItem('token');

//     if (token){
//         setAuthToken(token);
//     }
//   }, []);

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
          <Textarea
            placeholder="Expiration date (YYYY-MM-DD)"
            onChange={(e) => setExpDate(e.target.value)}
          />

          <div>
            <h2>Value and Image of product</h2>
            <div>{src && <img src={src} alt="Product" />}</div>
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
              {tags.map((tag, index) => (
                <TagItem
                  key={String(index)}
                  value={category}
                  onClick={() => handleRemoveTags(tag)}
                />
              ))}
              <TagItem
                isNew
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
    </Container>
  );
}
