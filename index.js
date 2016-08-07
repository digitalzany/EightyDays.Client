import React from 'react'
import {render} from 'react-dom'
import RouteContainer from 'src/app/main/ui/containers/RouteContainer'
import configureStore from 'src/app/main/store/appStore'

const store = configureStore();
render(
    <RouteContainer store={store}   />,
    document.getElementById('app')
)