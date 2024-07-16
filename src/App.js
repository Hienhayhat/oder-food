import FoodBox from "./FoodBox";
import { FaCartShopping } from "react-icons/fa6";
import { useEffect, useState } from "react";
import BoxOder from "./boxoder";
function App() {
  const [TurnBoxOder,SetTurnBoxOder]= useState(false);
  const [FoodOderFlow,SetFoodOderFlow]= useState([])
  const [QuantityOder,SetQuantityOder]=useState(0)
  const [blink,turnblink]=useState('')
  
  const HandleTurnBoxOder=()=>{
    SetTurnBoxOder(true);
  }
  
  return (
    <div className="App">
        <div className='header'>
              <h1>HienHayHo Company</h1>
               <div className={`Cart ${blink}`} onClick={HandleTurnBoxOder}>
                  <FaCartShopping/>
                  Your Cart
                  <div> {QuantityOder} </div>
              </div>
        </div>
        {TurnBoxOder && <BoxOder SetTurnBoxOder={SetTurnBoxOder} FoodOderFlow={FoodOderFlow} SetQuantityOder={SetQuantityOder}/> }
        <div className='main'>
              <div className='advertise'>
                  <h2>Delicious Food , Make To You Enjoy The Your Life</h2>
                  <p>Choose your favorite meal from our broad selection of avalble meals and enjoy a delicious 
                    lunch or dinner at home</p>
                  <p>All our meals are cooked with high quality ingredients,just-in-time and of course by 
                    experienced chefs!</p>
              </div>
              <FoodBox SetFoodOderFlow={SetFoodOderFlow} SetQuantityOder={SetQuantityOder} turnblink={turnblink}/>
        </div>
     
    </div>
  );
}

export default App;
