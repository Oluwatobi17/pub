import ProductCard from '../components/ProductCard';
import ExtraCard from '../components/ExtraCard';

//<ProductCard title='Our Latest Recipe' recipes={props.recipes} />
const home = (props) =>{
	return <>
		<ProductCard recipes={props.recipes} title='Our Latest Recipes' />
		<ExtraCard randomrecipe={props.random} title='Popular Recipes'/>
	</>
}

export const getStaticProps = async () =>{
	let res = await fetch('https://api.punkapi.com/v2/beers');
	const recipes = await res.json();

	let random_res = await fetch('https://api.punkapi.com/v2/beers?page=20&per_page=4');
	const random = await random_res.json();
	
	return {
		props: {
			recipes,
			random
		},
		revalidate: 1
	}
};

export default home;