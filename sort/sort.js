
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

function sendData() {

    var sortValue = (document.getElementById("sort-method").value);
    var quantityValue = document.getElementById("quantityNumbers").value;
    var delayValue = document.getElementById("delay").value;


    myChart.data.labels = generateLabelsFromTable(quantityValue);
    myChart.data.datasets.forEach((dataset) => {
        dataset.data = (randomData(quantityValue));
    });

    myChart.update();

    switch (sortValue) {
        case 'insertionSort':
            setTimeout(()=> insertionSort(), 2000)
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

function insertionSort() {
    var data = myChart.data.datasets[0].data;
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
            myChart.update()
        }
        data[j + 1] = key;
    }
    console.log(data)
    return data;
}