import React, { Component } from 'react';
import Header from '../Header/Header';
import CardList from '../../components/CardList/CardList';
import Scroll from '../../components/Scroll/Scroll';
import Cursor from '../../components/Cursor/Cursor';
import ErrorBoundry from '../../components/ErrorBoundry/ErrorBoundry';
import './App.css';

class App extends Component {
    constructor() {
            super();
            this.state = {
                monsters: []
            };
        }
        
        changedSearchField = (monstersFiltered) => { this.setState({ monsters : monstersFiltered }) }


    render(){
        // We destructure for a clear syntax
        const { monsters } = this.state
        return (
            <div id="container" className='tc'>
                <Header monsters = { monsters } searching={this.changedSearchField}/>
                    <ErrorBoundry>
                        <CardList monsters={ monsters } />
                    </ErrorBoundry>
            </div>
        );
    };
    componentDidMount() {
        // We retrieve the monsters from a test API in JSON format
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response =>  response.json() )
            .then( users =>  this.setState({ monsters : users }) )
    }
}


export default App;

