import styles from '../styles/RecipeCard.module.css';
import RecipeTitle from './RecipeTitle'
import RecipeImage from './RecipeImage';
import RecipeTags from './RecipeTags';

const RecipeCard = ({ recipe }) => {
  return (
    <div className={styles.recipe_card}>
      <RecipeTitle title={recipe.name} />
      <RecipeImage src={recipe.image} alt={recipe.name}/>
      <div>
        <p> Region: {recipe.region}</p>
        <p> Prep: {recipe.prepTime}m, Cook: {recipe.cookTime}m, Serves: {recipe.servings}</p>
        <p> Difficulty: {recipe.difficulty}</p>
      </div>
      <RecipeTags tags={recipe.tags} />
    </div>
  );
};

export default RecipeCard


/* import RecipeTags */

