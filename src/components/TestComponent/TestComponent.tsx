import React, { useState } from "react";
import './TestComponent.css'

/*const TestComponent = (props : {name: string}) => (
    <div className="TestComponent">
        Olá, {props.name}!
    </div>
)*/

function TestComponent (props: {name:string}) {
    const [age, setAge] = useState(21)

    return <div className="TestComponent">
        Olá {props.name}, {age}
        <button onClick={ () => {
            setAge(age + 1)
        }}>+</button>
    </div>
}

export default TestComponent;