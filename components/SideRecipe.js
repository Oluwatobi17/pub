import Link from "next/link";

const SideRecipe = ({recipe}) =>{
	return <>
        <div className="siderecipe">
			<img src={recipe.image_url} />

			<div className='siderecipe-info'>
				<h3>{recipe.name}</h3>

                <Link href={`/recipe/${recipe.id}`}>Read</Link>
			</div>
		</div>
	</>
}

export default SideRecipe;