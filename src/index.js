import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {CardGroup,Card,Button,ButtonToolbar,ListGroup,ListGroupItem} from 'react-bootstrap';
//create the main class for displaying the recipes

export default class Recipe extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			recipes: [
			{name:"BLT", ingredients: ["2 slices of bread", "2 tomato slices","3 strips of bacon","1 wedge of iceberg lettuce","1 tbsp of mayo"]},{name: "French Toast", ingredients: ["4 slices of Italian bread","4 Eggs","1 cup milk","1/2 tbsp nutmeg","1/2 tbsp cinnamon"]}
			]
		};
	}
	render() {
    const recipes = this.state.recipes;
    return(
      <div className="Main">
        <h1>RECIPE BOX</h1>
        <CardGroup accordion id="recipes">
          {recipes.map((recipe, index) => (
            <Card eventKey={index} key={index}>
              <Card.Header>
                <Card.Title className="title" toggle>{recipe.name}</Card.Title>
              </Card.Header>
              <Card.Body collapsible>
                <ListGroup>
                  {recipe.ingredients.map((ingredient, index) => (
                    <ListGroupItem key={index}>{ingredient}</ListGroupItem>
                  ))}
                </ListGroup>
                <ButtonToolbar>
                  <Button bsStyle="warning">Edit</Button>
                  <Button bsStyle="danger">Delete</Button>
                </ButtonToolbar>
              </Card.Body>
            </Card>
          ))}
        </CardGroup>
        <Button bsStyle="primary">Add Recipe</Button>
      </div>
    );
  }
};

ReactDOM.render(<Recipe />, document.getElementById('app'));