export interface IForecastData {
    zipCode: string;
    // Loaded data
    currentConditions: string;
    temperature: number;
    maxToday: number;
    minToday: number;
    locationName: string;
    date: number;
}
