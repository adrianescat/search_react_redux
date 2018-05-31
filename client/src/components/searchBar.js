import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { browserHistory, Link } from 'react-router'

export default class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchValue: !!this.props.static ? this.props.static : ''
        }

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnChange(e) {  
        const newText = e.target.value;  
        this.setState({searchValue : newText});  
    }

    handleOnSubmit() {
        browserHistory.push(`/items?search=${this.state.searchValue}`);
    } 

    render(){
        return(
            <header className='header'>
                <div>
                    <div className="wrapper">
                        <Link to={'/'}>
                            <div className='header__logo'>
                                <img src="http://localhost:3000/img/Logo_ML.png"
                                    srcset="http://localhost:3000/img/Logo_ML.png 1x, http://localhost:3000/img/Logo_ML@2x.png 2x" alt="Meli logo"/>
                            </div>
                        </Link>
                        <div className='header__bar'>
                            <form onSubmit={this.handleOnSubmit}>
                                <input placeholder="Nunca dejes de buscar"
                                        className='header__input'
                                        type="text"
                                        value={this.state.searchValue}
                                        onChange={this.handleOnChange}
                                        disabled={!!this.props.static}
                                />
                                <button type="submit" disabled={!this.state.searchValue || !!this.props.static }>
                                    <img src="http://localhost:3000/img/Logo_ML.png"
                                        srcset="http://localhost:3000/img/ic_Search.png 1x, http://localhost:3000/img/ic_Search@2x.png 2x" alt="Search button"/>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}