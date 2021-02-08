import React from 'react'
import { getJsxClass } from '../help'

const Compile = (json) => {
    let { tag, id } = json
    let jsxClass = getJsxClass(json.tag)
    console.log(jsxClass,'jsxClass')
    let props = {
        ...json.props,
        id,
        tag
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