import chai from "chai";
import dirtyChai from "dirty-chai";
import request from "supertest";
import sinon from "sinon";

const expect = chai.expect;
global.expect = expect;
chai.use(dirtyChai);
global.request = request;
global.sinon = sinon;
