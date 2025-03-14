import './Select.css'


const Selected = ({ selectedBpl }) => {
    const { author_image, author_name, role } = selectedBpl;


    return (

        <div className="max-w-7xl mx-auto">


            <div className="flex gap-3 py-3 border-b border-amber-500">
                <img className="h-16 w-16 rounded-xl" src={author_image} alt="" />
                <div>
                    <h2 className='text-lg font-bold'>{author_name}</h2>
                    <h3 className='font-medium '>{role} </h3>
                </div>
            </div>

        </div>

    );
};

export default Selected;