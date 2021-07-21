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
             let data = myChart.data.datasets[0].data;
            setTimeout(()=> mergeSort(data, 0, data.length-1), 1000)
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

async function merge(arr, l, m, r){
    let labels = myChart.data.labels;
    let colors = myChart.data.datasets[0].backgroundColor;
    var n1 = m - l + 1;
    var n2 = r - m;
 
    // Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);
 
    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
 
    // Merge the temp arrays back into arr[l..r]
 
    // Initial index of first subarray
    var i = 0;
 
    // Initial index of second subarray
    var j = 0;
 
    // Initial index of merged subarray
    var k = l;
 
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            colors[k] = 'rgb(0, 0, 255)';
            updateChartDelayed(labels.slice(0), arr.slice(0), colors.slice(0));
            arr[k] = L[i];
            labels[k] = L[i]
            i++;
        }
        else {
            colors[k] = 'rgb(0, 0, 255)';
            updateChartDelayed(labels.slice(0), arr.slice(0), colors.slice(0));
            arr[k] = R[j];
            labels[k] = R[i];
            j++;
        }
        k++;
    }
 
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        colors[k] = 'rgb(255, 0, 0)';
        updateChartDelayed(labels.slice(0), arr.slice(0), colors.slice(0));
        arr[k] = L[i];
        labels[k] = L[i];
        i++;
        k++;
    }
 
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        colors[j] = 'rgb(0, 255, 0)';
        updateChartDelayed(labels.slice(0), arr.slice(0), colors.slice(0));
        arr[k] = R[j];
        labels[k] = R[j];
        j++;
        k++;
    }
    console.log(arr);
    updateChartDelayed(labels.slice(0), arr.slice(0), colors.slice(0));
}

async function mergeSort(data, acumulador, r){
    if(acumulador >= r){
        return;
    }
    let m = acumulador+ parseInt((r-acumulador)/2);
    // console.log(`valorCero: ${acumulador} + r: ${r} - ${acumulador} /2`);
    // console.log(m);

    mergeSort(data,acumulador,m);
    mergeSort(data,m+1,r);
    merge(data, acumulador, m, r);
}

function quickSort(){

}

async function insertionSort(){
    let labels = myChart.data.labels;
    let data = myChart.data.datasets[0].data;
    let colors = myChart.data.datasets[0].backgroundColor;

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