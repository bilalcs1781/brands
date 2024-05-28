import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-28">
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#f4293e"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
