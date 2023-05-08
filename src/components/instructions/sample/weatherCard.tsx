import { IWeatherCard } from "./types";
import styles from "./sample.module.css";
import Icon from "../../utilities/icon";

const WeatherCard = ({ cityName, weatherData, removeWeatherCard } : IWeatherCard) => {
    return <div className={styles.weatherCard}>
        <div className={styles.title}>
            <div className={styles.city}>
                {cityName}
                {weatherData?.sys?.country && <sup className={styles.country}>{weatherData.sys.country}</sup>}
            </div>
            <button onClick={removeWeatherCard}>
                <Icon icon="times" className={styles.close} />
            </button>
        </div>
        <div className={styles.temperature}>
            {weatherData?.main?.temp?.toFixed(1)}<sup className={styles.unit}>&deg;{
                weatherData?.units === "metric" ? "C" : "F"
            }</sup>
        </div>
        <div className={styles.icon}>
            <figure>
                <img src={`https://openweathermap.org/img/wn/${weatherData.weather?.[0]?.icon}@2x.png`}
                    className="text-white shadow-md rounded-full bg-blue-300" />
            </figure>
        </div>
        <div className={styles.description}>
            {weatherData?.weather?.[0]?.description}
        </div>
    </div>
};

export default WeatherCard;