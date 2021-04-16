import React from 'react'
import * as comp from '../components'

const getJsxClass = (name) => {
    return comp[name]
}

const Compile = (json) => {
    let jsxClass = getJsxClass(json.comp)
    return React.createElement(jsxClass, { ...json })
}

export {
    Compile
}