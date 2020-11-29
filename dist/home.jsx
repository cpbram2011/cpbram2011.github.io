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
                    data: [19, 19, 17, 18, 18, 8, 16, 14],
                    backgroundColor: 'rgba(0, 3, 150, 0.6)',
                }]
            },
            options: {
                scale: {
                    ticks: {
                        suggestedMin: 5,
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
        <div className="home">
            <h1>Christopher Bram</h1>
            <h2>Full-Stack Web Developer</h2>
            <img src ='https://contrafact-seeds.s3.us-east-2.amazonaws.com/20201123_141535.jpg' className='prof-pic'></img>
            <canvas id="myChart" ></canvas>
        </div>
    )
}