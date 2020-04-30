import React, { useEffect, useState } from "react";
import NasaCard from "./NasaCard";
import axios from "axios";


function NasaData() {
    const [nasaData, setNasaData] = useState({})
    useEffect(() => {
        axios
          .get(
            "https://api.nasa.gov/planetary/apod?api_key=lBWUBhJ9XheAS2YDdzcznQcLTzS7wHJBkFvgH4TR&date=2019-12-30"
          )
          .then((response) => {
            setNasaData(response.data);
          })
          .catch((error) => {
            console.log("Houston, we have a problem", error);
          });
    }, []);
    return (
        <div className="image">
            <NasaCard key={nasaData.id} nData={nasaData} />
        </div>
    );
}





export default NasaData;