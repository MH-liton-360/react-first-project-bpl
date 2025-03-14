import './Bpls.css'

import { useState } from "react";
import { useEffect } from "react";
import Bpl from "../Bpl/Bpl";
import Selected from '../Selected/Selected';

const Bpls = ({ coins, setCoins }) => {

    const [bpls, setBpls] = useState([]);
    const [selected, setSelected] = useState([]);

    const [showSelected, setShowSelected] = useState(false);

    const handleShowSelected = () => {
        setShowSelected(true);
    }

    const handleAvailableSelected = () => {
        setShowSelected(false);
    }

    console.log("Choose select", selected);


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

                    <button className="btn btn-outline btn-success w-32" onClick={handleAvailableSelected}>Available</button>
                    <button className="btn btn-outline btn-success w-32" onClick={handleShowSelected}>Selected</button>

                </ul>
            </div>
            {
                !showSelected && <div className="Dreams-container max-w-7xl mx-auto">
                    {
                        bpls.map(bpl => <Bpl
                            key={bpl.id}
                            bpl={bpl}
                            coins={coins}
                            setCoins={setCoins}
                            setSelected={setSelected}
                        ></Bpl>)
                    }
                </div>
            }

            <div>
                {
                    showSelected &&
                    selected.map(selectedBpl => <Selected
                        key={selectedBpl.id}
                        selectedBpl={selectedBpl}
                    ></Selected>)
                }
            </div>
        </div>
    );
};

export default Bpls;