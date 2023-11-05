import React, { Component } from 'react';
import SearchBox from '../../components/SearchBox/SearchBox';
import Title from '../../components/Title/Title';
import Logo from '../../components/Logo/Logo'
import Header_Content from '../../components/Header-Content/Header-Content.js'
import Credits from '../../components/Credits/Credits'
import './Header.css'


class Header extends Component {
        /*
         * It's important for Header to have its own monsters state
         * so we can change the App's monsters state without modifying 
         * this one, otherwise we can't recover the monsters after filtering
         */
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField : ""
        }
    }

    onSearchChange = (event) => {
        const searchField_value = event.target.value;
        const header = document.getElementById('header')
        const cardList = document.getElementById('monster-list')

        if(searchField_value)
            this.foldHeader(header, cardList, false)
        else
            this.foldHeader(header, cardList, true)

        this.setState({ searchField:searchField_value }, () => {
            // We destructure for a clear syntax
            const { monsters } = this.state;
            const filteredmonsters = monsters.filter(this.includesSearchField)
            this.props.searching(filteredmonsters)

        });
    }

    includesSearchField = (monster) => {
    let includes_field = false
        // We destructure for a clear syntax
        const { searchField } = this.state
        // We search by all the fields of the monster
        for(const field in monster){
            includes_field = monster[field]
                .toString()
                .toLowerCase()
                .includes( searchField.toLowerCase() )

            if (includes_field) return includes_field
        }

        // NOT REACHEABLE
        // Prevents bug if there are no fields on the monster
        return false;
    }
    scrollFunction = () => {
        const header = document.getElementById('header')
        const cardList = document.getElementById('monster-list')
        const is_scrolled = document.body.scrollTop > 0 || document.documentElement.scrollTop > 0
        const searchField_empty = this.state.searchField === ''

        if(!searchField_empty) {
            header.classList.add('small')
            cardList.style.marginTop = '15vh'
            return
        }

        if(is_scrolled) 
            this.foldHeader(header, cardList, false)
        
        else 
            this.foldHeader(header,cardList, true)
        
    }
    foldHeader(header, cardList, folded) {
        if (header && cardList) {
            if (folded) {
                header.classList.remove('small');
                const margin = window.innerWidth <= 700 ? '65vh' : '50vh';
                cardList.style.marginTop = margin;
                const creditsElement = document.getElementById('credits');
                if (creditsElement) {
                    creditsElement.style.display = 'block';
                }
            } else {
                header.classList.add('small');
                cardList.style.marginTop = '15vh';
                const creditsElement = document.getElementById('credits');
                if (creditsElement) {
                    creditsElement.style.display = 'none';
                }
            }
        } else {
            console.error('Header or cardList element is missing');
        }
    }

    foldOnInit() {
        const cardList = document.getElementById('monster-list');
        if (cardList) { // Check if cardList exists
            const margin = window.innerWidth <= 700 ? '65vh' : '50vh';
            cardList.style.marginTop = margin;
        }
    }
    foldOnResize() {
        const cardList = document.getElementById('monster-list');
        
        if (cardList) {
            const margin = window.innerWidth <= 700 ? '65vh' : '50vh';
            const isFolded = document.getElementById('header').classList.contains('small');
            
            if (!isFolded) {
                cardList.style.marginTop = margin;
            }
        } else {
            console.error('Card list element is missing');
        }
    }
    render() {
        return (
            <div id="header" className='mv3'>
                <Logo/>
                <Header_Content>
                    <Title/>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Credits/>
                </Header_Content>
            </div>
        );
    };

    componentDidMount() {
        // We fetch the monsters from a test api into json
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response =>  response.json() )
            .then( users =>  this.setState({ monsters : users }) )
        this.foldOnInit()
        window.onscroll = this.scrollFunction;
        window.onresize = this.foldOnResize
    }
}

export default Header;
