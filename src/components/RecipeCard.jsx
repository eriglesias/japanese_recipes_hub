import RecipeTitle from './RecipeTitle'
import RecipeImage from './RecipeImage';


const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe_card">
      <RecipeTitle title={recipe.name} />
      <div>
        <p> Region: {recipe.region}</p>
        <p> Prep: {recipe.prepTime}m, Cook: {recipe.cookTime}m, Serves: {recipe.servings}</p>
        <p> Difficulty: {recipe.difficulty}</p>
      </div>
      <RecipeImage src={recipe.image} alt={recipe.name}/>
    </div>
  );
};

export default RecipeCard


/* import RecipeTags */

