import chaiJestSnapshot from "chai-jest-snapshot";
import chai from "chai";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

before(() => {
	configure({ adapter: new Adapter() });
	chai.use(chaiJestSnapshot);
	chaiJestSnapshot.resetSnapshotRegistry();
});

beforeEach(function() {
	chaiJestSnapshot.configureUsingMochaContext(this);
});
