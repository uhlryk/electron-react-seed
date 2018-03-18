import React from "react";
import Element from "./Element.jsx";

describe("<Element />", () => {
    it("should render title", () => {
        const wrapper = Enzyme.shallow(<Element title="some title" id="12345" onDelete={() => {}} t={input => input}/>);
        expect(wrapper.contains(<div>some title</div>)).to.equal(true);
    });
});
