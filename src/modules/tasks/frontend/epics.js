import { Observable } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { START_ADD_NEW } from "./epicActionTypes";
import { addNew } from "./actions";
import Notifications from "react-notification-system-redux";
import { NAME } from "./constants";
function startAddNew(action$) {
    return action$
        .ofType(START_ADD_NEW)
        .pipe(debounceTime(500)) // simulate async delay for example for server request
        .flatMap(({ payload }) =>
            Observable.concat(
                Observable.of(addNew(payload.title)),
                Observable.of(
                    Notifications.success({
                        title: NAME + ":notification.success.title",
                        message: NAME + ":notification.success.message"
                    })
                )
            )
        );
}
export default [startAddNew];
