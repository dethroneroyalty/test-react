import React from "react";
import renderer from "react-test-renderer";
import { expect } from "chai";
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
//import sinon from "sinon";
import jsdomGlobal from "jsdom-global";

import Counter from "../../../client/src/components/Counter";

describe("Counter", () => {
	let component;
	let cleanupDom;

	beforeEach(() => {
		cleanupDom = jsdomGlobal(`<div id="root"></div>`);
		component = mount(<Counter />);
	});

	afterEach(() => {
		cleanupDom();
	});

	it("initial value is 0", function() {
		expect(component.find(".count").text()).to.be.equal("0");
	});

	it("increment counter", function() {
		//const component = renderer.create(<Counter />);
		//let tree = component.toJSON();

		component.find(".increment").simulate("click");
		expect(toJSON(component)).to.matchSnapshot();
		component.find(".increment").simulate("click");
		expect(toJSON(component)).to.matchSnapshot();
		component.find(".increment").simulate("click");
		expect(toJSON(component)).to.matchSnapshot();

		expect(component.find(".count").text()).to.be.equal("3");
	});

	it("increment counter", function() {
		//const component = renderer.create(<Counter />);
		//let tree = component.toJSON();

		component.find(".decrement").simulate("click");
		expect(toJSON(component)).to.matchSnapshot();
		component.find(".decrement").simulate("click");
		expect(toJSON(component)).to.matchSnapshot();
		component.find(".decrement").simulate("click");
		expect(toJSON(component)).to.matchSnapshot();

		expect(component.find(".count").text()).to.be.equal("-3");
	});

	it("increment->decrement/decrement->increment is idempotent", () => {
		// increment->decrement
		component.find(".increment").simulate("click");
		component.find(".decrement").simulate("click");

		expect(component.find(".count").text()).to.be.equal("0");
		expect(toJSON(component)).to.matchSnapshot();

		// decrement->increment
		component.find(".decrement").simulate("click");
		component.find(".increment").simulate("click");

		expect(component.find(".count").text()).to.be.equal("0");
		expect(toJSON(component)).to.matchSnapshot();
	});
});
