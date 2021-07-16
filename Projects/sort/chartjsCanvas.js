var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['-', 'S', 'O', 'R', 'T', '-'],
                    datasets: [{
                        label: 'Value',
                        data: [1, 1, 1, 1, 1, 1],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ], 
                        borderColor: [
                            'rgba(0, 0, 0, 1)'
                        ],
                        borderWidth: 2
                    }],
                },

                options: {
                    scales: {
                        x: {
                            display: true,
                            // ticks: {
                            //     font: {
                            //         size: 20,
                            //     }
                            // }
                         },
                         y: {
                            display: false,
                         },
                    },
                    plugins: {
                        legend: {
                            display: false,
                            font: {
                                size: 30,
                            }
                        }
                    }
                }
            });