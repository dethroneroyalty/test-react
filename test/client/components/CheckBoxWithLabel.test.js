import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import CheckBoxWithLabel from "../../../client/src/components/CheckBoxWithLabel";

describe("CheckBoxWithLabel", () => {
	it("changes the text after click", () => {
		// Render a checkbox with label  in the document
		const checkbox = shallow(<CheckBoxWithLabel labelOn="On" labelOff="Off" />);

		expect(checkbox.text()).equal("Off");

		checkbox.find("input").simulate("change");

		expect(checkbox.text()).equal("On");
	});
});
