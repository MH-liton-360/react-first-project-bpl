import './Banner.css'
import bgLogo from '../../assets/banner-main.png'

const Banner = ({ increaseCoins }) => {
    return (
        <div className='background max-w-7xl mx-auto py-10'>
            <div className='logo py-3'><img src={bgLogo} alt="" /></div>
            <div className='text-center'>
                <p className='text-white font-bold text-3xl'>Assemble Our Ultimate Dream 11 Cricket Team</p>
                <p className='text-blue-400 py-3'>Beyond Boundaries Beyond Limits</p>
                <button className="btn btn-soft btn-warning items-center" onClick={() => {
                    increaseCoins();
                }}>Warning</button>
            </div>
        </div>
    );
};

export default Banner;