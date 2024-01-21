import { useState } from "react"

export function Counter(){
    const [counter,setCounter]=useState(0)
    function handleIncrementButton() {
        setCounter(prevValue => prevValue + 1);
    }
    
    
    return (
        <div>
            <h2>I've Counted to {counter}</h2>
            <button onClick={handleIncrementButton}>Increment</button>
              
             </div>
    )
    }
    //Quando si chiama la funzione "setter" per aggiornare lo stato in React,
    // il parametro dovrebbe essere una funzione dato che lo stato in React potrebbe essere aggiornato.
    // utilizzando una funzione come argomento per il "setter", si ha la garanzia di lavorare con l'ultimo stato corrente. 