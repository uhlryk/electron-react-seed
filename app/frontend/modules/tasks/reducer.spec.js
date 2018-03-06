import reducer from "./reducer";
import * as actions from "./actions";

describe("tasks.reducer", () => {
    describe("when action has non known type", () => {
        const inputState = {};
        const action = {
            type: "UNKNOWN_TYPE"
        };

        it("should be equal to input state with defaults", () => {
            const outputState = reducer(inputState, action);
            expect(outputState).to.be.eql({
                tasks: []
            });
            expect(outputState !== inputState).to.be.true();
        });
    });

    describe("when action is addNew and input state is empty", () => {
        const inputState = {};
        const action = actions.addNew("some title");

        it("should add task to state", () => {
            const outputState = reducer(inputState, action);
            expect(outputState).to.shallowDeepEqual({
                tasks: [
                    {
                        title: "some title"
                    }
                ]
            });
            expect(outputState !== inputState).to.be.true();
        });
    });
    describe("when action is addNew and input state has tasks", () => {
        const inputState = {
            tasks: [
                {
                    id: "12345",
                    title: "old one"
                }
            ]
        };
        const action = actions.addNew("some title");

        it("should add task to state", () => {
            const outputState = reducer(inputState, action);
            expect(outputState).to.shallowDeepEqual({
                tasks: [
                    {
                        id: "12345",
                        title: "old one"
                    },
                    {
                        title: "some title"
                    }
                ]
            });
            expect(outputState !== inputState).to.be.true();
        });
    });
});
