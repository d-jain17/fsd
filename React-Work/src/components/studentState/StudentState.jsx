import React, {useState} from "react";
const StudentState= () =>{
const [count, setCount] = useState(100);
function increment(){
    setCount(count+4)
}
function decrement(){
    setCount(count-10)
}
return (
    <div>
<div>{count}</div>
<div>
    <button onClick={increment}>Do Increment</button>
</div>
<div>
<button onClick={decrement}>Do Decrement</button>

</div>
</div>
)

};
 export default StudentState;