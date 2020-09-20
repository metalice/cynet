export const getColor = (value) => `hsl(${value > 20 ? value / 100 : 200 - value}, 70%, 50%)`;
