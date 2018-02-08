import chai from "chai";
const expect = chai.expect;
global.expect = expect;
import dirtyChai from "dirty-chai";
chai.use(dirtyChai);
import request from "supertest";
global.request = request;
import sinon from "sinon";
global.sinon = sinon;
