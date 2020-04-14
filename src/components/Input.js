import React, { Component } from 'react'

export default class Input extends Component {


    inputChange = (e) => {
        this.props.setUsername(e.target.value)
    }

    render() {
        return (
            <div>
                用户名: {this.props.username}
                <br />
                <input
                    name="username"
                    type="text"
                    value={this.props.username}
                    onChange={this.inputChange}
                />
            </div>
        )
    }
}
