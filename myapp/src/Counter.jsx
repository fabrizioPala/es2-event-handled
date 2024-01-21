import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ decrementAmount = 1, initialValue = 0 }) {
    const [counter, setCounter] = useState(initialValue);

    function handleIncrementButton() {
        setCounter(prevValue => prevValue + 1);
    }

    function handleDecrementButton() {
        setCounter(prevValue => prevValue - decrementAmount);
    }

    function handleResetButton() {
        setCounter(initialValue);
    }

    return (
        <div>
            <CounterDisplay counter={counter} />
            <button onClick={handleIncrementButton}>Increment</button>
            <button onClick={handleDecrementButton}>Decrement</button>
            <button onClick={handleResetButton}>Reset</button>
        </div>
    );
}

    //Quando si chiama la funzione "setter" per aggiornare lo stato in React,
    // il parametro dovrebbe essere una funzione dato che lo stato in React potrebbe essere aggiornato.
    // utilizzando una funzione come argomento per il "setter", si ha la garanzia di lavorare con l'ultimo stato corrente. 