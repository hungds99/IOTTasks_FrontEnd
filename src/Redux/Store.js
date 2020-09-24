// Redux
import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

// Reducer
import modelReducer from './Reducers/ModelReducer';


const initialSate = {}

const middleware = [thunk]

const reducers = combineReducers({
    model: modelReducer
})

const store = createStore(
    reducers,
    initialSate,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store;

