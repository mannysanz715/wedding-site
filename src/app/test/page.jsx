"use client"

import {db} from '../firebaseConfig.js';
import { collection, addDoc, getDocs} from 'firebase/firestore';
import { useState } from 'react';


async function getGuestList(){
  try {
    let guestList = await getDocs(collection(db, "potential-guests"))
    return guestList
  } catch (error) {
    console.log(error)
  }
}


async function addGuest(name, email, phone, extraguest, rsvp){
  try {
    const guest = await addDoc(collection(db, 'potential-guests'),{
      name: name,
      email: email,
      phone: phone,
      extraguest: extraguest,
      rsvp: rsvp,
    })
    console.log("Guest added with ID: ", guest.id)
    return true
  } catch (error) {
    console.log(error)    
  }
}



function Test(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [extraguest, setExtraguest] = useState('')
  const [rsvp, setRsvp] = useState('')
  const [guestList, setGuestList] = useState([])

  const handleGuestList = async ()=>{
    let guests = await getDocs(collection(db, "potential-guests"));
    guests.forEach(document =>{
      setGuestList(guestList => [...guestList, document.id])
    })
    console.log(guestList)
  }
  
  const handleCheck = (e) =>{
    console.log(e.target.value)
    if(e.target.value == 1){
      setRsvp(true)
    } else setRsvp(false)
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const added = await addGuest(name, email, phone, extraguest, rsvp)
    if(added){
      setName("")
      setEmail("")
      setPhone("")
      setExtraguest("")
      setRsvp("")

      console.log("Success")
    }
  }

  return(
    <>
      <h1>Hello Test</h1>

      <input className="text-black" placeholder="Name" type="text" value={name} id="name" onChange={(e) => setName(e.target.value)}/>
      <input className="text-black" placeholder="email" type="email" value={email} id="email" onChange={(e) => setEmail(e.target.value)}/>
      <input className="text-black" placeholder="phone" type="phone" value={phone} id="phone" onChange={(e) => setPhone(e.target.value)}/>
      <input className="text-black" placeholder="guest" type="text" value={extraguest} id="extraguest" onChange={(e) => setExtraguest(e.target.value)}/>
      <input className="text-black" type="checkbox" value="1" id="name" onChange={(e)=>handleCheck(e)}/>
      <button type="submit" onClick={handleSubmit}> Submit </button>


      <h1>Guest List</h1>

      <button onClick={handleGuestList}>
        Get List
      </button>

      {guestList ? guestList.map(guestId=>{
        <p className="text-white" key={guestId}>Guest Id:{guestId}</p>
      }
      ) : <h1 className="text-white">No Guests</h1>}
    </>
  )
}

export default Test;
