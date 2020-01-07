import React from 'react';
import { Card} from 'react-bootstrap';

const Recipe = ({title, calories, image, ingredients, changeTry}) => {

    console.log(changeTry)

    return (
        <div>
            <Card style={{width: '20rem', margin: '10px'}}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}, {Math.floor(calories)}kcal</Card.Title>
                    <Card.Text>
                    {ingredients.map(ingredient => <p>{ingredient.text}</p>)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Recipe;