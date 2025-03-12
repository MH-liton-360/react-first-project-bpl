import './Bpls.css'

import { useState } from "react";
import { useEffect } from "react";
import Bpl from "../Bpl/Bpl";

const Bpls = () => {

    const [bpls, setBpls] = useState([]);

    useEffect(() => {
        fetch('bpls.json')
            .then((res) => res.json())
            .then((data) => setBpls(data))

    }, [])

    return (
        <div>
            <div className="max-w-7xl mx-auto flex justify-between items-center py-10">
                <h2 className="font-bold text-xl py-10">Available Players</h2>
                <ul className='flex gap-1'>

                    <button class="btn btn-soft btn-warning items-center">Available</button>
                    <button class="btn btn-soft btn-warning items-center">Selected</button>

                </ul>
            </div>
            <div className="Dreams-container max-w-7xl mx-auto">
                {
                    bpls.map(bpl => <Bpl
                        key={bpl.id}
                        bpl={bpl}
                    ></Bpl>)
                }
            </div>
        </div>
    );
};

export default Bpls;