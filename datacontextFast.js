import React, {useContext, useState, useCallback, useReducer} from 'react';
import DataContextHealthy from './datacontextHealthy';

const DataContextFast = React.createContext({
  cart: [{}],
  amountArray: [],
  title: '',
  price: 0,
  keys: 0,
  total: 0,
  onIncrement: () => {},
  onDecrement: () => {},
  onCartAddItem: () => {},
  onCartRemoveItem: () => {},
  onSetItemTitle: (title, key) => {},
});

export const DataContextFastProvider = props => {
  //const ctx = useContext(DataContextHealthy);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [key, setKey] = useState(0);
  const [total, setTotal] = useState(0);
  var [cart, setCart] = useState([]);
  const [amountArray, setAmountArray] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  const setItemTitle = (title, key, price) => {
    setTitle(title);
    setKey(key);
    setPrice(price);
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
      //if plus amount, increase the total number in amountArray (exist)
      const updatedCart = cart.map(p =>
        p.key === key ? {...p, amount: amountArray[key - 1]} : p,
      );
      setCart(updatedCart);
      setTotal(price * amountArray[key - 1]);
      //console.log(amountArray);
    } else {
      //add new item into cart (not exist)
      if (amountArray[key - 1] == 0) {
      } else {
        setCart([
          ...cart,
          {key: key, title: title, amount: amountArray[key - 1], price: price},
        ]);
      }
    }
    setTotal(total + price * amountArray[key - 1]);
    //console.log(total);
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
    <DataContextFast.Provider
      value={{
        keys: key,
        price: price,
        cart: cart,
        amountArray: amountArray,
        title: title,
        total: total,
        onSetItemTitle: setItemTitle,
        onIncrement: IncrementHandler,
        onDecrement: DecrementHandler,
        onCartAddItem: CartAddItem,
        onCartRemoveItem: CartRemoveItem,
      }}>
      {props.children}
    </DataContextFast.Provider>
  );
};

export default DataContextFast;
