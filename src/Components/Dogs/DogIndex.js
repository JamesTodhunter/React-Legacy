import React, { Component } from "react";
import { Button } from 'reactstrap';

export default class DogIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: ""
        }
    }

    componentDidMount() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    url: data.message
                })
            })
    }

    render() {
        return (
            <div>
                <Button outline color="secondary" onClick={e => this.componentDidMount(e)}>Dog eat Dog!</Button>
                <br />
                <img src={this.state.url} alt="" />
                <br />
            </div>
        )
    }
}