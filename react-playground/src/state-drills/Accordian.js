import React from 'react';
import './Accordian.css';

class Accordian extends React.Component {
    static defaultProps = { sections: [ { title: false } ] }
    state = {
        activeSection: null
    };

    handleButtonClick(i) {
        this.setState({ activeSection: i })
    }

    renderContent() {
        const currentSection = this.props.sections[this.state.activeSection]
        return (
            <p>{currentSection.content}</p>
        )
    }
    
    renderButton(section, i) {
        return (
            <button onClick={() => this.handleButtonClick(i)}>
                {section.title}
            </button>
        )
    }

    renderList() {
        return this.props.sections.map((section, i) => (
            <li key={i}>
                {!!this.props.sections[0].title && this.renderButton(section, i)}
                {this.state.activeSection === i && this.renderContent()}
            </li>
        ))
    }

    render() {
        return (
            <ul className='listContainer'>
                {this.renderList()}
            </ul>
        )
    }
}

export default Accordian;