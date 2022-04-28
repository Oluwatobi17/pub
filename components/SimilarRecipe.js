import Extra from "./Extra";
import SideRecipe from './SideRecipe';

const SimilarRecipe = ({similarBeer}) =>{
    return <div className="dish-type">
        <h2>Similar Recipe</h2>

        <div className='extra-container'>
            {similarBeer.map(beer => <SideRecipe key={beer.id} recipe={beer} />)}
        </div>
    </div>
};

export default SimilarRecipe;