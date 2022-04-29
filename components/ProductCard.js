import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import RecipeCard from './RecipeCard';

const ProductCard = ({title, recipes})=>{
	const [recipesState, setRecipesState] = useState([]);
	const [loading, setLoading] = useState(false);
	const [page_no, setPage_no] = useState(2);
	
	const router = useRouter();

	useEffect(()=>{
		if(router.pathname === '/favorites' && recipes.length===0){
			let store = JSON.parse(localStorage.getItem('favorites')) || [];
			setRecipesState(store);
		}else{
			localStorage.setItem('storedRecipes', JSON.stringify(recipes));
			setRecipesState(recipes);
		}
	}, []);

	// useEffect(()=>{
	// 	//if(recipes.length>0 )
	// }, []);

	const loadMoreHandler = async () =>{
		setLoading(true);
		const storedRecipes = JSON.parse(localStorage.getItem('storedRecipes'));
		const store_size = storedRecipes.length;
		
		let url = 'https://api.punkapi.com/v2/beers?page=' +page_no+ '&per_page=6';
		let res = await fetch(url);
		setPage_no(prev => prev + 1);
		const response = await res.json();

		storedRecipes = [...storedRecipes, ...response];

		localStorage.setItem('storedRecipes', JSON.stringify(storedRecipes));
		setRecipesState(storedRecipes);
		setLoading(false);
	}
	return (
		<div className='product-card'>
			<h1>{title}</h1>

			<div className='recipe-container'>
				{recipesState.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
			</div>

			{ router.pathname !== '/favorites' ?
				<button 
					disabled={loading}
					onClick={loadMoreHandler}>{loading ? 'Loading...' : 'Load More'}
				</button> : ''
			}
		</div>
	)
}

export default ProductCard;