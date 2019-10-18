import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Accordian from './Accordian';

describe('Accordian component', () => {
    const sectionsProp = [
        {
            title: 'Section 1',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
            title: 'Section 2',
            content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
        },
        {
            title: 'Section 3',
            content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
        },
    ]
    it('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Accordian />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders an empty li when the sections prop is not supplied', () => {
        const wrapper = shallow(<Accordian />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders no sections active by default', () => {
        const wrapper = shallow(<Accordian sections={sectionsProp} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('opens a clicked section', () => {
        const wrapper = shallow(<Accordian sections={sectionsProp} />)
        wrapper.find('button').at(0).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('only opens one section at a time', () => {
        const wrapper = shallow(<Accordian sections={sectionsProp} />)
        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    
})