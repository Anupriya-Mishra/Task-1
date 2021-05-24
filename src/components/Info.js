import React,{useState,useEffect} from 'react'
import firebase from "firebase";
import {db} from "../firebase"

function Info(props) {
    const initialvalues={
        fullName:'',
        weight:'',
        time:''
    }
    var [values,setValues]=useState(initialvalues);
    const [name,setName]=useState("");
    const [weight,setWeight]=useState("");

    const submit=(e)=>
    {
        e.preventDefault();
        db.collection("weights").add({
            name:name,
            weight:weight,
            time:firebase.firestore.FieldValue.serverTimestamp()
        })
    }

    return (
        <form>
  <div class="form-group">
    <label >Name</label>
    <input class="form-control" placeholder="Enter Your Name" name="fullName" value={name} onChange={(e)=>setName(e.target.value)} />
    <label >Weight</label>
    <input class="form-control" placeholder="Enter Your Weight" name="weight" value={weight} onChange={(e)=>setWeight(e.target.value)} />
    <small class="form-text text-muted">Click on Submit to view the updated list of Weights.</small>
  </div>
  
  
  <button type="submit" class="btn btn-primary" onClick={submit}>Submit</button>
</form>
    )
}

export default Info
