import CricketLogo from '../../assets/logo-footer.png'
import './Footer.css'

const Footer = () => {
    return (
        <div>


            <footer className='bg-black pt-8'>

                <div className='CricketLogo py-8'>
                    <img src={CricketLogo} alt="" />
                </div>

                <div className='max-w-7xl mx-auto flex justify-between gap-12 py-2 border-b'>
                    <div>
                        <h2 className='text-white py-3'>About US</h2>
                        <p className='text-sm w-56 text-emerald-600'>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div>
                        <nav>
                            <h2 className='text-white'>Quick Links</h2>

                            <ul className='text-emerald-600 text-sm py-3'>
                                <li><a href="">Home</a></li>
                                <li><a href="">Service</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <form>
                            <h6 className="text-white py-3">Subscribe</h6>
                            <fieldset className="text-emerald-600 w-80">
                                <label>Enter your email address</label>
                                <div className="join py-2">
                                    <input
                                        type="text"
                                        placeholder="username@site.com"
                                        className="input input-bordered join-item" />
                                    <button className="btn btn-primary join-item">Subscribe</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <div>
                    <p className='text-emerald-600 text-center py-2'>@2025 Your Company All Rights Reserved.</p>
                </div>
            </footer >


        </div >

    );
};

export default Footer;

