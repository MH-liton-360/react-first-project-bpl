import { useState } from "react";
import './App.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import Bpls from './Components/Bpls/Bpls'
import Bookmarks from './Components/BookMarks/Bookmarks'
import TransitionFooter from "./Components/Transition-footer/TransitionFooter";
import Footer from './Components/Footer/Footer'


function App() {
  const [coins, setCoins] = useState(0);

  console.log(typeof (setCoins));

  const increaseCoins = () => {
    let upDated = (coins + 600000);
    setCoins(upDated);
  };

  return (
    <>
      <div>
        <Header coins={coins} />
        <Banner increaseCoins={increaseCoins} />
      </div>
      <Bpls coins={coins} setCoins={setCoins} ></Bpls>
      <Bookmarks></Bookmarks>
      <TransitionFooter></TransitionFooter>
      <Footer></Footer>

    </>
  )
}

export default App
