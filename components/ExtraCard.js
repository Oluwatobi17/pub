import Extra from './Extra';

//<ExtraCard title='Our Latest Recipe' recipes={props.recipes} />
const ExtraCard = ({title, randomrecipe}) =>{
	return <>
        <div className="extra-card">
			<h1>{title}</h1>

			<div className='extra-container'>
				{randomrecipe.map(recipe => <Extra key={recipe.id} recipe={recipe} />)}

				{!randomrecipe && <p style={{textAlign: 'center'}}>Unable to Load</p>}
			</div>
		</div>
	</>
}

export default ExtraCard;