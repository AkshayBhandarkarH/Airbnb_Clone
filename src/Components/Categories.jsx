import React, { useEffect, useState } from "react";
import data from "../data/Home.json";
import placeData from "../data/places.json";
function Categories() {
  const [eventId, setEventId] = useState("Icon");

  const handleClick = (event, id) => {
    setEventId(id);
  };

  return (
    <div>
      {data.map((details, index) => {
        return (
          <div>
            <div key={index} className="d-flex justify-content-around   ">
              {details.home.categories.map((category) => {
                return (
                  <div key={category.name} onClick={(event) => handleClick(event, category.name)}>
                    <img src={require(`../Assets/icons/${category.icon}`)} alt={category.name} height="20px" className="d-block mx-auto my-auto" />
                    <h3 className="fs-6">{category.name}</h3>
                  </div>
                );
              })}
            </div>

            <div className="contentBox d-flex justify-content-center flex-wrap">
              {placeData.map(
                (places, index) =>
                  places.id === eventId && (
                    <div className="Places">
                      <div className="BoxImg m-2 bg-light p-2" key={index}>
                        <img className="placeImg" src={require(`../Assets/places/iconic/${places.view}`)} height="300px" width="100%"></img>
                      </div>
                      <div className="placeDetails m-2 ">
                        <ul>
                          <li>{places.name}</li>
                          <li>{places.city}</li>
                          <li>{places.duration}</li>
                          <li>{places.price}</li>
                        </ul>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
