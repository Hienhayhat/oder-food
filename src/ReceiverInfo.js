import { useState } from "react";
const ReceiverInfo = (props) => {
    const [wrongname, inspectwrongname] = useState(false)
    const [wrongstreet, inspectwrongstreet] = useState(false)
    const [wrongpostalcode, inspectwrongpostalcode] = useState(false)
    const [wrongcity, inspectwrongcity] = useState(false)
    const [Name,SetName]=useState('')
    const [Street,SetStreet]=useState('')
    const [Postalcode,SetPostalcode]=useState('')
    const [City,SetCity]=useState('')
    const CancelOder = () => {
        props.SetStatusReceiverInfo(false)
    }
    const GetName=(e)=>{

        SetName(e.target.value)
    }
    const GetStreet=(e)=>{
        SetStreet(e.target.value)
    }
    const GetPostalcode=(e)=>{
        SetPostalcode(e.target.value)
        console.log(Postalcode.length);
    }
    const GetCity=(e)=>{
        SetCity(e.target.value)
    }
    const Confirm=()=>{
        if(Name==''){
            inspectwrongname(true)
        }else{
            inspectwrongname(false)
        }
        
        if(Street==''){
            inspectwrongstreet(true)
        }else{
            inspectwrongstreet(false)
        }
        if(Postalcode.length<5){
            inspectwrongpostalcode(true)
        }else{
            inspectwrongpostalcode(false)
        }
        if(City==''){
            inspectwrongcity(true)
        }else{
            inspectwrongcity(false)
        }
    }    
    return (
        <div className="ReceiverInfo">
            <div className="Info">
                <div className="name">
                    {!wrongname&&<span>Your name</span>}
                    {wrongname && <span style={{color:'red'}}>Your name</span> }
                    {!wrongname&&<input type="text" onChange={GetName} value={Name}/>}
                    {wrongname && <input type="text" onChange={GetName} style={{border:'1px solid red'}}/> }
                    {wrongname && <span style={{color:'red'}}> Please enter a valid name !</span> }
                </div>
                <div>
                    {!wrongstreet&&<span>Your street</span>}
                    {wrongstreet && <span style={{color:'red'}}>Your street</span> }
                    {!wrongstreet&&<input type="text" onChange={GetStreet} value={Street}/>}
                    {wrongstreet && <input type="text" onChange={GetStreet} style={{border:'1px solid red'}}/> }
                    {wrongstreet&&<span style={{color:'red'}}> Please enter a valid Street !</span>}
                </div>
                <div>
                    {!wrongpostalcode &&<span>Your Postalcode</span>}
                    {wrongpostalcode && <span style={{color:'red'}}>Your Postalcode</span> }
                    {!wrongpostalcode &&<input type="text" onChange={GetPostalcode} value={Postalcode}/>}
                    {wrongpostalcode && <input type="text" onChange={GetPostalcode} style={{border:'1px solid red'}}/> }
                    {wrongpostalcode &&<span style={{color:'red'}}>Please enter a valid Postal code !(5 characters long)</span>}
                </div>
                <div>
                    {!wrongcity&&<span>Your City</span>}
                    {wrongcity && <span style={{color:'red'}}>Your City</span> }
                    {!wrongcity&&<input type="text" onChange={GetCity} value={City}/>}
                    {wrongcity && <input type="text" onChange={GetCity} style={{border:'1px solid red'}}/> }
                    {wrongcity&&<span style={{color:'red'}}>Please enter a valid City !</span>}
                </div>
            </div>
            <button className="BtnCancel" onClick={CancelOder}>Cancel</button>
            <button className="BtnConfirm" onClick={Confirm}>Confirm</button>
        </div>
    )

}
export default ReceiverInfo;