import styles from '../styles/RecipeCard.module.css';
import { Link } from 'react-router-dom';
import RecipeTitle from './RecipeTitle';
import RecipeImage from './RecipeImage';
import RecipeTags from './RecipeTags';

const RecipeCard = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.id}`} className={styles.recipe_card}>
      <RecipeTitle name={recipe.name} name_jap={recipe.name_jap} />
      <RecipeImage src={recipe.image} alt={recipe.name}/>
      <div>
        <p> Region: {recipe.region}</p>
        <p> Prep: {recipe.prepTime}m, Cook: {recipe.cookTime}m, Serves: {recipe.servings}</p>
        <p> Difficulty: {recipe.difficulty}</p>
      </div>
      <RecipeTags tags={recipe.tags} />
    </Link>
  );
};

export default RecipeCard


/* import RecipeTags */

