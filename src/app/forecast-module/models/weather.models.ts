export interface BaseWeatherResponseData {
    clouds: { all: number },
    dt: number,
    main: {
        feels_like: number,
        humidity: number,
        pressure: number,
        temp: number,
        temp_max: number,
        temp_min: number,
    },
    visibility: number,
    weather: WeatherInstance[],
    wind: {
        speed: number,
        deg: number
    },
}

export interface WeatherResponseData extends BaseWeatherResponseData {
    base: string;
    cod: number,
    coord: LonLat,
    id: number,
    name: string,
    sys: {
        type: number,
        id: number,
        country: string,
        sunrise: number,
        sunset: number,
    },
    timezone: number,
}

export interface LonLat {
    lon: number,
    lat: number,
}

export interface WeatherInstance {
    id: number,
    main: string,
    description: string,
    icon: string,
}

export interface WeatherCity {
    id: number,
    name: string,
    coord: LonLat,
    country: string,
    population: number,
    sunrise: number,
    sunset: number,
    timezone: number,
}

export interface WeatherMultipleDayResponseData {
    city: WeatherCity,
    cnt: number,
    cod: string,
    message: number,
    list: BaseWeatherResponseData[],
}