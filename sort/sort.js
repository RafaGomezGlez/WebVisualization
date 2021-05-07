function linechart() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const xlabels = [];
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: generateLabelsFromTable(100),
            datasets: [{
                label: '# of Votes',
                data: randomData(100),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        }
    });
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