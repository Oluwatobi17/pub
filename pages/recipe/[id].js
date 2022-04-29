import { useState, useEffect } from 'react';
import Head from 'next/head';

import RecipeInfo from '../../components/RecipeInfo';
import DishType from '../../components/DishType';
import SimilarRecipe from '../../components/SimilarRecipe';
import ExtraCard from '../../components/ExtraCard';

const RecipeDetails = (props) =>{
	const [ingredients, setIngredients] = useState([]);

	useEffect(()=>{
		let list = Object.keys(props.beer_info.ingredients);
		setIngredients(list);
	}, []);

    return <div className='recipe-details'>
		<Head>
			<title>{props.name}</title>
		</Head>

        <div className='recipe-info'>
            <RecipeInfo beer_info={props.beer_info} />
        </div>

        <div className='sidebar'>
            <DishType ingredients={ingredients} />
            <SimilarRecipe similarBeer={props.similarBeer}/>
        </div>
        <div style={{width: '100%'}}>
            <ExtraCard title='Popular Recipe' randomrecipe={props.random} />
        </div>
    </div>
};

export const getStaticPaths = async () =>{
    let res = await fetch('https://api.punkapi.com/v2/beers');
	const beers = await res.json();
    //const beers_ids = beers.map(beer => { 'params': { 'id' : beer.id } });

	const paths = beers.map((beer) => ({
		params: { id: beer.id.toString() },
	}));
	

    return {
        paths,
		fallback: true
    }
}

export const getStaticProps = async (context) =>{
	const { id } = context.params;
	
	let beer_info = [];
	let res = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
	beer_info = await res.json();

	let random_res = await fetch('https://api.punkapi.com/v2/beers?page=30&per_page=4');
	const random = await random_res.json();

	let resMore = await fetch('https://api.punkapi.com/v2/beers?page=20&per_page=4');
	const similarBeer = await resMore.json();

	return {
		props: {
			random,
			beer_info: beer_info[0],
			similarBeer
		},
		revalidate: 1
	}
};

export default RecipeDetails;