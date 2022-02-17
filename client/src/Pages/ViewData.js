

import axios from 'axios'
import React, { useEffect, useState } from 'react'

import './ViewData.css'

function ViewData() {

    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            const response = await axios.get("http://localhost:8080/form-data")
            setData(response.data)
        })()
    }, [data])

    return (
        <div>

            <table style={{color:"white",margin:'100px',border: "1px solid white",minWidth:"500px"}}>
                <tbody>

                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>details</th>
                    </tr>
                    {
                        data.map((doc, key) => {
                            return (


                                <tr key={key}>
                                    <td>{doc.name}</td>
                                    <td>{doc.email}</td>
                                    <td>{doc.details}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    )
}

export default ViewData