import React from "react";
import PropTypes from 'prop-types'

export const TableWrapper = ({funkcija2}) =>{
    return(
        <div>
                 {
                funkcija2.map((i) =>{
                    return(
                        <table id="table2" border={1}>
                        <tbody key={i}>
                            <tr >
                                <td  style={{ width:150, textAlign:"center"}} >{i.position}</td>
                                <td  style={{ width:200, textAlign:"center"}} >{i.name}</td>
                                <td  style={{ width:200, textAlign:"center"}} >{i.contact}</td>
                                <td  style={{ width:70, textAlign:"center"}} >{i.pickUp}</td>
                                <td  style={{ width:75, textAlign:"center"}} >{i.callTime}</td>
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

