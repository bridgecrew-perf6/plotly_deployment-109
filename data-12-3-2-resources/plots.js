d3.json("samples.json").then(function(data){
    console.log("hello");
});

d3.json("samples.json").then(data => console.log(data))

d3.json("samples.json").then(function(data){
    console.log(data);
    console.log(data.metadata.map(entry => entry.wfreq).sort((a,b)=>b-a))
});

d3.json("samples.json").then(function(data){
    Object.entries(data.metadata[0]).forEach(([key, value])=> console.log(key + ": " + value))

})
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});