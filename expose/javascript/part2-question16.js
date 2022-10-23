let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2
};

for (let cars in statistics) {
  if (cars.startsWith("r") == true || statistics[cars] % 2 == 1) {
      console.log(`${cars}: ${statistics[cars]}`);
  }
}