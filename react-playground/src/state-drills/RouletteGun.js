import React from 'react';

class RouletteGun extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }
    }

    static defaultProps = {
        bulletInChamber: 8
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    handleButton = () => {
        this.setState({
            spinningTheChamber: true,
        })
        this.timeout = setTimeout(() => {
            const random = Math.floor(Math.random() * 8) + 1
            console.log(random)
            this.setState({
                chamber: random,
                spinningTheChamber: false
            })
        }, 2000)
    }

    renderDisplay() {
        const { chamber, spinningTheChamber } = this.state
        const { bulletInChamber } = this.props
        if (spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger! ...'
        } else if (chamber === bulletInChamber) {
            return 'BANG!!!!!'
        } else {
            return 'you\'re safe!'
        }
    }

    render() {
        return (
            <div>
                <p>{this.renderDisplay()}</p>
                <button onClick={this.handleButton}>
                    Pull the trigger!
                </button>
            </div>
        )
    }
}

export default RouletteGun;