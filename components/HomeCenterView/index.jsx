import React from "react";
import HomCen from "../../Asstes/style/home_centerView.module.css";
import { useState } from "react";
import Fuelmangment from "./fuelmangment";
import StockReport from "../StockReport";
import { useSelector } from "react-redux";

const HomeCenterView = () => {
  const componentState = useSelector(
    (state) => state.allGernalFunction.componentState
  );
  return (
    <>
      <div className={HomCen.main_container}>
        {componentState == 1 ? (
          <Fuelmangment />
        ) : componentState == 2 ? (
          <StockReport />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default HomeCenterView;
