import React from "react";
import Header from "./Header";
import Products from "./Products";
function Home() {
  return (
    <div className="home">
      <Header />
      <hr/>
      <Products/>
    </div>
  );
}

export default Home;
