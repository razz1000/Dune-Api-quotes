import React, { useEffect, useState } from "react";
import DuneTable from "./DuneTable"


let Homepage = () => { 

    let [duneQuotes, setDuneQuotes] = useState([])


    useEffect(() => {
        fetchDuneQuotes()
    }, [])


    let fetchDuneQuotes = async () => {
        try {
            let response = await fetch("https://the-dune-api.herokuapp.com/quotes/50")
                        let parsedBody = await response.json()
            console.log(parsedBody)
            if(response.ok) {
                setDuneQuotes(parsedBody)
            }
                
        } catch (error) {
            console.log(error)
        }

    }



    return (
        <div>
            <h1>List of quotes from the movie Dune</h1>
            <DuneTable duneQuotes={duneQuotes}/>
        </div>
    )
}

export default Homepage