import React, { Component } from 'react';
import { Link } from "react-router";
import '../styles/Item.css';

export default class Item extends Component {
    render(){
        let item = this.props.data;
        return(
            <Link to={`/items/${item.id}`}>
                <div id={item.id} className="item">
                    <div className="item__image">
                        <figure>
                            <img src={item.picture} alt="item"/>
                        </figure>
                    </div>

                    <div className="item__info">
                        <div className="item__price">
                            <span className="symbol">{item.price.currency}</span>
                            <span className="amount">{item.price.amount}</span>
                            {item.price.decimals && <span className="decimals">{item.price.decimals}</span>}
                            {item.free_shipping &&
                                <span className="shipping">
                                    <img src="http://localhost:3000/img/ic_shipping.png" 
                                         srcSet="http://localhost:3000/img/ic_shipping.png 1x, http://localhost:3000/img/ic_shipping@2x.png 2x"alt="free shipping logo"/>
                                </span>
                            }
                        </div>
                        <div className="item__title">
                            {item.title}
                        </div>
                    </div>
                    <div className="item__location">
                        {item.address}
                    </div>
                </div>
            </Link>
        );
    }
}