import { Observable } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { START_ADD_NEW } from "./actionTypes";
import { addNew } from "./actions";
import Notifications from "react-notification-system-redux";

function startAddNew(action$) {
    return action$
        .ofType(START_ADD_NEW)
        .pipe(debounceTime(500)) // simulate async delay for example for server request
        .flatMap(({ payload }) =>
            Observable.concat(
                Observable.of(addNew(payload.title)),
                Observable.of(
                    Notifications.success({ title: "Success", message: "Task added" })
                )
            )
        );
}
export default [startAddNew];
