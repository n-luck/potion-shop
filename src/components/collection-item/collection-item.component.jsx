import React from "react";
import {Link} from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
import {connect} from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import "./collection-item.styles.scss";

const CollectionItem = ({item, addItem}) => {
    const {id, pdpUrl, name, price, rarity, type, effects, currency, imageUrl} = item;
    return (
        <div className="collection-item" key={id} item={item}>
            <Link to={{pathname: `/pdp/${pdpUrl}`, state: {item, id, name, price, rarity, type, effects, currency, imageUrl}}} className="pdp-link">
                <div className="image" style={{backgroundImage: `url(${imageUrl})`}} />
                <div className="collection-footer">
                    <span className="name">{name}</span>
                    <span className="price">{price} {currency}</span>
                </div>
            </Link>
            <CustomButton onClick={() => addItem(item)} isATB>Add to bag</CustomButton>
            {console.log("Item PLP: " + item)}
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);