import React from "react";
import "./details.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


const Details = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.products.bots);
  const dispatch = useDispatch();

  const onclickHandler = () => {
    dispatch({
      type: "cartInc",
    });
  };
  return (
    <>
      {data
        .filter((e) => e.id == id)
        .map((d) => {
          return (
            <>
              <div className="container details-container">
                <div className="dash-container">
                  <div className="bot-des botName">
                    <p className=" fWeight-1000">{d.bot}</p>
                    <p>{d.description}</p>
                   
                  </div>
                  <div className="indexValue-container value">
                    <p>index value</p>
                    <p className="fWeight-1000">{d.index_value}</p>
                  </div>
                  <div className="cagr-container value">
                    <p>CAGR</p>
                    <p className="fWeight-1000 cgmr-value">{d.cagr}</p>
                  </div>
                  <div className="details-btn">
                      <p className="moderate-icon-container">MODERATE RISK </p><i class="bi bi-thermometer-half moderate-icon"></i>
                      <button className="details-buy buybtn" onClick={onclickHandler}>
                        Buy
                      </button>
                    </div>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default Details;
