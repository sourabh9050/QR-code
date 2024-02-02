import React, { useState } from 'react'

const Card = () => {
const [input,setInput]=useState("")
const[qr,setqr]=useState()
const[isloading,setisLoading]=useState(false)

const getqrcode=async(e)=>{
    e.preventDefault()
    try{
        setisLoading(true)
        const res=await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input}`)
        console.log(res)

        setqr(res.url)
    }catch(error){
        console.log(error);
    } finally{
        setisLoading(false)
    }
}
  return (
<form className='form' onSubmit={getqrcode}>

    <h1 className='title' >QR Code Gernator</h1>

    <input type="text" className='input' value={input} onChange={(e)=>setInput(e.target.value)} required placeholder='Enter URL OR Text...' />

{isloading&& <div className='loading'><span></span>Loading...</div>}
{!isloading&&(qr? <img className='qr_code' src={qr} alt='qr_code'/>:
<div className='loading' >Gernate Amazing QR Code For You & Your Friend!</div>
)}
<input  type='submit' className='submit' value="Gernate QR Code" />

</form>
  )
}

export default  Card
