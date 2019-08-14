export function convertKtoC(Kvalue: number) {
  // 0 K - 273.15 = -273.1°C
  if (Kvalue === 0) {
    return undefined;
  }
  const degree = Math.round(Kvalue - 273.15);
  return degree;
}

export function convertKtoF(Kvalue: number) {
  //(0 K - 273.15) × 9 ÷ 5 + 32 = -459.7°F
  const fahrenheit = Math.round(((Kvalue - 273.15) * 9) / 5 + 32);
  return fahrenheit;
}
