import React, { Component } from 'react';
import '../styles/Vip.css';
import SearchBar from './SearchBar';
import { wrapperUrls } from '../config/client.config';
import BreadcrumbContainer from '../containers/BreadcrumbContainer';
import Loading from './Loading';

export default class Vip extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: ''
        }
    }

    componentDidMount() {
        fetch(wrapperUrls.getItem(this.props.params.id))
            .then(response => {
                if(response.ok){
                    response.json().then(data => {
                        this.setState({item: data.item});
                    })
                }
        });
    }

    render(){
        let item = this.state.item;
        return(
            <div>
                <SearchBar static={'No dejes de buscar'}/>

                {!this.state.item &&
                    <Loading />
                }

                {this.state.item &&
                    <div className="vip">
                        <BreadcrumbContainer />
                        <div className="vip-item">
                            <div className="column-1">
                                <div className="vip-item__image">
                                    <img src={item.picture.secure_url ? item.picture.secure_url : item.picture.url } alt="product"/>
                                </div>
                                <div className="vip-item__description">
                                    <div className="header">Descripción del producto</div>
                                    <div className="content">{item.description}</div>
                                </div>
                            </div>
                            <div className="column-2">
                                <div className="vip-item__info">
                                    <div className="condition">
                                        {item.condition} - {item.sold_quantity > 1 ? `${item.sold_quantity} vendidos` : `${item.sold_quantity} vendido`}
                                    </div>
                                    <h1 className="title">{item.title}</h1>
                                    <div className="price">
                                        <span className="symbol">{item.price.currency}</span>
                                        <span className="amount">{item.price.amount}</span>
                                        {item.price.decimals && <span className="decimals">{item.price.decimals}</span>}
                                    </div>
                                    <button>Comprar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}