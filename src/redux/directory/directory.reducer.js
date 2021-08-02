const INITIAL_STATE = {
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
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer;