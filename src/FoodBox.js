import {useEffect,useState} from 'react'
import FoodDetail from './FoodDetail'
import axios from '../src/util/customizeAxios'

const FoodBox =(props)=>{
    const [ValFood,SetValFood] = useState([])
    const [FoodOder,SetFoodOder] = useState([])
    
    useEffect(()=>{
        axios('/api/v1/getuser')
        
        .then( (val) =>{
            
            console.log(val);
            
            SetValFood(val)
        }     
            )
    },[])
    
    useEffect(()=>{
        props.turnblink('blink')
        
        var totalquantity=0
        props.SetFoodOderFlow([...FoodOder])
        for (let index = 0; index < FoodOder.length; index++) {
            const element = FoodOder[index];
            totalquantity+=element.Quantity
            
        }
        props.SetQuantityOder(totalquantity)
        setTimeout(()=>{
            props.turnblink('')
        },200)
    },[FoodOder])
   
    return(
        <div className='FoodBox'>
            {ValFood.map((item)=>{
                return(
                    <div key={item.id}>
                        <FoodDetail  id={item.id} name={item.name} price={item.price} description={item.description} image={item.image} ValFood={ValFood} SetFoodOder={SetFoodOder} FoodOder={FoodOder} />
                    </div>
                    
                )
            })}
        </div>    
    )
}
export default FoodBox