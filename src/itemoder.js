import { useState,useEffect } from "react";
const Itemoder = (props)=>{
    const [change,setchange]=useState(0)
    const HandleDecrease=()=>{
        for (let index = 0; index < props.ListItemOder.length; index++) {
            const element = props.ListItemOder[index];
            
            if(element.Id==props.Id){
                element.Quantity--
            }
        
        }
        if(change==10){
            setchange(0)
        }else{
            setchange(change+1)
        }
        
    }
    const HandleIncrease=()=>{
        for (let index = 0; index < props.ListItemOder.length; index++) {
            const element = props.ListItemOder[index];
            if(element.Id==props.Id){
                element.Quantity++
            }
        }
        if(change==10){
            setchange(0)
        }else{
            setchange(change+1)
        }
           


    }
    useEffect(()=>{
        props.SetListItemOder([...props.ListItemOder])
        props.SetListItemOder(props.ListItemOder.filter((item)=>{
            return(item.Quantity>0)
        }))
        
    },[change])
    return (
        <div className="item">
            <span className="name"> {props.Name}</span>
            <span className="price"> {props.Price}$</span>
            <span className="quantity"> x{props.Quantity}</span>
            <button className="decrease" onClick={HandleDecrease}> - </button>
            <button className="increase" onClick={HandleIncrease}> + </button>
            <div></div>
        </div>
        )
}
export default Itemoder;