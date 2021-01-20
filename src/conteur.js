import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';




import { Button, Badge } from "react-bootstrap";

class Counter extends React.Component {
    constructor() {
        console.log("Contructor ()");
        super();
        this.state = {
            counter: 0,
            timer: 0,
            intervall: null,
        };
    }

    componentDidMount() {
        console.log("Component Did Mount ()");
        console.log(this.state.intervall);
        this.setState({
            intervall: setInterval(
                () => this.setState({ timer: this.state.timer + 1 }),
                1000
            ),
        });
    }

    componentDidUpdate() {
        console.log("Component Did Update ()");
        // console.log(this.state.intervall);
    }

    componentWillUnmount() {
        console.log("Component Will Unmount ()");
        clearInterval(this.state.intervall);
    }

    reset = () => {
        this.setState({
            counter: 0,
        });
    };

    render() {
        console.log("render () ");
        return (
            <>

                <Badge variant="secondary" className="timer">
                    Temps Ecoulée
        </Badge>

                <p>{this.state.timer}</p>
            </>
        );
    }
}

export default Counter;