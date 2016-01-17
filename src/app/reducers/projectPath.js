export default function projectPath(state = { path: '' }, action) {
  switch (action.type) {
    case 'SET_DIRECTORY_PATH' :
      return {
        path: action || state.path
      }
    default :
      return state;
  }
};
