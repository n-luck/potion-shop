import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                  title: 'healing potions',
                  imageUrl: 'https://i.imgur.com/78bkRtN.png',
                  id: 1,
                  linkUrl: 'shop/healingpotions'
                },
                {
                  title: 'poisons',
                  imageUrl: 'https://i.imgur.com/ZKVeNxn.png',
                  id: 2,
                  linkUrl: 'shop/poisons'
                },
                {
                  title: 'magic potions',
                  imageUrl: 'https://i.imgur.com/IFfYLuX.png',
                  id: 3,
                  linkUrl: 'shop/magicpotions'
                },
                {
                  title: 'scrolls',
                  imageUrl: 'https://i.imgur.com/m13IZsw.jpg',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/scrolls'
                },
                {
                  title: 'wondrous items',
                  imageUrl: 'https://i.imgur.com/hsq4LHt.jpg',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/wondrousitems'
                }
              ]
              
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        );
    }
}

export default Directory;