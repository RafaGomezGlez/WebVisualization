function swap(arr, j) {
    let tmp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = tmp;
}
function updateColors(arr, j) {
    arr[j] = 'rgb(217, 2, 250)';
    arr[j + 1] = 'rgb(217, 2, 250)';
}
function updateColorsBefore(arr, j) {
    arr[j] = 'rgb(255, 197, 82)';
    arr[j + 1] = 'rgb(255, 197, 82)';
}

function updateChartDelayed(labels, data, colors) {
            myChart.data.labels = labels;
            myChart.data.datasets[0].data = data;
            myChart.data.datasets[0].backgroundColor = colors;
            myChart.update();
}

function randomData(quantity) {
    let arr = []
    while (quantity > 0) {
        randomValue = (Math.floor(Math.random() * 200)) + 1;
        arr.push(randomValue);
        quantity--;
    }
    return arr;
}

function generateLabelsFromTable(quantity, valoresDespues)
{                       
    let labels = [];
    for (let i = 0; i < quantity; i++){
        labels.push(valoresDespues[i]);
    }
    return labels;
}
function generateColorValues(numberOfColors){
    let color = 'rgb(255, 197, 82)';
    let colorArray = [];
    for(let i = 0; i < numberOfColors.length; i++){
        colorArray.push(color);
    }
    return colorArray;
}

function sendData() {
    // Selected sorting method
    var sortValue = (document.getElementById("sort-method").value);
    // Selected quantity of numbers
    var quantityValue = document.getElementById("quantityNumbers").value;
    var delayValue = document.getElementById("delay").value;
    
    if(quantityValue < 6 || quantityValue > 50) {
        alert("Please select numbers between 6 and 50");
        return;
    }
    


    //Generate random data
    myChart.data.datasets.forEach((dataset) => {
        dataset.data = (randomData(quantityValue));
    });
    //Save random data
    let generatedValues = myChart.data.datasets[0].data
    // Set "generatedValues" to data labels
    myChart.data.labels = generateLabelsFromTable(quantityValue, generatedValues);

    // Update chart bar colors to yellow
    myChart.data.datasets[0].backgroundColor = generateColorValues(generatedValues);
    console.log(myChart.data.datasets[0].backgroundColor);

    //Update
    myChart.update();
    switch (sortValue) {
        case 'insertionSort':
            setTimeout(()=> insertionSort(), 3000)
            break;
        case 'bubbleSort':
            console.log("Todo bien");
            setTimeout(() => bubbleSort(), 3000)
            break
        case 'mergeSort':
            setTimeout(()=> mergeSort(), 3000)
            break
        case 'quickSort':
            setTimeout(()=> quickSort(), 3000)
            break
    }

    
}

async function bubbleSort() {  
    var labels = myChart.data.labels;
    var data = myChart.data.datasets[0].data;
    var colors = myChart.data.datasets[0].backgroundColor;
    for(let i = 0; i < data.length; i++) {
        for(let j = 0; j < data.length - i - 1; j++) {
            //Update bg color with the values compared
            updateColors(colors, j);
            updateChartDelayed(labels.slice(0), data.slice(0), colors.slice(0));
            //Wait 1 second
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 1500)
            );
            //Compare and update
            if (data[j] > data[j + 1]) {
                swap(labels, j);
                swap(data, j);
                swap(colors, j);
                updateChartDelayed(labels.slice(0), data.slice(0), colors.slice(0));
                //Wait half a secnd
                await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 500)
                );
            
            }
            // Change bg color to previous values
            updateColorsBefore(colors, j);
            updateChartDelayed(labels.slice(0), data.slice(0), colors.slice(0));
        }
        // Change last bar to green and update
        colors[data.length - i - 1] = 'rgb(0, 255, 0)';
        updateChartDelayed(labels.slice(0), data.slice(0), colors.slice(0));
    }
}

function mergeSort(){
    console.log("mergeSort")
}

function quickSort(){

}

async function insertionSort(){
    var labels = myChart.data.labels;
    var data = myChart.data.datasets[0].data;
    var colors = myChart.data.datasets[0].backgroundColor;

    // Green color to the first bar
    colors[0] = 'rgb(0, 255, 0)';
    updateChartDelayed(labels.slice(0), data.slice(0), colors.slice(0));

    for(let i = 1; i < data.length; i++){
        let current = data[i];
        let j = i - 1;
        // Update color to purple
        colors[i] = 'rgb(217, 2, 250)';

        updateChartDelayed(labels.slice(0), data.slice(0), colors.slice(0));
        // Wait 1.5 sec
        await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 1500)
            );

        while((j >= 0) && (current < data[j])){
            colors[j] = 'rgb(217, 2, 250)';
            data[j+1] = data[j];
            labels[j+1] = labels[j];
            updateChartDelayed(labels.slice(0), data.slice(0), colors.slice(0));
            j--;
            // Wait half a second
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 500)
            );

            // change color to green for the sorted section
            for(let k = i; k >= 0; k--){
                colors[k] = 'rgb(0, 255, 0)';
                data[j+1] = current;
                labels[j+1] = current;
                updateChartDelayed(labels.slice(0), data.slice(0), colors.slice(0));
            }
        }
        // Wait half a second
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 500)
        );
        colors[i] = 'rgb(0, 255, 0)';
        updateChartDelayed(labels.slice(0), data.slice(0), colors.slice(0));
    }
}