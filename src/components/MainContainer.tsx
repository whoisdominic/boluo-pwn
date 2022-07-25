import React from "react";

const MainContainer: React.FC<{
  children: JSX.Element;
}> = ({ children }) => {
  return <div className="App">{children}</div>;
};

export default MainContainer;
