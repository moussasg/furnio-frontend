import React from "react";
import Style from "./index.module.css"
export default function Mybackground() {
  return (
    <section className={Style.bgrnd}>
        <div className={Style.Discover}>
            <div className={Style.Discoverdetails}>
                <br/>
                <div className={Style.newariv}>New Arrival</div>
                <h1 className={Style.h1discover}>Discover Our  <br/>New Collection</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Ut  magnam officia, eveniet minus eaque ipsa</p>
                <button className={Style.buyy}>BUY NOW</button>
                <br></br>
            </div>
        </div>
    </section>
  );
}
