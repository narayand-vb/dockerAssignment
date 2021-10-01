import React from "react";
import "./cart.css";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const data = useSelector((state) => state.products.bots);
  const inCartId = useSelector((state) => state.cart);

  const dispatch = useDispatch();

    //  Delete the item from cart  //
  const deleteHandler = (index) => {
    dispatch({
      type: "cartDel",
      index: index,
    });
  };

  return (
    <>
      <div className="container">
        {/*   Only show the items which are added in the cart   */}
        {inCartId
          .map((el) => {
            return data.filter((fel) => {
              if (fel.id === el) return fel;
            });
          })
          .map((d, index) => {
            const id = d[0].id;
            console.log(id);

            return (
              <>
                <div className="dash-container">
                  <p className="botName fWeight-1000">{d[0].bot}</p>
                  <div className="indexValue-container value">
                    <p>index value</p>
                    <p className="fWeight-1000">{d[0].index_value}</p>
                  </div>
                  <div className="cagr-container value">
                    <p>CAGR</p>
                    <p className="fWeight-1000 cgmr-value">{d[0].cagr}</p>
                  </div>
                  <button
                    className="del-btn btn"
                    onClick={() => deleteHandler(index)}
                  >
                    Delete
                  </button>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Cart;
