import CricketLogo from '../../assets/logo.png'
import { FaCoins } from 'react-icons/fa';


const Header = ({ coins }) => {

    return (
        <div className='max-w-7xl mx-auto flex justify-between items-center py-5'>
            <div><img src={CricketLogo} alt="" /></div>
            <div>
                <ul className='flex gap-3'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Fixture</a></li>
                    <li><a href="">Teams</a></li>
                    <li><a href="">Schedules</a></li>
                    <div className='flex gap-1 border-2 rounded-md border-amber-100 px-2'><p>{coins} Coin</p>
                        <button><FaCoins></FaCoins></button>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Header;