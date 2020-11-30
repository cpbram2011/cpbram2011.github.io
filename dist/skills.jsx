import React from 'react';

import Chart from 'chart.js'

export default () => {
    React.useEffect(() => {
        const cvs = document.getElementById('myChart')
        const chart = new Chart(cvs, {
            type: 'radar',
            data: {
                labels: ['Coding', 'Debugging', 'TDD', 'Creativity', 'Communication', 'Physical Endurance', 'Charisma', 'Experience'],
                datasets: [{
                    data: [18, 19, 17, 19, 18, 8, 16, 14],
                    backgroundColor: 'rgba(0, 3, 150, 0.6)',
                }]
            },
            options: {
                scale: {
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 20
                    }

                },
                legend: {
                    display: false
                }
            }
        })
    })
    return (
        <div className="skills">
            <img className='sklogos' src="https://contrafact-seeds.s3.us-east-2.amazonaws.com/myLogos.jpg" alt="" srcset=""/>
            <canvas id="myChart" ></canvas>
    
        </div>
    )
}