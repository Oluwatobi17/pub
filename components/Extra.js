import { useRouter } from "next/router";

const Extra = ({recipe}) =>{

	const router = useRouter();
	const singleHandler = () =>{
		router.push(`/recipe/${recipe.id}`);
	}

	return <>
        <div className="extra" onClick={singleHandler}>
			<img src={recipe.image_url} />

			<div className='extra-info'>
				<h2>{recipe.name}</h2>

                <p className='truncate'>{recipe.description}</p>

                <small>By {recipe.contributed_by} - {recipe.first_brewed}</small>
			</div>
		</div>
	</>
}

export default Extra;