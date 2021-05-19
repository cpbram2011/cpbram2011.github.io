import logo from './logo.svg';
import './App.scss';
import Header from './components/header';
import Middle from './components/middle';
import video from './video.mp4';

function App() {
  return (
    <div className="App">
      <video className='videoTag' autoPlay loop muted>
            <source src={video} type='video/mp4' />
      </video>  
      <Header />
      <Middle />
    </div>
  );
}

export default App;
