
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

    var sortValue = (document.getElementById("sort-method").value);
    var quantityValue = document.getElementById("quantityNumbers").value;
    var delayValue = document.getElementById("delay").value;


    myChart.data.labels = generateLabelsFromTable(quantityValue);
    myChart.data.datasets.forEach((dataset) => {
        dataset.data = (randomData(quantityValue));
    });

    var arrayData = myChart.data.datasets[0].data;
    myChart.update();

    
    switch (sortValue) {
        case 'insertionSort':
            console.log(sortValue)
            console.log(arrayData)
            console.log(insertionSort(arrayData))
            break;
        case 'bubbleSort':
            console.log("Bubble sort")
            break
        case 'mergeSort':
            console.log("Merge sort")
            break
        case 'quickSort':
            console.log("Quick sort")
            break
    }

    
}

function insertionSort(data) {

    var i;
    var j;
    for (i = 1; i < data.length ; i++)
    {
        key = data[i];
        j = i - 1;
 
        while (j >= 0 && data[j] > key)
        {
            data[j + 1] = data[j];
            j = j - 1;
        }
        data[j + 1] = key;
    }
    console.log(data)
    myChart.update()
    return data;
}