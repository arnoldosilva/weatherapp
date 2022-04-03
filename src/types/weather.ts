export type WeatherType = {
  city: string;
  locality: string;
  principalSubdivision: string;
  countryName: string;
  countryCode: string;
  weather: {
    main: {
      "humidity": number;
      "pressure": number;
      "temp": number;
    }
    sys: {
      "sunrise": number;
      "sunset": number;
    }
  }
}