import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import data from "../data/Home.json"
function Header() {
  const [show,setShow]=useState(false);
  const [guest,setGuest]=useState(false);
  const [adultsCount, setAdultsCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantCount,  setInfantsCount] = useState(0);
  const [petsCount, setPetsCount] = useState(0);
  function handleGuest(){
    setGuest(!false)
    setAdultsCount(0);
    setChildrenCount(0);
  }


  // Function to handle increment button click
  const handleIncrement = (type) => {
      if (type === 'adults') {
          setAdultsCount(prevCount => prevCount + 1);
      } else if (type === 'children') {
          setChildrenCount(prevCount => prevCount + 1);
      }
      else if (type === 'infants') {
        setInfantsCount(prevCount => prevCount + 1);
    }
    else if (type === 'pets') {
      setPetsCount(prevCount => prevCount + 1);
  }
  };

  // Function to handle decrement button click
  const handleDecrement = (type) => {
      if (type === 'adults' && adultsCount > 0) {
          setAdultsCount(prevCount => prevCount - 1);
      } else if (type === 'children' && childrenCount > 0) {
          setChildrenCount(prevCount => prevCount - 1);
      }
      else if (type === 'infants') {
        setInfantsCount(prevCount => prevCount - 1);
    }
    else if (type === 'pets') {
      setPetsCount(prevCount => prevCount - 1);
  }
  };
  return (
    
    <div className="navbar">
      <div className="navOne">
        <div className="logo">
   {
    data.map((header)=>{
      return(
        header.navbar.map((img)=>{
            return(
              <img src={require(`../Assets/${img.logo}`)} height="60px" width="180px"></img>
            )
        })
      )
     
    })
   }
        </div>

        {!show &&(
                      
                      
      <div className="nav">
        <div className="navsection">
          <div className="navitems">
            <ul>
              <li onClick={()=>setShow(true)}>Any where</li>
            </ul>
            </div>
            <div className="navitems">
            <ul>
              <li onClick={()=>setShow(true)}>Any week</li>
            </ul>
            </div>
            <div className="navitems">
            <ul>
              <li onClick={()=>setShow(true)}>Any Guests</li>
            </ul>
            </div>
            <div className="iconSearch navitems">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </div>
        </div>
        </div>
  
      )}
          {
            show &&(
              <div className="center_nav">

                <div>
                <NavLink className="nav_links" onClick={()=>setShow(true)} >Stays</NavLink>
              </div>
              <div>
                <NavLink className="nav_links" onClick={()=>setShow(true)}>Experiences</NavLink>
              </div>
              <div>
                <NavLink className="nav_links">Online Experiences</NavLink>
              </div>
              </div>

              )
            
            
          }
          
        <div className="nav-end">
          <div className="navEndItems">
            <div className="profSection1">
              <NavLink className="nav_links">Airbnb your Home </NavLink>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
              </svg>
            </div>
            <div className="profSection">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
  {
  guest ? 
  <div>
    {show &&(
        <div className="navTwo">
        <div className="navCol">
          <div className="col col1">
            <ul>
              <li>Where</li>
              <input type="text" placeholder="Search destinations" className="inputCont"></input>
            </ul>
          </div>
          <div className=" col col2">
            <ul>
              <li>Check in</li>
              <input type="text" placeholder="Add dates" className="inputCont"></input>
            </ul>
          </div>
          <div className="col col3">
            <ul>
              <li>Check Out</li>
              <input type="text" placeholder="Add dates" className="inputCont"></input>
            </ul>
          </div>
          
          
          <div className=" col4A col4">
            <div>
              <ul>
                <li>Who</li>
                <button className="btn btn-light p-1" onClick={()=>setGuest(false)}>Add Guests</button>
              </ul>
            </div>
            <div className="search_icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </div>
          </div>
        

        </div>
      </div>
  
      )}
    <div className="addGuests">
      <div className="Guest">
      <div className="title">
        Adults
        <p className="restrictions">Age 13 or above</p>
        </div>
        <div className="guestNos">
        <div class="input-group w-auto justify-content-end align-items-center">
         <input  type="button" value="-"onClick={()=>handleDecrement('adults')} class="button-minus border rounded-circle  icon-shape icon-sm mx-1 " />
         <input type="number"  value={adultsCount} name="quantity" class="quantity-field border-0 text-center w-25"/>
         <input type="button" value="+"  onClick={()=>handleIncrement('adults')} class="button-plus border rounded-circle icon-shape icon-sm "/>
         </div>
        
          </div>
      </div>
      <div className="Guest">
      <div className="title">
        Childrens
        <p className="restrictions">Age 2 -12</p>

        </div>
        <div className="guestNos">
        <div class="input-group w-auto justify-content-end align-items-center">
        <input  type="button" value="-" onClick={()=>handleDecrement('children')} class="button-minus border rounded-circle  icon-shape icon-sm mx-1 " />
         <input type="number" value={childrenCount} name="quantity" class="quantity-field border-0 text-center w-25"/>
         <input type="button" value="+" onClick={()=>handleIncrement('children')} class="button-plus border rounded-circle icon-shape icon-sm "/>
         </div>
          </div>
      </div>
      <div className="Guest">
      <div className="title">
        Infants
        <p className="restrictions">Under 2</p>

        </div>
        <div className="guestNos">
        <div class="input-group w-auto justify-content-end align-items-center">
        <input  type="button" value="-" onClick={()=>handleDecrement('infants')} class="button-minus border rounded-circle  icon-shape icon-sm mx-1 " />
         <input type="number" value={infantCount} name="quantity" class="quantity-field border-0 text-center w-25"/>
         <input type="button" value="+" onClick={()=>handleIncrement('infants')} class="button-plus border rounded-circle icon-shape icon-sm "/>

         </div>
        
          </div>
      </div>
      <div className="Guest">
      <div className="title">
      Pets
      <p className="restrictions">Bringing a service animal?</p>

        </div>
        <div className="guestNos">
        <div class="input-group w-auto justify-content-end align-items-center">
        <input  type="button" value="-" onClick={()=>handleDecrement('pets')} class="button-minus border rounded-circle  icon-shape icon-sm mx-1 " />
         <input type="number" value={petsCount} name="quantity" class="quantity-field border-0 text-center w-25"/>
         <input type="button" value="+" onClick={()=>handleIncrement('pets')} class="button-plus border rounded-circle icon-shape icon-sm "/>
         </div>
        
          </div>
      </div>
      </div>
  </div>

  :
    <div>
{show &&(
        <div className="navTwo">
        <div className="navCol">
          <div className="col col1">
            <ul>
              <li>Where</li>
              <input type="text" placeholder="Search destinations" className="inputCont"></input>
            </ul>
          </div>
          <div className=" col col2">
            <ul>
              <li>Check in</li>
              <input type="text" placeholder="Add dates" className="inputCont"></input>
            </ul>
          </div>
          <div className="col col3">
            <ul>
              <li>Check Out</li>
              <input type="text" placeholder="Add dates" className="inputCont"></input>
            </ul>
          </div>
          
          
          <div className=" col4A col4">
            <div>
              <ul>
                <li>Who</li>
                <button className="btn btn-light p-1" onClick={handleGuest}>Add Guests</button>
              </ul>
            </div>
            <div className="search_icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </div>
          </div>
        

        </div>
      </div>
  
      )}
    </div>
  
}
        </div>
  );
}

export default Header;
