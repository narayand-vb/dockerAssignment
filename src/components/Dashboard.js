import React from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Dashboard = () => {
  const data = useSelector((state) => state.products.bots);

  const dispatch = useDispatch();

  const onclickHandler = (id) => {
    dispatch({
      type: "cartInc",
      id: id,
    });
  };

  return (
    <>
      <div className="container">
        <p className="dash-heading">
          Select the Best Algo Suited for your needs
        </p>
        {data.map((d) => {
          const id = d.id;
          const path = "/bots-details/" + id;
          return (
            <>
              <div className="dash-container">
                <p className="botName fWeight-1000">{d.bot}</p>
                <div className="indexValue-container value">
                  <p>index value</p>
                  <p className="fWeight-1000">{d.index_value}</p>
                </div>
                <div className="cagr-container value">
                  <p>CAGR</p>
                  <p className="fWeight-1000 cgmr-value">{d.cagr}</p>
                </div>
                <div className="dash-buttons">
                  <Link className="link-seemore" exact to={path}>
                    View Algo
                  </Link>
                  <button
                    className="dash-buybtn btn"
                    onClick={() => onclickHandler(id)}
                  >
                    Buy
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Dashboard;
