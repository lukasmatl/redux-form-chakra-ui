import React from 'react'
import {addDecorator} from '@storybook/react'
import {ChakraProvider} from '@chakra-ui/react'
import {reduxForm, reducer as formReducer} from 'redux-form';
import {combineReducers, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import {Provider} from 'react-redux';

// Redux config
const rootReducer = combineReducers({
    form: formReducer
});

const configureStore = (rootReducer, preloadedState = {}, thunkExtraArgument) => {
    // pass an extra argument to dispatch action
    const thunkMiddleware = thunkExtraArgument
        ? thunk.withExtraArgument(thunkExtraArgument)
        : thunk;

    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunkMiddleware, logger)
    );
};

const store = configureStore(rootReducer, {});

// Redux form wrapper
const Wrapper = ({children}) => <>{children}</>

const ReduxFormWrapper =  reduxForm({
    form: 'storyForm',
    enableReinitialize: true,
})(Wrapper);


addDecorator((storyFn) => (
    <Provider store={store}>
        <ReduxFormWrapper>
            <ChakraProvider>
                {storyFn()}
            </ChakraProvider>
        </ReduxFormWrapper>
    </Provider>
))