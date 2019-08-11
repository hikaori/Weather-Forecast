export interface Weather {
  weather: [
    {
      main: string;
    }
  ];

  main: {
    temp: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
  wind: {
    speed: number;
  };
  rein?: number;
  name: string;
}
