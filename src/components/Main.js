import React, {useState,useEffect}from 'react'
import Info from './Info'
import {db} from "../firebase"
import ReactTimeago from 'react-timeago';

function Main() {
    var [weightObjects, setWeightObjects] = useState([])

    //Once components load complete
    useEffect(() => {
        db
      .collection("weights")
      .orderBy('time', 'desc')
      .onSnapshot((snapshot) =>
        setWeightObjects(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })))
      );
    }, [])
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <div className="row">
            <div className="col-md-5">
                 <Info />
            </div>
            <div className="col-md-7">
            <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>Name</th>
                                <th>Weight</th>
                                <th> Time </th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                weightObjects.map((key) => (
                                    <tr key={key}>
                                        <td>{key.post.name}</td>
                                        <td>{key.post.weight}</td>
                                        <td><ReactTimeago
                            date={new Date(key.post.time?.toDate()).toUTCString()}
                          /></td>
                                    </tr>
                                )
                                )
                            }
                        </tbody>
            </table>
            </div>
        </div>
    )
}

export default Main
