import { Clock } from "./Clock";
import { Counter } from "./Counter";

export function App() {
    return (
        <div>
            <Counter decrementAmount={1} initialValue={0} />
            <Clock/>
        </div>
        
    );
}
