
function randomData(quantity) {
    let arr = []
    while (quantity > 0) {
        randomValue = Math.floor(Math.random() * 200);
        arr.push(randomValue);
        quantity--;
    }
    return arr;
}

function generateLabelsFromTable(quantity)
{                       
    let labels = [];
    iterator = 0;
    while (quantity > 0) {
        labels.push(iterator)
        iterator ++;
        quantity --;
    }
    return labels;
}

function updateChart() {

    var sortValue = parseInt(document.getElementById("sort-method").value);
    var quantityValue = document.getElementById("quantityNumbers").value;
    var delayValue = document.getElementById("delay").value;

    myChart.data.labels = generateLabelsFromTable(quantityValue);
    myChart.data.datasets.forEach((dataset) => {
        dataset.data = (randomData(quantityValue));
    });

    myChart.update();
    
}