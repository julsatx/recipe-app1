import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {PanelGroup,Panel,Button,ButtonToolbar,ListGroup,ListGroupItem} from 'react-bootstrap';
//create the main class for displaying the recipes

class Recipe extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recipes: [
			{name:"BLT", ingredients: ["2 slices of bread", "2 tomato slices","3 strips of bacon","1 wedge of iceberg lettuce","1 tbsp of mayo"]}
			]
		}
	}
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
