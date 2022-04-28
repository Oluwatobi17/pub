import {useState, useEffect} from 'react';
import Link from 'next/link';

import ProductCard from '../components/ProductCard';
import ExtraCard from '../components/ExtraCard';

//<ProductCard title='Our Latest Recipe' recipes={props.recipes} />
const favorites = (props) =>{
	//const [recipes, setRecipes] = useState([]);
	//const recipes = JSON.parse(localStorage.getItem('favorites'))
	// useEffect(()=>{
	// 	let storedFavorites = ;
	// 	let store = [];
	// 	let favoriteDetails = storedFavorites.map(async (id) => {
	// 		const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`)
	// 		const data = await res.json();
	// 		if(data[0]){
	// 			store.push(data[0]);
	// 		}
	// 	})

	// 	setRecipes(store);
	// }, []);

	return <>
		<ProductCard title='Your Favorites' recipes={[]}/>
			
		<ExtraCard randomrecipe={props.random} title='Popular Recipe' />
	</>
}

export const getStaticProps = async ()=>{
	let random_res = await fetch('https://api.punkapi.com/v2/beers?page=20&per_page=4');
	const random = await random_res.json();

	return {
		props: {
			random
		},
		revalidate: 1
	}
}

export default favorites;