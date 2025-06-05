import styles from '../styles/RecipeDetail.module.css';
import { useParams } from 'react-router-dom';
import RecipeTitle from '../components/RecipeTitle';
import RecipeImage from '../components/RecipeImage';
import RecipeTags from '../components/RecipeTags';
import { Link } from 'react-router-dom';




const RecipeDetail = ( {mockRecipes}) => {
  console.log('mockRecipes:', mockRecipes)
  const { id } = useParams();
  console.log('id', id)
  const recipe = mockRecipes.find(recipe => recipe.id === parseInt(id)); // This will cause an error without import

  if (!recipe) {
    console.log('Recipe not found for id:', id);
    return <div>Recipe not found</div>;
  }

  return (
    <div className={styles.recipe_detail}>
      <Link to="/" className={styles.back_link}>Back to Recipes</Link>
      <RecipeTitle name={recipe.name} name_jap={recipe.name_jap}/>
      <RecipeImage src={recipe.image} alt={recipe.name} />
      <div>
        <p>Region: {recipe.region}</p>
        <p>Serves: {recipe.servings}</p>
        <p>Prep: {recipe.prepTime}m</p>
        <p>Cook: {recipe.cookTime}m</p>
        <p>Difficulty: {recipe.difficulty}</p>
      </div>
      <div>
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.amount} {ingredient.name} {ingredient.note && `(${ingredient.note})`}
            </li>
          ))}
        </ul>
        <h2>Instructions</h2>
        <ul>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>
              Step {instruction.step}: {instruction.description}
            </li>
          ))}
        </ul>
      </div>
      <RecipeTags tags={recipe.tags} />
    </div>
  );
};

export default RecipeDetail;