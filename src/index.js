import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/app'
import rootReducer from './root.reducer'

const store = createStore(rootReducer)

render(<Provider store={store}> < App /> </Provider>, document.getElementById('root'))



