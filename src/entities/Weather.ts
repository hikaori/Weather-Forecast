export interface Weather {
  weather: [
    {
      id: number;
      main: string;
      description: string;
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
