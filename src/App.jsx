import { useState } from "react";
import './App.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import Bpls from './Components/Bpls/Bpls'
import Bookmarks from './Components/BookMarks/Bookmarks'
import Footer from './Components/Footer/Footer'


function App() {
  const [coins, setCoins] = useState(0);

  const increaseCoins = () => {
    setCoins(coins + 600000);
  };

  return (
    <>
      <div>
        <Header coins={coins} />
        <Banner increaseCoins={increaseCoins} />
      </div>
      <Bpls></Bpls>
      <Bookmarks></Bookmarks>
      <Footer></Footer>

    </>
  )
}

export default App
