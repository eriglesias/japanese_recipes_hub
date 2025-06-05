import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './pages/RecipeList';
import RecipeDetail from './pages/RecipeDetail';
import  mockRecipes  from './data/mockRecipes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route
          path="/recipe/:id"
          element={<RecipeDetail mockRecipes={mockRecipes} />}
        />
      </Routes>
    </Router>
  );
}

export default App;