
// libraries
import { useReducer } from "react";

// components
import WeatherCard from "./weatherCard";
import Icon from "../../utilities/icon";

// methods / hooks / styles
import Image1 from "../../../assets/images/logo.svg";
import config from "../../utilities/config.json";
import styles from "./sample.module.css";
import { ISampleState } from "./types";

const initialState: ISampleState = {
    cityName: "",
    weatherData: {},
    error: "",
    units: "metric",
    loading: false
}

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "SET_CITY_NAME":
            return {
                ...state,
                cityName: action.payload
            }
        case "SET_WEATHER_DATA":
            return {
                ...state,
                weatherData: {
                    ...state.weatherData,
                    ...action.payload
                }
            }
        case "REMOVE_WEATHER_DATA": {
            const weatherData = { ...state.weatherData };
            delete weatherData[action.payload];
            return {
                ...state,
                weatherData
            }
        }
        case "SET_LOADING":
            return {
                ...state,
                loading: true
            }
        case "UNSET_LOADING":
            return {
                ...state,
                loading: false
            }
        case "TOGGLE_UNITS":
            return {
                ...state,
                units: state.units === "metric" ? "imperial" : "metric"
            }
        case "SET_ERROR":
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

const Sample = () => {
    const [ state, dispatch ] = useReducer( reducer, initialState );

    const updateCityName = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: "SET_CITY_NAME", payload: e.target.value });
    }

    const toggleUnits = () => {
        dispatch({ type: "TOGGLE_UNITS" });
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({ type: "SET_LOADING" });
        try {
            const response = await fetch(`https://${config.API}?q=${state.cityName}&appid=${config.API_Key}&units=${state.units}`);
            if( response.status === 200 ) {
                const data = await response.json();
                dispatch({ type: "SET_WEATHER_DATA", payload: {
                    [state.cityName]: {
                        ...data,
                        units: state.units
                    }
                }});
                dispatch({ type: "SET_ERROR", payload: "" })
            } else {
                const data = await response.json();
                dispatch({ type: "SET_ERROR", payload: data?.message ?? "Cannot fetch Data" });
            }
        } catch (error) {
            dispatch({ type: "SET_ERROR", payload: error })
        } finally {
            dispatch({ type: "UNSET_LOADING" });
        }
    }

    return <div className="w-full">
        <div className={styles.inputContainer}>
            <form onSubmit={onSubmit} className={styles.inputForm}>
                <input type="text" placeholder="City Name" onChange={updateCityName}
                    className="px-2 py-2 w-full outline-0 rounded-l-md flex-grow"
                    defaultValue={state.cityName}
                />
                <button type="button" className="w-10 bg-white px-4 py-3 flex text-blue-700"
                    onClick={toggleUnits}
                >
                    <sup className="relative top-1">&deg;</sup>
                    {state.units === "metric" ? <Icon icon="c" /> : <Icon icon="f" />}
                </button>
                <button disabled={state.loading} type="submit"
                    className="flex-none bg-blue-700 px-4 py-2 text-white rounded-r-md"
                >
                    { state.loading && <Icon icon="sync" spin /> }
                    {" "} Get Weather
                </button>
            </form>
            <small className="text-red-500">{state.error}</small>
        </div>
        { Object.keys( state.weatherData )?.length > 0 ?
        <div className={styles.weatherCardContainer}>
            { Object.keys(state.weatherData).map((cityName: string) => {
                return <WeatherCard key={cityName}
                    cityName={cityName}
                    weatherData={state.weatherData?.[cityName]}
                    removeWeatherCard={() => dispatch({ type: "REMOVE_WEATHER_DATA", payload: cityName })}
                />
            })}
        </div> : <div className="w-full flex my-24 items-center justify-center">
            <img src={Image1} alt="search" className="h-64" />
        </div>}
    </div>
};

export default Sample;