import React from "react";
import WeatherIcon from "../../assets/icon/WeatherIcon";

const TempInfo = ({location, temp}) => {
    return (
        <section className='weatherContent'>
            <div className="weatherIconContainer">
                <WeatherIcon/>
            </div>
            <div className="weatherTextInfo">
                <h1 className="weatherTemp">Город: <span className="weatherTextInfoSpan">{location}</span></h1>
                <h1 className="weatherTemp">Температура: <span className="weatherTextInfoSpan">{Math.floor(temp)}</span></h1>
            </div>
        </section>
    );
};

export default React.memo(TempInfo);
