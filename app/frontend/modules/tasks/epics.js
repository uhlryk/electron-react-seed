import { Observable } from "rxjs";
import { push } from "react-router-redux";
import { ADD_NEW } from "./actionTypes";
import { LIST_ROUTE_PATH } from "./constants";

function onAddNew(action$) {
    return action$
        .ofType(ADD_NEW)
        .delay(2000) // simulate async delay for example for server request
        .switchMap(() => Observable.of(push(LIST_ROUTE_PATH)).delay(2000));
}
export default [onAddNew];
