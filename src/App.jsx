import './styles/App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './pages/RecipeList';
import RecipeDetail from './pages/RecipeDetail';
import FavoritesList from './pages/FavoritesList';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetch('http://localhost:3005/recipes').then(r => r.json()),
      fetch('http://localhost:3005/recipes/favorites').then(r => r.json())
    ])
      .then(([recipeData, favoriteData]) => {
        setRecipes(recipeData);
        setFavorites(favoriteData.map(recipe => recipe.id));
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const toggleFavorite = (id) => {
    fetch('http://localhost:3005/recipes/favorites', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    })
      .then(r => {
        if (!r.ok) throw new Error('Failed to update');
        return r.json();
      })
      .then(data => setFavorites(data.favorites))
      .catch(error => console.error('Error:', error));
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList recipes={recipes} favorites={favorites} toggleFavorite={toggleFavorite} />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/favorites" element={<FavoritesList favorites={favorites} toggleFavorite={toggleFavorite} recipes={recipes} />} />
      </Routes>
    </Router>
  );
};

export default App;