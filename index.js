// Creating the Nested Object with Pets
const pets = {
  dog: {
    name: "Buddy",
    breed: "Golden Retriever",
    age: 5,
    owner: {
      name: "John",
      address: {
        street: "123 Pet St",
        city: "Petville",
        postalCode: "12345",
      },
    },
  },
  cat: {
    name: "Whiskers",
    breed: "Siamese",
    age: 3,
    owner: {
      name: "Sarah",
      address: {
        street: "456 Cat Rd",
        city: "Meowtown",
        postalCode: "54321",
      },
    },
  },
};

// Accessing Properties in the Nested Object
console.log(pets.dog.name); // Output: Buddy
console.log(pets.dog.owner.name); // Output: John
console.log(pets.dog.owner.address.city); // Output: Petville

console.log(pets.cat.name); // Output: Whiskers
console.log(pets.cat.owner.address.street); // Output: 456 Cat Rd

// Updating Properties in the Nested Object
pets.dog.age = 6;
console.log(pets.dog.age); // Output: 6

// Adding New Properties to the Nested Object
pets.cat.owner.phone = "555-1234";
console.log(pets.cat.owner.phone); // Output: 555-1234

// --------------------------------------------------------

// Creating the Nested Object with Foods
const foods = {
  fruit: {
    name: "Apple",
    type: "Fruit",
    nutrition: {
      calories: 95,
      sugar: "19g",
      fiber: "4g",
    },
  },
  vegetable: {
    name: "Carrot",
    type: "Vegetable",
    nutrition: {
      calories: 25,
      sugar: "3g",
      fiber: "2g",
    },
  },
};

// Accessing Properties in the Nested Object
console.log(foods.fruit.name); // Output: Apple
console.log(foods.fruit.nutrition.calories); // Output: 95
console.log(foods.vegetable.name); // Output: Carrot
console.log(foods.vegetable.nutrition.fiber); // Output: 2g

// Updating Properties in the Nested Object
foods.fruit.nutrition.calories = 100;
console.log(foods.fruit.nutrition.calories); // Output: 100

// Adding New Properties to the Nested Object
foods.vegetable.nutrition.vitamins = "A, K";
console.log(foods.vegetable.nutrition.vitamins); // Output: A, K
