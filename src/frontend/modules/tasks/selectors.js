import { createSelectorCreator, defaultMemoize } from "reselect";
import _ from "lodash";

const createDeepEqualSelector = createSelectorCreator(defaultMemoize, _.isEqual);

export const getTasks = createDeepEqualSelector(state => state.tasks, tasks => tasks);
export const findTask = createDeepEqualSelector(
    state => state.tasks,
    (state, props) => props.match.params.taskId,
    (tasks, taskId) => tasks.find(task => task.id === taskId)
);
