import React, { useEffect, useState } from "react";
import DuneTable from "./DuneTable"
import {Spinner} from "react-bootstrap"
import Loading from "./Loading"


let Homepage = () => { 

    let [duneQuotes, setDuneQuotes] = useState([])
    let [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetchDuneQuotes()
        setIsLoading(true)
    }, [])


    let fetchDuneQuotes = async () => {
        try {
            let response = await fetch("https://the-dune-api.herokuapp.com/quotes/50")
                        let parsedBody = await response.json()
            console.log(parsedBody)
            if(response.ok) {
                setDuneQuotes(parsedBody)
                setIsLoading(false)
            }
                
        } catch (error) {
            console.log(error)
        }

    }



    return (
        <div>
              
            <h1>List of quotes from the movie Dune</h1>
            <DuneTable duneQuotes={duneQuotes}/> 
            {isLoading && <Loading />}
        </div>
    )
}

export default Homepage