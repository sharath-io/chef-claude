export default function IngredientsList(props) {

  const ingredientsListItems = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
  
  <section>
      <div>
        <h1>Ingredients on hand : </h1>
        <ul>{ingredientsListItems}</ul>
      </div>

      {props.ingredients.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h1>Ready for a recipe</h1>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.getRecipe}>Get a recipe</button>
        </div>
      )}
    </section>
    
  );
}
