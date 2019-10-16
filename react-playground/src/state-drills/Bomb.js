import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            count: 0, 
            display: 'tick'
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.state.count++
            if (this.state.count % 2 === 0 && this.state.count < 8 ) {
                this.setState({
                    display: 'tick'
                })
            } else if (this.state.count % 2 !== 0 && this.state.count < 8) {
                this.setState({
                    display: 'tock'
                })
            } else if (this.state.count >= 8) {
                this.setState({
                    display: 'BOOM!!!!'
                })
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                <p>{this.state.display}</p>
            </div>
        )
    }
}

export default Bomb;