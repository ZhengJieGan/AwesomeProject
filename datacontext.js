import React, {useContext, useState, useCallback} from 'react';

const DataContext = React.createContext({
  cart: [{}],
  amountArray: [],
  title: '',
  keys: 0,
  onIncrement: () => {},
  onDecrement: () => {},
  onCartAddItem: () => {},
  onCartRemoveItem: () => {},
  onSetItemTitle: (title, key) => {},
});

export const DataContextProvider = props => {
  const [title, setTitle] = useState('');
  const [key, setKey] = useState(0);
  var [cart, setCart] = useState([]);
  const [amountArray, setAmountArray] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  const setItemTitle = (title, key) => {
    setTitle(title);
    setKey(key);
  };

  const IncrementHandler = () => {
    setAmountArray(amountArray => {
      return [
        ...amountArray.slice(0, key - 1),
        amountArray[key - 1] + 1,
        ...amountArray.slice(key),
      ];
    });
    //console.log(key);
  };

  const DecrementHandler = () => {
    if (amountArray[key - 1] == 0) {
      //do nothing
    } else {
      setAmountArray(amountArray => {
        return [
          ...amountArray.slice(0, key - 1),
          amountArray[key - 1] - 1,
          ...amountArray.slice(key),
        ];
      });
    }
  };

  const CartAddItem = () => {
    setItemTitle();

    const checkItem = obj => obj.key === key;

    //if the item already exist in the cart, only plus or minus the amount
    if (cart.some(checkItem)) {
    } else {
      if (amountArray[key - 1] == 0) {
      } else {
        setCart([
          ...cart,
          {key: key, title: title, amount: amountArray[key - 1]},
        ]);
      }
    }
    console.log(cart);
  };

  var removeByAttr = function (arr, attr, value) {
    var i = arr.length;
    while (i--) {
      if (
        arr[i] &&
        arr[i].hasOwnProperty(attr) &&
        arguments.length > 2 &&
        arr[i][attr] === value
      ) {
        arr.splice(i, 1);
      }
    }
    return arr;
  };

  const CartRemoveItem = () => {
    removeByAttr(cart, 'key', key);
    setItemTitle();
    console.log(cart);
    console.log(amountArray);
  };

  return (
    <DataContext.Provider
      value={{
        keys: key,
        cart: cart,
        amountArray: amountArray,
        title: title,
        onSetItemTitle: setItemTitle,
        onIncrement: IncrementHandler,
        onDecrement: DecrementHandler,
        onCartAddItem: CartAddItem,
        onCartRemoveItem: CartRemoveItem,
      }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;
