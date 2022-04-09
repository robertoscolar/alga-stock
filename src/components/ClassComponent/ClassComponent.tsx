import React from "react";

class ClassComponent extends React.Component<{name: string}> {
    state = {
        name:'ola'
    }

    render() {
        return <div>
            <p>name: {this.state.name}</p>

            <button onClick={ () => {
                this.setState({ name: 'Roberto'})
            }}>Click me </button>       
        </div>
    }
}

export default ClassComponent;