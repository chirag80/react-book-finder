import React, { useEffect, useState } from "react";
import "./App.css";
import BookList from "./components/BookList";
import Search from "./components/Search";
import "semantic-ui-css/semantic.min.css";
import { Container, Header } from "semantic-ui-react";
import axios from "axios";
import { API_URL, MAX_RESULTS } from "./util/util";

function App() {
  const [books, setBooks] = useState([]);
  const [searchText, setSearchText] = useState("aws");
  const [sortOption, setSortOption] = useState("relevance");

  const getBooks = async () => {
    console.log(
      `${API_URL}${searchText}&maxResults=${MAX_RESULTS}&orderBy=${sortOption}`
    );
    const res = await axios.get(
      `${API_URL}${searchText}&maxResults=${MAX_RESULTS}&orderBy=${sortOption}`
    );
    console.log(res.data.items);
    setBooks(res.data.items);
  };

  useEffect(() => {
    getBooks();
  }, [searchText, sortOption]);

  const onSubmit = searchText => {
    setSearchText(searchText);
  };

  const handleOptionChange = selectedSortOption => {
    setSortOption(selectedSortOption);
  };

  return (
    <>
      <Container>
        <br />
        <Header textAlign='center' as='h3'>
          Book finder react app using Google Books API 😊
        </Header>
        <Search onSubmit={onSubmit} handleOptionChange={handleOptionChange} />
        <BookList books={books} />
      </Container>
    </>
  );
}

export default App;
