console.log(cityGrowths)
// 1. sort cities in decending order of population growth
let sortedCities = cityGrowths.sort((a, b)=> a.Increase_from_2016 - b.Increase_from_2016).reverse();
//console.log(sortedCities)

// 2. select top 5 cities in terms of growth
let topFiveCities=sortedCities.slice(0, 5);
//console.log(topFiveCities)

// 3. create separate arrays for the city names and their population growths
let topFiveCityNames=topFiveCities.map(city => city.City);
let topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016)); //parseInt converts str=>int

// 4. use plotly to create a bar chart with these arrays
trace={
    x:topFiveCityNames,
    y:topFiveCityGrowths,
    type: "bar"
};

layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City"},
    yaxis: {title:"Population Growth, 2016-2017"}
};

Plotly.newPlot("bar-plot", [trace], layout)

// use same dataset to create bar chart of 7 largest cities by population

// sort cities by population
let citiesSortedByPopulation = cityGrowths.sort((a, b)=>b.population-a.population)
console.log(citiesSortedByPopulation)

//only get the top 7
let topSevenCities=citiesSortedByPopulation.slice(0, 7);

//extract the city name and population
let topSevenCityNames=topSevenCities.map(city => city.City);
let topSevenCityPopulations = topSevenCities.map(city => parseInt(city.population));

// plot
trace = {
    x:topSevenCityNames,
    y: topSevenCityPopulations,
    type: "bar"
};
layout = {
    title: "Largest 7 Cities by Population",
    xaxis: {title:"City"},
    yaxis: {title:"population"}
};
Plotly.newPlot("population-plot", [trace], layout)