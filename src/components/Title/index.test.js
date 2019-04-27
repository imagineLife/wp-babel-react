import React from "react"
import ReactDOM from "react-dom"
import Title from "./index"
import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

configure({ adapter: new Adapter() })

describe('<Title />', () => {
	it('passes address PROP to text', () => {
		const thisTitle = shallow(<Title text={'testText'}/>)
		expect(thisTitle.find('h3').text()).toBe('testText')
	})
	/*
		using SetProps
		https://airbnb.io/enzyme/docs/api/ShallowWrapper/setProps.html#setpropsnextprops-callback--self
		Takes an object, passes as new props to component
		causes re-render
		tests how component will behave with changing props
		calls componentWillRecieveProps on a class component
		re-renders on this functional component
	*/
	describe('handles conditional render prop-driven updates', () => {
		it('Updates From firstVal to secondVal', () => {
			const thisTitle = shallow(<Title text={'firstVal'}/>)
			expect(thisTitle.find('h3').text()).toBe('firstVal')

			thisTitle.setProps({text: 'secondVal'})
			expect(thisTitle.find('h3').text()).toBe('secondVal')
		})
	})

})