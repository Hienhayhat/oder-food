import Itemoder from "./itemoder";
import { useState,useEffect } from "react";
import ReceiverInfo from "./ReceiverInfo";
const BoxOder = (props) => {
    const [ListItemOder,SetListItemOder]=useState([])
    const [TotalAmount,SetTotalAmount]=useState(0)
    const [StatusReceiverInfo,SetStatusReceiverInfo] = useState(false)
    
    const HandleClose = () => {
        props.SetTurnBoxOder(false);
        
    }
    const TurnReceiverInfo=()=>{
       
        if(ListItemOder.length==0){
            SetStatusReceiverInfo(false)
        }else{
            SetStatusReceiverInfo(true)
        }
        
         
    }
   
    useEffect(()=>{
        SetListItemOder(props.FoodOderFlow.filter((item)=>{
            return(item.Quantity>0)
        }))
        
    },[props.FoodOderFlow])
    useEffect(()=>{
        var sum=0
        var totalquantity = 0
        
        for (let index = 0; index < ListItemOder.length; index++) {
            const element = ListItemOder[index];
            sum+=element.Quantity*element.Price
            totalquantity+=element.Quantity
        }
        
        props.SetQuantityOder(totalquantity)
        SetTotalAmount(Math.round(sum))
    },[ListItemOder])
    if(StatusReceiverInfo){
        return(
            <div className="boxoder">
                <div className="mainboxoder">
                    <div className="listitem" style={{maxHeight:121}}>
                        {ListItemOder.map((item) => {
                            return (
                                <div key={item.Id}> 
                                    <Itemoder Name={item.Name} Price={item.Price} Quantity={item.Quantity} Id={item.Id} ListItemOder={ListItemOder} SetListItemOder={SetListItemOder}/>
                                </div>
                               
                            )
    
                        })}
                    </div>
                    <span className="TextTotalAmount" style={{top:130}}>Total Amount :</span>
                    <span className="TotalAmount" style={{top:130}}>{TotalAmount}$</span>
                    <ReceiverInfo SetStatusReceiverInfo={SetStatusReceiverInfo}/>
                </div>
            </div>
    )
    }
    return (
        <div className="boxoder">
            <div className="mainboxoder">
                <div className="listitem" >
                    {ListItemOder.map((item) => {
                        return (
                            <div key={item.Id}> 
                                <Itemoder Name={item.Name} Price={item.Price} Quantity={item.Quantity} Id={item.Id} ListItemOder={ListItemOder} SetListItemOder={SetListItemOder}/>
                            </div>
                           
                        )

                    })}

                </div>
                <span className="TextTotalAmount">Total Amount :</span>
                <span className="TotalAmount">{TotalAmount}$</span>
                <button className="BtnClose" onClick={HandleClose}>Close</button>
                
                <button className="BtnOder" onClick={TurnReceiverInfo}>Oder</button>
            </div>
        </div>
    )
}
export default BoxOder;