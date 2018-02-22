import React from "react";
import { MemoryRouter, Route, Link } from "react-router-dom";
import ExampleParent from "./components/exampleParent/ExampleParent";
import ExampleSecond from "./components/exampleSecond/ExampleSecond";
export default class App extends React.Component {
    render() {
        return (
            <MemoryRouter>
                <div>
                    <h2>Welcome to React!</h2>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/second/test">Second Page</Link>
                        </li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={ExampleParent} />
                    <Route path="/second/:pageId" component={ExampleSecond} />
                </div>
            </MemoryRouter>
        );
    }
}
