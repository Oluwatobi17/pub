import { useState, useEffect } from 'react';


const RecipeInfo = ({beer_info}) =>{
    const [icon, setIcon] = useState();

    useEffect(() => {
		let storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
		
        let beer = storedFavorites.find(beer => beer.id == beer_info.id);
		if(!beer){
			setIcon(<i className="fa fa-heart-o" aria-hidden="true" onClick={favorHandler}></i>)
		}else{
			setIcon(<i className="fa fa-heart" aria-hidden="true" onClick={favorHandler} ></i>)
		}
	}, [icon])

    const favorHandler = ()=>{
		let storedFavorites = JSON.parse(localStorage.getItem('favorites'));
		let store;
		if(!storedFavorites){
			localStorage.setItem('favorites', JSON.stringify([beer_info]));
            return;
		}

        let beer = storedFavorites.find(beer => beer.id == beer_info.id);
        
		if(beer){
			store = storedFavorites.filter(beer => beer.id !== beer_info.id);
		}else{
            store = [...storedFavorites];
			store.push(beer_info);
		}

		localStorage.setItem('favorites', JSON.stringify(store));
	}

    return (<>
        <div style={{textAlign: 'center'}}>
            <img src={beer_info.image_url} />
        </div>
        
        <div className="personal-info">
            <p>
                <i className="fa fa-user" aria-hidden="true"></i>
                By {beer_info.contributed_by}
            </p>

            <p>
                <i className="fa fa-clock-o cursor" aria-hidden="true"></i>
                Brewed Date: {beer_info.first_brewed}
            </p>
            <p>
                {icon}
            </p>
            
        </div>

        <h1>{beer_info.name}</h1>

        <p className="recipe-summary">
            {beer_info.description}
        </p>

        <blockquote>
            <i className="fa fa-quote-left special" aria-hidden="true"></i>
            {beer_info.brewers_tips}
        </blockquote>
    </>
    );
};

export default RecipeInfo;