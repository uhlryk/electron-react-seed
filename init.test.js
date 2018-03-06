import chai from "chai";
import dirtyChai from "dirty-chai";
import request from "supertest";
import sinon from "sinon";
import chaiShallowDeepEqual from "chai-shallow-deep-equal";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
global.Enzyme = Enzyme;
const expect = chai.expect;
global.expect = expect;
chai.use(dirtyChai);
chai.use(chaiShallowDeepEqual);
global.request = request;
global.sinon = sinon;
