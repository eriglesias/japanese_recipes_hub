const RecipeList = ({ recipes }) => {
  return (
    <div>
      {recipes.map(recipe => 
        <RecipeCard key={recipe.id} recipe={recipe} />
      )}
    </div>
  )
}