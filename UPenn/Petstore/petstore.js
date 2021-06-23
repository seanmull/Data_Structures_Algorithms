
/**
 * This function should calculate the total amount of pet food that should be
 * ordered for the upcoming week.
 * @param numAnimals the number of animals in the store
 * @param avgFood the average amount of food (in kilograms) eaten by the animals
 * 				each week
 * @return the total amount of pet food that should be ordered for the upcoming
 * 				 week, or -1 if the numAnimals or avgFood are less than 0 or non-numeric
 */
 //calculateFoodOrder(-1, 0);calculateFoodOrder(0, -1);calculateFoodOrder(1, 1);
function calculateFoodOrder(numAnimals, avgFood) {
    if(numAnimals < 0 || avgFood < 0 || isNaN(numAnimals) || isNaN(avgFood)){
		return -1;
	}
	return Number(numAnimals) * Number(avgFood);
}

/**
 * Determines which day of the week had the most nnumber of people visiting the
 * pet store. If more than one day of the week has the same, highest amount of
 * traffic, an array containing the days (in any order) should be returned.
 * (ex. ["Wednesday", "Thursday"]). If the input is null or an empty array, the function
 * should return null.
 * @param week an array of Weekday objects
 * @return a string containing the name of the most popular day of the week if there is only one most popular day, and an array of the strings containing the names of the most popular days if there are more than one that are most popular
 */
//var c = new Weekday('f',5);var b = new Weekday('w',3);var a = new Weekday('m',3);var week = [];week.push(a);week.push(b);week.push(c);mostPopularDays(week);
 function mostPopularDays(week) {
	var maxTraffic = 0;
	var maxArray = [];
	
    if(week == null || week.length == 0){
		return null;
	}

	for(var i = 0; i < week.length; i++){
		//console.log(week[i].traffic);
		if(week[i].traffic > maxTraffic){
			maxTraffic = week[i].traffic;
		}
	}
	for(var i = 0; i < week.length; i++){
		if(week[i].traffic == maxTraffic){
			//console.log(week[i].name);
			maxArray.push(week[i].name);
		}
	}
	if(maxArray.length == 1){
		return maxArray[0];
	}else{
		return maxArray;
	}
}


/**
 * Given three arrays of equal length containing information about a list of
 * animals - where names[i], types[i], and breeds[i] all relate to a single
 * animal - return an array of Animal objects constructed from the provided
 * info.
 * @param names the array of animal names
 * @param types the array of animal types (ex. "Dog", "Cat", "Bird")
 * @param breeds the array of animal breeds
 * @return an array of Animal objects containing the animals' information, or an
 *         empty array if the array's lengths are unequal or zero, or if any array is null.
 */
 
//var names = ['Bob','Jake','Helen'];var types = ['Horse','Pig','Mouse'];var breeds = ['Big','Nice','Neat'];createAnimalObjects(names,types,breeds);
//var names = ['Bob','Jake'];var types = ['Horse','Pig','Mouse'];var breeds = ['Big','Nice','Neat'];createAnimalObjects(names,types,breeds);
function createAnimalObjects(names, types, breeds) {
	var animals = [];
	var animal;
	
    if(!names || !types || !breeds ||
        names.length != types.length || types.length != breeds.length ||
	   names.length == 0 || types.length == 0 || breeds.length == 0){
		return animals;
	}
	
	for(var i = 0; i < names.length; i++){
		animal = new Animal(names[i], types[i], breeds[i]);
		animals.push(animal);
	}
	return animals;
}

/////////////////////////////////////////////////////////////////
//
//  Do not change any code below here!
//
/////////////////////////////////////////////////////////////////


/**
 * A prototype to create Weekday objects
 */
function Weekday (name, traffic) {
    this.name = name;
    this.traffic = traffic;
}

/**
 * A prototype to create Item objects
 */
function Item (name, barcode, sellingPrice, buyingPrice) {
     this.name = name;
     this.barcode = barcode;
     this.sellingPrice = sellingPrice;
     this.buyingPrice = buyingPrice;
}
 /**
  * A prototype to create Animal objects
  */
function Animal (name, type, breed) {
    this.name = name;
     this.type = type;
     this.breed = breed;
}


/**
 * Use this function to test whether you are able to run JavaScript
 * from your browser's console.
 */
function helloworld() {
    return 'hello world!';
}

