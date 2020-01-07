import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import './App.css';

const App = () => {

  const APP_ID = 'a1cb08b6';
  const APP_KEY = '85df4e83ea0e40797c49b661eb2219b4';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('beef');

  useEffect( () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = event => {
    setSearch(event.target.value);
  }

  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className="App">
      <Container className="pt-5 d-flex justify-content-center">
        <Row>
        <Col>
          <InputGroup className="mb-3">
            <FormControl
            placeholder="Search for meal"
            value={search}
            onChange={updateSearch}
            />
            <InputGroup.Append>
              <Button
              variant="outline-secondary"
              type="submit"
              onClick={getSearch}>
                Search
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row>
        {recipes.map(recipe => (
          <Col> 
            <Recipe 
            key = {recipe.recipe.label}
            title = {recipe.recipe.label}
            calories = {recipe.recipe.calories}
            image = {recipe.recipe.image}
            ingredients = {recipe.recipe.ingredients}
            changeTry
            />
          </Col>
        ))}
        </Row>
      </Container>
    </div>
  )
}

export default App;
