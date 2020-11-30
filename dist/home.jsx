import React from 'react';
export default () => {
    React.useEffect(() => {
        const home = document.querySelector('.home');
        home.classList.add('animate2');
        home.classList.remove('hidden');
        console.log(home.classList)
    })
    
    return (
        <div className="home hidden">
            <h1>Christopher Bram</h1>
            <h2>Full-Stack Web Developer</h2>
            <img src ='https://contrafact-seeds.s3.us-east-2.amazonaws.com/20201123_141535.jpg' className='prof-pic'></img>
        </div>
    )
}