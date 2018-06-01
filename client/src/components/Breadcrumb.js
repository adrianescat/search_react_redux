import React, { Component } from 'react';
import '../styles/Breadcrumb.css';

export default class Breadcrumb extends Component {
    constructor(props){
        super(props);

        this.createBreadcrumb = this.createBreadcrumb.bind(this);
    }

    createBreadcrumb(categoriesArray){
        let elements = [],
            count = categoriesArray.length;

        for (let i = 0; i < count; i++) {
            let customClass = (i + 1) === count ? 'bold' : '';

            elements.push(<span className={'breadcrumb__node '+customClass} key={`node-${i}`}>{categoriesArray[i]}</span>);
            if ((i + 1) !== count){
                elements.push(<span className="breadcrumb__separator" key={`sep-${i}`}> > </span>);
            }
        }

        return elements;
    }

    render(){
        const categories = this.props.mappedSearchState.categories;
        const breadcrumbContent = this.createBreadcrumb(categories);
        return(
            <div className="breadcrumb">
                {breadcrumbContent}
            </div>
        );
    }
}