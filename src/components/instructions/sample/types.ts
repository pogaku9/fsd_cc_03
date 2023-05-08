export interface ISampleState {
    cityName?: string;
    weatherData?: {
        [key: string]: IWeatherData
    };
    error?: string;
    loading?: boolean;
    units?: "standard" | "metric" | "imperial";
}

export interface IReducerAction {
    type: string;
    payload?: any;
}

export interface IWeatherData {
    name: string;
    units?: "metric" | "imperial";
    coord: {
        lon: number;
        lat: number;
    };
    weather: {
        id: number;
        main?: string;
        description?: string;
        icon?: string;
    }[];
    main: {
        temp?: number;
        feels_like?: number;
        temp_min?: number;
        temp_max?: number;
        pressure?: number;
        humidity?: number;
    };
    sys?: {
        id?: number;
        country?: string;
        sunrise?: number;
        sunset?: number;
    }
}

export interface IWeatherCard {
    cityName: string;
    weatherData: IWeatherData;
    removeWeatherCard: () => void;
}