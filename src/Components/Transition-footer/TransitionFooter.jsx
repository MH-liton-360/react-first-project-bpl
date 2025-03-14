import './TransitionFooter.css'

const TransitionFooter = () => {
    return (
        <div>
            <footer className="extra max-w-5xl mx-auto translate-y-14 h-80 rounded-xl">

                <form className='Transition py-24 '>
                    <h6 className="text-2xl font-bold">Subscribe to Our Newsletter</h6>
                    <p className='text-sm'>Get the latest updates and news right in your inbox!</p>


                    <div className='flex gap-2 py-2'>
                        <input type="text" name="" id="" placeholder='Enter Your Email' className="input input-bordered  rounded-xl px-10" />
                        <button className="btn btn-primary join-item  rounded-xl">Subscribe</button>

                    </div>

                </form>
            </footer>
        </div>
    );
};

export default TransitionFooter;