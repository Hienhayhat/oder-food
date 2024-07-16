import {useEffect,useState} from 'react'
import FoodDetail from './FoodDetail'

const FoodBox =(props)=>{
    const [ValFood,SetValFood] = useState([])
    const [FoodOder,SetFoodOder] = useState([])
    
    useEffect(()=>{
        fetch('https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals')
        .then(respon => respon.json())
        .then( (val) =>{
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