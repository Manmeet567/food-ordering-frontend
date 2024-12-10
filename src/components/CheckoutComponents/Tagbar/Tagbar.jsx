import left from '../../../assets/arrow-left.png';
import './Tagbar.css';
import { useNavigate } from 'react-router-dom';

function Tagbar({tag}) {
    const navigate = useNavigate();
  return (
    <div className='tagbar'>
        <img src={left} alt="left-arrow" onClick={() => navigate(-1)} />
        <span>{tag}</span>
    </div>
  )
}

export default Tagbar