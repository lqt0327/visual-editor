import React from 'react'
import * as comp from '../components'

const getJsxClass = (name) => {
    return comp[name]
}

const Compile = (json) => {
    let jsxClass = getJsxClass(json.comp)
    let props = {
        ...json.props
    }
    let children = []

    if(json.children) {
        let len = json.children.length
        let child = json.children
        for(let i = 0; i < len; i++) {
            let childJSX = Compile(child[i])
            children.push(childJSX)
        }
    }
    return React.createElement(jsxClass, { ...props }, ...children)
}

export {
    Compile
}