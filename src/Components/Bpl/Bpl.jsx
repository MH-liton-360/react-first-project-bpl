import './Bpl.css'
import { FaFlag } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";


const Bpl = ({ bpl }) => {
    const { author_image, author_name, country_name, role, batting_position, price } = bpl;

    return (
        <div >

            <div className="Dream">
                <img className='rounded-xl h-64 w-full' src={author_image} alt="" />

                <div className='flex gap-2 items-center'>
                    <p><IoPerson></IoPerson></p>
                    <h2 className='text-xl font-bold py-3'>{author_name}</h2>

                </div>

                <div className='flex justify-between border-b py-3'>
                    <div className='flex gap-2 items-center'>
                        <p>  <FaFlag></FaFlag> </p>
                        <h3>{country_name} </h3>
                    </div>

                    <button className='bg-blue-300 rounded-sm px-2'><a href="">All Rounder</a></button>

                </div>
                <h2 className='py-3 font-bold'>Rating</h2>
                <div className='flex justify-between'>
                    <h3 className='font-medium '>{role} </h3>
                    <h3>{batting_position} </h3>
                </div>
                <div className='flex justify-between'>
                    <h3 className='font-medium py-1'>{price} </h3>
                    <button className='bg-blue-300 rounded-sm px-2'><a href="">Choose Player</a></button>

                </div>
            </div>
        </div>




    );
};


export default Bpl;