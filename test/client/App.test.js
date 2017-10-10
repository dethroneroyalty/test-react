import chai, { expect } from "chai";
import chaiJestSnapshot from "chai-jest-snapshot";
import React from "react";
//import {BrowserRouter as Router, Link} from "react-router-dom";
import renderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";

chai.use(chaiJestSnapshot);

function Link({ page, children }) {
	return <a href={page}>{children}</a>;
}

function MyComponent() {
	return (
		<div>
			<span className="heading">Title</span>
			<span className="heading">Title</span>
		</div>
	);
}

const shallowRenderer = new ShallowRenderer();
shallowRenderer.render(<MyComponent />);
const result = shallowRenderer.getRenderOutput();

describe("Bullshit", function() {
	it("renders", () => {
		const tree = renderer
			.create(<Link page="http://www.facebook.com"> Facebook </Link>)
			.toJSON();
		expect(tree).to.matchSnapshot();
	});
});
