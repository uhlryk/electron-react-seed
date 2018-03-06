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

    xdescribe("when action is addNew", () => {
        const inputState = {};
        const action = actions.addNew();

        it("should add task to state", () => {
            const outputState = reducer(inputState, action);
            expect(outputState).to.be.eql({
                tasks: []
            });
            expect(outputState !== inputState).to.be.true();
        });
    });
});
