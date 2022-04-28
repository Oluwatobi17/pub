const DishType = (props) =>{
    return <div className="dish-type">
        <h2>Ingredients</h2>

        <div className="dishes">
            {props.ingredients.map(ingredient => <span key={ingredient}>{ingredient}</span>)}
        </div>
    </div>
};

export default DishType;