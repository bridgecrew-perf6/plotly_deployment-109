// call spaceX API

const url = "https://api.spacexdata.com/v2/launchpads";
// place a call to spaceX API and retrieves the data, then print to browser console
d3.json(url).then(receivedData => console.log(receivedData));

d3.json(url).then(receivedData => receivedData.map(entry => console.log(entry.location.longitude)))

d3.json(url).then(receivedData => receivedData.map(entry => console.log(entry.location.latitude)))