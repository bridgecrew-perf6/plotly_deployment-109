// create a bar chart w plotly
// beverages and percentage of total number of orders they comprise in a popular bar

trace={x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "scatter",
    mode: "markers"
};

layout={
    title: "Popular Drinks",
    xaxis: {title: "drinks"},
    yaxis: {title: "percent ordered"}
};

Plotly.newPlot("plot", [trace], layout);