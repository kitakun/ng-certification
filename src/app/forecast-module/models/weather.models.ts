export interface WeatherResponseData {
    base: string;
    clouds: { all: number },
    cod: number,
    coord: LonLat,
    dt: number,
    id: number,
    main: {
        feels_like: number,
        humidity: number,
        pressure: number,
        temp: number,
        temp_max: number,
        temp_min: number,
    },
    name: string,
    sys: {
        type: number,
        id: number,
        country: string,
        sunrise: number,
        sunset: number,
    },
    timezone: number,
    visibility: number,
    weather: WeatherInstance[],
    wind: {
        speed: number,
        deg: number
    },
}

export interface LonLat {
    lon: number;
    lat: number;
}

export interface WeatherInstance {
    id: number,
    main: string,
    description: string,
    icon: string,
}