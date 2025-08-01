import './styles/App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './pages/RecipeList';
import RecipeDetail from './pages/RecipeDetail';
import FavoritesList from './pages/FavoritesList';

<Route path="/favorites" element={<FavoritesList favorites={favorites} toggleFavorite={toggleFavorite} />} />

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  //const [favorites, setFavorites] = useState([]);
  // TODO: Add favorites state and toggleFavorite function
  useEffect(() => {
    fetch('http://localhost:3005/recipes')
      .then(response => response.json())
      .then(data => {
        setRecipes(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
        setLoading(false);
      });
    fetch('http://localhost:3005/favorites')
     .then(r=> r.json())
     //.then(setFavorites)
     .catch(error => {
       console.error('Error fetching favorites:', error)
     })
  },[]); // Empty dependency array: fetch once on mount

  if (loading) {
    return (
      <div className="loading">
        Loading recipes...
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList recipes={recipes} />} />
        <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
      </Routes>
    </Router>
  );
};

export default App;


//  useState to create a favorites state to hold an array of IDs( [1, 2 ...])
