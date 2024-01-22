import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { MouseClicker } from "./MouseClicker";

export function App() {
    return (
        <div>
            <Counter decrementAmount={1} initialValue={0} />
            <Clock/>
            <MouseClicker name={"one"}/>
        </div>
        
    );
}
