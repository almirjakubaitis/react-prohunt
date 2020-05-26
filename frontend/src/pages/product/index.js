import React, { Component } from 'react';
import api from '../../services/api'
import { Link } from 'react-router-dom';

import './styles.css';

export default class Product extends Component {
    state = {
        product: {}
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/products/${id}`);

        this.setState ({ product: response.data });
        // console.log(response);
    }

    render () {
        const { product } = this.state;
       

     return (
         <div className='product-info'>
             <h1>{product.title}</h1>
             <p>{product.description}</p>

             <p>
                 Website: <a href={product.url}>{product.title}</a>
             </p>

            <br />
             <article>
            <Link to = '/' >

            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z">
            </path></svg>
            <li>Voltar a Home</li>
            
            </Link>

            </article>
         </div>
     );
 }
}