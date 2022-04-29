import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const RecipeCard = ({recipe})=>{
	const [icon, setIcon] = useState();
	const router = useRouter();
	

	useEffect(() => {
		let storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
		
		if(storedFavorites.indexOf(recipe.id) === -1){
			setIcon(<i className="fa fa-heart-o" aria-hidden="true" onClick={favorHandler}></i>)
		}else{
			setIcon(<i className="fa fa-heart" aria-hidden="true" onClick={favorHandler} ></i>)
		}
	}, [icon])

	const favorHandler = ()=>{
		let storedFavorites = JSON.parse(localStorage.getItem('favorites'));
		let store;
		if(!storedFavorites){
			localStorage.setItem('favorites', JSON.stringify([recipe.id]));
		}
		if(storedFavorites.indexOf(recipe.id) === -1){
			store = [...storedFavorites];
			store.push(recipe.id);
		}else{
			store = storedFavorites.filter(id => id !== recipe.id);
		}

		localStorage.setItem('favorites', JSON.stringify(store));
	}
	
	const singleHandler = () =>{
		router.push(`/recipe/${recipe.id}`);
	}
	return (
		<div className="recipe-card">
			{/* {icon} */}
            <img src={recipe.image_url} onClick={singleHandler} />

            {/* <span className="tag">26 April, 2022</span> */}

			<h3  onClick={singleHandler}>{recipe.name}</h3>

            <p className="truncate">{recipe.description}</p>

			<Link href={`/recipe/${recipe.id}`}>Read More</Link>
		</div>
	)
}

export default RecipeCard;