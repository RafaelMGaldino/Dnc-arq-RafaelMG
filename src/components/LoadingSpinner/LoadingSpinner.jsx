import { Link } from 'react-router-dom';
import LoadingSpinnerGif from '../../assets/loading-spinner.gif';
import './LoadingSpinner.css';

function LoadingSpinner () {
  return (
     <div className="loading-overlay-container d-flex al-center jc-center">
       <img src={LoadingSpinnerGif} alt='Loading' height="80px"/>
    </div>
  );
}

export default LoadingSpinner;