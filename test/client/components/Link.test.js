import React from "react";
import chaiJestSnapshot from "chai-jest-snapshot";
import renderer from "react-test-renderer";
import { expect } from "chai";

import Link from "../../../client/src/components/Link";

describe("Link", () => {
	it("Link chages the state when hovered", function() {
		const component = renderer.create(
			<Link page="https://www.facebook.com">Facebook</Link>
		);

		let tree = component.toJSON();

		expect(tree).to.matchSnapshot();

		// manually trigger the callback
		tree.props.onMouseEnter();

		// rerendering
		tree = component.toJSON();
		expect(tree).to.matchSnapshot();

		// manually trigger the callback
		tree.props.onMouseLeave();
		// re-rendering
		tree = component.toJSON();
		expect(tree).to.matchSnapshot();
	});
});
