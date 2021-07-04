
function swap(arr, i) {
    let tmp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = tmp;
}

function updateChartDelayed(labels, data, colors, timeout) {
    setTimeout(() => {
      myChart.data.labels = labels;
      myChart.data.datasets[0].data = data;
      myChart.data.datasets[0].backgroundColor = colors;
      myChart.update();
    }, timeout);
  }

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
    // 
    var sortValue = (document.getElementById("sort-method").value);
    //
    var quantityValue = document.getElementById("quantityNumbers").value;
    var delayValue = document.getElementById("delay").value;


    myChart.data.labels = generateLabelsFromTable(quantityValue);
    myChart.data.datasets.forEach((dataset) => {
        dataset.data = (randomData(quantityValue));
    });

    myChart.update();

    switch (sortValue) {
        case 'insertionSort':
            setTimeout(()=> insertionSort(), 3000)
            break;
        case 'bubbleSort':
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

function bubbleSort() {  
    var labels = myChart.data.labels;
    var data = myChart.data.datasets[0].data;
    var colors = myChart.data.datasets[0].backgroundColor;
    var swapped;
    var timeout = 0;
    do {
      swapped = false;
      for (var i = 0; i < data.length; i++) {
        if (data[i] > data[i + 1]) {        
          swap(labels, i);
          swap(data, i);
          swap(colors, i);
          timeout += 500;
          this.updateChartDelayed(labels.slice(0), data.slice(0), colors.slice(0), timeout);
          swapped = true;
        }
      }
    } while (swapped);
  }

function mergeSort(){
    console.log("mergeSort")
}

function quickSort(){
    console.log("quickSort")
}