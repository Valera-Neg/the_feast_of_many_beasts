function feast(beast, dish) {
  const animal = beast.replace(/\s/g, '').split("");
  const food = dish.replace(/\s/g, '').split("");  
    return animal[0] === food[0] && animal[animal.length - 1] === food[food.length - 1] 
}

  console.log(feast("great blue heron", "garlic naan"))  //> true
  console.log(feast("chickadee", "chocolate cake")) //> true
  console.log(feast("brown bear", "bear claw"))  //> false