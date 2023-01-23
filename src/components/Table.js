import React from "react";
import PropTypes from 'prop-types'

export const Table = ({funkcija,sel}) =>{
    return(
        <div>
                        
            {
                funkcija.map((a) =>{
                   
                    return(
                        <table style={{backgroundColor: "black", border:"solid black 1px"}} border={1} id="table1" >
                      
                        <tbody >
                           <tr border={1}   className="useless" key={a}>
                                        <td  colSpan={5} style={{ textAlign:"center",backgroundColor: "white"}}>{a.selectedValue}</td>
                             </tr>
                            <tr style={{backgroundColor:"white", padding:0}} key={a}>
                            <td style={{ width:150, textAlign:"center"}} >{a.position}</td>
                            <td style={{width:200, textAlign:"center"}} >{a.name}</td>
                            <td style={{width:200, textAlign:"center"}} >{a.contact}</td>
                            <td style={{ width:70, textAlign:"center"}} >{a.pickUp}</td>
                            <td style={{ width:75, textAlign:"center"}} >{a.callTime}</td>
                            </tr>
                            </tbody>
                                
                    </table>
                    
                    )
                }
                
                    
                )
            }
        </div>
         
    )
}

