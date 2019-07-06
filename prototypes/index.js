const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {
    
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    const result = kitties.filter(kitten => kitten.color === 'orange' ).map(kitten => kitten.name);
    return result;

    // Annotation:
    // I used the filter prototype method first, because it goes through and checks all of the objects 
    // in the array and then returns a new array only with the elements that pass my function. However, it returns
    // the whole element, so I then had to map through the array, which also creates a new array, but I was then able to
    // set it up so it only returned the names of the kittens.
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort((a, b) => b.age - a.age);
    return result;

    // Annotation:
    // For this test I only needed to use the sort prototype method.
    // With this method I compared the first and second element and then it
    // returns in the order from largest to smallest. I had to use dot notation,
    // so the method only checked the ages of the kittens.
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const result = kitties;
    result.forEach(kitten => kitten.age += 2);
    return result;
  }

  // Annotation:
  // For this test I used the forEach prototype method, because it
  // doesn't return anything I had to first assign the array to the variable.
  // Then used the forEach method to loop through the area and only update the age,
  // so the whole object return with the updated value.
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g. 
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    const result = clubs.reduce((acc, club) => {
      club.members.forEach(member => {
        if (!acc[member]) {
          acc[member] = [];
        }
        acc[member].push(club.club);
      });
      return acc;
    }, {});
    return result;

    // Annotation:
    //I used reduce to add each acculmulator together into a new object.
    //Since the members were an array, I had to first iterate from all of the
    //members, so I could add them as keys ot the object. If the member wasn't assigned
    //then it added a new key with the name assigned to an empty array. Then their club
    //was pushed into the empty array.
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]
  
    const result = mods;
    result.forEach(mod => {
      const modCount = mod.studentsPerInstructor = mod.students / mod.instructors;
      delete mod.students;
      delete mod.instructors;
      return modCount;
    });
    return result;

    // Annotation:
    // I iterated through the array of objects and at each object I add a new key of studentsPerInstructor
    // with a value of each specific objects number of students divided by number of instructiors. Since the students
    // and instructors have to be replaced. I used the delete operator to remove both keys from the object.
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [ 
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    const result = [];
    cakes.map(cake => result.push({'flavor': cake.cakeFlavor, 'inStock': cake.inStock}));
    return result;

    // Annotation:
    // I created a new array for result then used map to iterate through each object in the existing array.
    // Then at each element, only specific keys are pushed in as a new object literal. I define the key names used
    // and then defined the key values for each object.
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = cakes.filter(cake => cake.inStock > 0);
    return result;

    // Annotation:
    // I used filter to check each element of the array. Then dot notation to specify
    // which key value I wanted to check. If the conditional is true, then only those
    // objects are included in the new array of cakes.
  },
  
  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((acc, cake) => acc + cake.inStock, 0);
    return result;

    // Annotation:
    // With reduce prototype method I can add the inStock value at each iteration. I start
    // with an accumulator which I add the current inStock value for each element using dot
    // notation. Then each element is added to the existing total until it is done iterating
    // through the array.
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]


    const result = cakes.map(cake => cake.toppings).reduce((acc, toppings) => {
      toppings.forEach(topping => {
        if(!acc.includes(topping)) {
          acc.push(topping);
        }
      });

      return acc;
    }, []);

    return result;

    // Annotation:
    // I use map to iterate through the existing array and create a new array of just the cakes toppings.
    // Then I chained reduce with a forEach nested inside. For each iteration inside the nested arrays, the  
    // conditional checks if the topping is not in the array. If so then it pushes the toppings into the new array 
    // created with reduce.
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // { 
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2, 
    //    ...etc
    // }

    const result = cakes.map(cake => cake.toppings).reduce((acc, toppings) => {
      toppings.forEach(topping => {
        !acc[topping] ? acc[topping] = 1 : acc[topping]++;   
      });
    
      return acc;
    }, {});
    return result;

    // Annotation:
    // First I iterate through the array of cakes to retrieve only the cake toppings. Then I 
    // used reduce to add the toppings into an object. Since the toppings were inside of their own arrays
    // I had to use a forEach prototype method to iterate through each topping in their array. Then
    // I check if there is a key named after the topping within the new object. If it isn't then it should add
    // a key with that name and a 1. If it already exists then it should add to the existing number.
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = classrooms.filter(classroom => classroom.program === 'FE');
    return result;

    // Annotation:
    // I used filter and at each iteration it checks if the key of program is strictly
    // equal to FE. Then it only returns the elements or objects that return true.
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // { 
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = classrooms.reduce((acc, classroom) => {
      if (!acc.feCapacity) {
        acc.feCapacity = 0;
      }
      if (!acc.beCapacity) {
        acc.beCapacity = 0;
      }
      if (classroom.program === 'FE') {
        acc.feCapacity += classroom.capacity;
      } else if (classroom.program === 'BE') {
        acc.beCapacity += classroom.capacity;
      }
      return acc;
    }, {});
    return result;

    // Annotation:
    // I used reduce prototype method to iterate through the existing array of values.
    // First checking if there is an existing key value of that name in the object. If not
    // then I have to add a key with a starting value. Then I run through with an additional
    // conditional, which checks what program they are in and adds to the new key value ands and
    // reassigns to the new key value.
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((a, b) => a.capacity - b.capacity);
    return result;

    // Annotation:
    // I used the sort prototype method to sort by the smallest capacity to the largest capacity
    // key in each object.
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const result = breweries.reduce((acc, brewery) => acc + brewery.beers.length, 0);
    return result;

    // Annotation:
    // I used the reduce prototype method and added the length of the beers array, which was
    // nested inside each of the breweries. This gave the total number of beers and then added them
    // to the accumulator.
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const result = [];
    breweries.map(brewery => result.push({'name': brewery.name, 'beerCount': brewery.beers.length}));
    return result;

    // Annotation:
    // I assigned result to an empty array. Then I iterate through the breweries array using
    // map prototype method. At each element an object literal is created with the existing name and beers.length,
    // which are filled in as values to the new object literal and then pushed into the empty array.
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const result = breweries.reduce((acc, brewery) => {
      if (!acc.abv) {
        acc.abv = 0;
      }
      brewery.beers.forEach(beer => {
        if (beer.abv > acc.abv) {
          acc = beer;
        }
      });
      return acc;
    }, {});
    return result;

    // Annotation:
    // I used the reduce prototype method to iterate through every brewery and create a starting 
    // value of an object. I then initialize that the starting abv of the object is 0, so other beer
    // abvs can be compared to it. Then I have to use a for Each to loop through the beers arrays within
    // each brewery. While iterating I have each iteration, check if the abv of the current beer is greater
    // then my current accumulator value. If so then it replaces the current object with the object with the
    // highest value.
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g. 
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const result = instructors.reduce((acc, instructor) => {
      cohorts.forEach(cohort => {
        if (instructor.module === cohort.module) {
          acc.push({'name': instructor.name, 'studentCount': cohort.studentCount});
        }
      });
      return acc;
    }, []);
    return result;

    // Annotation:
    // I used reduce to iterate through all of the instructors and create an initial value
    // of an empty array. Then within I used the for each prototype method to also check the cohorts
    // then at each iteration it compares the module of the instructor and cohort. If they match, then I
    // push a new object into the empty array with the current instructor's name and the current cohort's
    // student count.
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // { 
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const result = cohorts.reduce((acc, cohort) => {
      let current = `cohort${cohort.cohort}`;
      if (!acc[current]){
        acc[current] = 0;
      }
      acc[current] = cohort.studentCount/instructors.filter(instructor => instructor.module === cohort.module).length;
      return acc;
    }, {});
    return result;

    // Annotation:
    // First I use reduce prototype method to create an initial object. While it iterates I create a new key name using a
    // template literal adding the cohorts value to cohort to create a new key name. Then I check if the key exists, if not
    // it creates that key with an initial value of zero. Then I update this value taking the value it finds in each iteration
    // of the cohorts array and dividing by the filtered instructors array's length, which gives the number of instructors.
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    const result = instructors.reduce((acc, instructor) => {
      if(!acc[instructor.name]) {
        acc[instructor.name] = [];
      }
      instructor.teaches.forEach(skill => {
        cohorts.forEach(cohort => {
          cohort.curriculum.forEach(curriculum => {
            if(curriculum === skill) {
              if(!acc[instructor.name].includes(cohort.module)) {
                acc[instructor.name].push(cohort.module);
                acc[instructor.name].sort((a, b) => a - b);
              }
            }
          });
        });
      });
      return acc;
    }, {});
    return result;

    // Annotation:
    // I used reduce prototype method to create a new object. Within the object I created new keys with the instructors names
    // by checking if they existed already and if not I added each key with an empty array. Then used for each to iterate through
    // the individual instructor teaches array to retrieve each value in the array. In addition, used another for each to also iterate
    // through the cohort curriculum array to retrieve those values. Then used two conditionals, first one to compare if the curriculum and skill
    // matched and second one to see if each instructors array doesn't already have the module number inside the array. If both are true then the 
    // module number is pushed into the array and I used sort, because the arrays were in alphanumeric order.
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // { 
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = cohorts.reduce((acc, cohort) => {
      cohort.curriculum.forEach(skill => {
        if(!acc[skill]) {
          acc[skill] = [];
        }
        instructors.forEach(instructor => {
          instructor.teaches.forEach(curriculum => {
            if(curriculum === skill) {
              if(!acc[skill].includes(instructor.name)) {
                acc[skill].push(instructor.name);
              }
            }
          });
        });
      });
      return acc;
    }, {});
    return result;

    // Annotation:
    // To create a new object, I used reduce prototype method then within
    // each iteration I iterate through the curriculum method within each cohort. During
    // this I check if the key exists for the curriculum name. If not, then I add the key with 
    // an empty array to be pushed into. Then I iterate through the instructors array and at each
    // instructor I iterate through what they teach. At each iteration I check if what they teach matches
    // the cohorts skill and if the array doesn't include that teacher's name already. If both are true, then
    // the teachers name is pushed into the array.
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    const result = Object.values(bosses).reduce((acc, boss) => {
      acc.push(sidekicks.reduce((acc2, sidekick) => {
        if (!acc2['bossName']) {
          acc2['bossName'] = boss.name;
          acc2['sidekickLoyalty'] = 0;
        }
        if(boss.name === sidekick.boss) {
          acc2['sidekickLoyalty'] += sidekick.loyaltyToBoss;
        }
        return acc2;
      }, {}));
      return acc;
    }, []);
    return result;

    // Annotation:
    // Since bosses was an object with objects. I used Object.values to turn the values
    // of the object into an array. Then with reduce I created an array to push objects into.
    // Using a secondary reduce within the push array method. I checked if the bossname was already
    // in the array. If not, then a new boss was created with a starting value of 0 for loyalty. Then
    // I had a second conditional that checked if the boss name and sidekick's boss matched. If true, then
    // the loyalty was added and reassigned to the side kicks loyalty at that specific iteration.
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [ 
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.
    
    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra", 
    //    "Canis Minor", 
    //    "The Plow", 
    //    "Orion", 
    //    "The Little Dipper" ]


    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object. 
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the 
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      { 
        'Steven Spielberg': 
          { 
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37 
          },
        'Joe Johnston': 
          { 
            'Jurassic Park III': 44 
          },
        'Colin Trevorrow': 
          { 
            'Jurassic World': 56
           },
        'J. A. Bayona': 
          { 
            'Jurassic World: Fallen Kingdom': 59 
          } 
      }
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      }, 
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  dinosaurPrompts
};