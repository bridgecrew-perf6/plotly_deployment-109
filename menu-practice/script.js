d3.selectAll("body").on("change", updatePage);

function updatePage(){
    let selected=d3.selectAll("#selectOption").node();
    console.log(selected.value)
}


  
