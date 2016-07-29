import React from 'react'
import {render} from 'react-dom'
import AppRoot from 'src/app/main/ui/containers/RouteContainer'
import configureStore from 'src/app/main/store/appStore'

const store = configureStore();
render(
    <AppRoot store={store}   />,
    document.getElementById('app')
)