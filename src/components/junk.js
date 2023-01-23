{
    sections.map((i)=>
        <table  id="sectionCenter" border={1}>
           <tbody>
           <tr key={i}>
                <td style={{ width: 703, textAlign:"center",backgroundColor: "lightblue"}}>{i.selectedValue}</td>
            </tr>
           </tbody>
            {/* napravi go ova kako component vo drug i iskoristi <Section id key key.value/> */}
        </table>
    )}

{
userInfo.map((a) =>

<table border={1}>
<tbody>
    <tr key={a}>
        <td style={{ width:150, textAlign:"center"}} >{a.position}</td>
        <td style={{ width:200, textAlign:"center"}} >{a.name}</td>
        <td style={{ width:200, textAlign:"center"}} >{a.contact}</td>
        <td style={{ width:70, textAlign:"center"}} >{a.pickUp}</td>
        <td style={{ width:75, textAlign:"center"}} >{a.callTime}</td>
    </tr>
</tbody>
</table>

)
}
{
    second.map((c)=>
        <table id="sectionCenter" border={1}>
           <tbody>
           <tr key={c}>
                <td>{c.selectedValue}</td>
            </tr>
           </tbody>
            {/* napravi go ova kako component vo drug i iskoristi <Section id key key.value/> */}
        </table>
    )}

      /* { podatok === "AGENCY" ||  "PRODUCTION" || "DIRECTOR" || "AD's"|| "CAMERA"|| "LIGHTING" || "GRIP"
                                   || "SFX"|| "VFX"|| "HEALTH AND SAFETY"|| "ART DEPARTMENT"
                                   ? 
                                   
                                   
                                   
                                   */ 
                                   /*{proba?<button type="button" onClick={sectionSub}>Add New Section</button>:null}{!proba?<button type="button" onClick={sectionSub2}>Add New Section</button>:null} <br /> */


                                    // const sectionSub = (e) =>{
    //    if(proba== true) { e.preventDefault()
    //     const poz = {selectedValue}
    //     console.log(poz);
    //      setSections((tz)=>[...tz,poz])
    //      if(counter>2){
    //         setCounter(counter+1)
    //         console.log(counter);
    //      }
    //      else{
    //         setProba(!proba)
    //         console.log(proba);
    //      }}
    //      console.log("first Done");
         
    // }
    // const sectionSub2 = (e) =>{
    //     e.preventDefault()
    //     const poz = {selectedValue}
    //     console.log(poz);
    //      setSecond((td)=>[...td,poz])
    //     console.log(proba);
    // }

     // delete every second or third table row ama zaedno da se pecatat i vidi za delete

    // const submit = (e) =>{
    //     e.preventDefault()
    //     setUserInfo([selectedValue,position,name,contact,pickUp,callTime,])
    //     setSelectedValue("")
    //     setPosition("")
    //     setName("")
    //     setContact("")
    //     setpickUp("")
    //     setcallTime("")
    //     console.log(proba);
    //     console.log(storage);
        
    // }