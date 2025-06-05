import { useState } from 'react';
import styles from '../styles/RecipeList.module.css';
import RecipeCard from '../components/RecipeCard';
import mockRecipes from '../data/mockRecipes';

const RecipeList = () => {
  const [filterRegion, setFilterRegion] = useState('All');
  const regions = ['All', ...new Set(mockRecipes.map(recipe => recipe.region))];

  const filteredRecipes = filterRegion === 'All'
    ? mockRecipes
    : mockRecipes.filter(recipe => recipe.region === filterRegion);

  return (
    <div>
      <div className={styles.filter}>
        <label>Filter by Region: </label>
        <select value={filterRegion} onChange={(e) => setFilterRegion(e.target.value)}>
          {regions.map(region => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>
      </div>
      <div className={styles.recipe_list}>
        {filteredRecipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;