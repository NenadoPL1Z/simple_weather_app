import React from "react";
import Spinner from "../../assets/icon/Spinner.gif";

const Loading = () => {
    return <img src={Spinner} alt="spinner"/>
};

export default React.memo(Loading);
