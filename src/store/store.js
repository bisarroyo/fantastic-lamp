import { createStore, applyMiddelware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducer from '../reducer/reducer';

const store = createStore(reducer);

// applyMiddelware(reduxThunk)

export default store;
