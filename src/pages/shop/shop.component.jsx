import React from 'react';
import './shop.styles.scss';
import SHOP_DATA from '../../data/shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';


class ShopPage extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className="shoppage">
                {
                    collections.map(({id, ...otherProps}) =>
                        <CollectionPreview key={id} {...otherProps}/>    
                    )
                }
            </div>
        )
    }    
}

export default ShopPage;