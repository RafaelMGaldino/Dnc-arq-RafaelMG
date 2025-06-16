import './button.css';
import WhiteArrow from '../../assets/Vector.svg';

function Button ({ arrow, buttonStyle, children, ...props }) {
    return (
         <button className={`button ${buttonStyle}`} {...props}>
            {children} {arrow && <img src={WhiteArrow} alt="arrow"/>}
         </button>
    );
}

export default Button;
 