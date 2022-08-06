import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

//создаем стор с помощью функции createstore
//принимает reducer и thunk для асинхронных экшенов
export const store = createStore(rootReducer, applyMiddleware(thunk));