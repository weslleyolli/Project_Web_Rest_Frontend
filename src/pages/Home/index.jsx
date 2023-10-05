import { useState, useEffect } from "react";
import { FiPlus, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Product } from "../../components/Product";
import { api } from "../../services/api";
import { ButtonText } from "../../components/ButtonText";

import {
  Container,
  Brand,
  Menu,
  Search,
  Content,
  NewNote,
  ContainerProducts,
} from "./styles";

export function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const navigate = useNavigate();

  function handleTagSelected(tagName) {
    if (tagName === "all") {
      setTagsSelected([]);
    } else {
      setTagsSelected([tagName]);
    }
  }

  function handleDetails(id) {
    navigate(`/products/${id}`);
  }

  // Categorias
  useEffect(() => {
    async function fetchProducts() {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await api.get(`/products`, config);
      setProducts(response.data);

      const allCategories = response.data.flatMap(
        (product) => product.category
      );
      const uniqueCategories = Array.from(new Set(allCategories));
      setCategories(uniqueCategories);
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    // Quando tagsSelected mudar, aplique o filtro
    let filteredProducts = products;

    // Botões das tags
    if (tagsSelected.length > 0) {
      filteredProducts = products.filter((product) =>
        product.category.includes(tagsSelected[0])
      );
    }

    // Pesquisa por nome
    if (searchTerm.trim() !== "") {
      const normalizedSearchTerm = searchTerm.trim().toLowerCase();
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(normalizedSearchTerm)
      );
    }

    setFilteredProducts(filteredProducts);
  }, [tagsSelected, searchTerm, products]);

  // Retornando o frontend
  return (
    <Container>
      <Brand>
        <h1>Supermarket</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            onClick={() => handleTagSelected("all")}
            className={tagsSelected.length === 0 ? "active" : ""}
            title="all"
            $isactive={tagsSelected.length !== 0}
          >
            All
          </ButtonText>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <ButtonText
              title={category}
              onClick={() => handleTagSelected(category)}
              className={tagsSelected.includes(category) ? "active" : ""}
              $isactive={tagsSelected.length !== 0}
            >
              {category}
            </ButtonText>
          </li>
        ))}
      </Menu>

      <Search>
        <Input
          placeholder="Search for name"
          icon={FiSearch}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="Products">
          <ContainerProducts>
            {filteredProducts.map((product) => (
              <Product
                key={String(product.name)}
                data={product}
                onClick={() => handleDetails(product.code)}
              />
            ))}
          </ContainerProducts>
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Create products
      </NewNote>
    </Container>
  );
}
