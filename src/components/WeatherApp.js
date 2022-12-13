import React, {useEffect, useState} from "react";
import axios from 'axios';
import "./css/style.css";

const WeatherApp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("London");


    useEffect( () => {
        const fetchApi = async() => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c7ded8acc457b0fc4fc9bad14740c7ce`;
            const response = await axios.get(url);
            const resJson = await response.data;
            console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();
    }, [search])


    return (

        <>
        
            <div className="box">
                
                <div className="inputData">
                    <input 
                     type="search"
                     value={search}
                     className="inputFeild" 
                     onChange={ (event) => {
                        setSearch(event.target.value)
                     }} 
                     />
                </div>
                {!city ? (
                    <p className="errorMsg"> No data found </p>
                ) : (
                    <div>
                    <div className="info">
                    <h2 className="location">
                    <i class="fas fa-street-view"> </i>{search}
                    </h2>
                    <h1 className="temp">
                     {city.temp} Cel
                    </h1>
                    <h3 className="tempmin_max">
                     Min : {city.temp_min} Cel | Max : {city.temp_max} Cel
                    </h3>
                    
                </div>

                <div className = "wave -one"></div>
                <div className = "wave -two"></div>
                <div className = "wave -three"></div>
                </div>
                )
                }
                
 
             </div>
        </>

    )

}


export default WeatherApp;