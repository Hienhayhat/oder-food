import { useState,useEffect } from "react";
var arr= [{}]
const FoodDetail = (props) => {
    
    const [Quantity, SetQuantity] = useState(0)
    const [Name, SetName] = useState()
    const [Price, SetPrice] = useState()
    const [Id,SetId]=useState()
    const [add,setadd]=useState(0)   
    const GetQuantity = (e) => {
        
        SetQuantity(Number(e.target.value));
    }
  
    const AddItem = () => {
        
        arr = props.ValFood.filter((item) => {
            return (item.id == props.id)
        })
        SetName(arr[0].name)
        SetPrice(arr[0].price)
        SetId(props.id)
        if (add==10){
            setadd(0)
        }else{
            setadd(add+1)
        }
        
    }  
    useEffect(()=>{
        SetQuantity(0)
        props.SetFoodOder([...props.FoodOder,{Name:Name,Price:Price,Quantity:Quantity,Id:Id}]);
    },[add])
    return (
        <div key={props.id} className='FoodDetail'>
            <div className='Detail'>
                <span className='Name' >{props.name}</span>
                <span className='Description'>{props.description}</span>
                <span className='Price'>{props.price}$</span>
            </div>
            <img src={props.image}></img>
            <div className='linedeco'></div>
            <input type='number' onChange={GetQuantity} value={Quantity}/>
            <button onMouseDown={AddItem} >+ADD</button>
        </div>
    )
}
export default FoodDetail;