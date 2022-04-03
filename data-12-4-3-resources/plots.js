function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  init();

  function optionChanged(newSample){
      buildMetadata(newSample);
      buildCharts(newSample);
  };

  function buildMetadata(sample){
      d3.json("samples.json").then((data)=>{
          let metadata=data.metadata;
          let resultArray=metadata.filter(sampleObj => sampleObj.id==sample);
          let result = resultArray[0];
          console.log(result)
          let PANEL = d3.select("#sample-metadata");

          PANEL.html("");
          //PANEL.append("h6").text(result.location);

          let demo=Object.entries(result);
          console.log(demo)
          console.log(demo.forEach(([key, value])=> PANEL.append("h6").text(key.toUpperCase() + ": "+value)))
      });
  }