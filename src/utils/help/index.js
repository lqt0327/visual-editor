// import * as antd from 'antd'
import * as comp from 'components'
import { props as propsTree } from './props'
import { v4 as uuidv4 } from 'uuid';

const generateUUID = () => `astx${uuidv4()}`

const getJsxClass = (name) => {
    return comp[name]
}

const getDefaultProps = (name) => {
    // console.log(comp[name],"defaultProps123")
    return comp[name].defaultProps
}

const setInitProps = (name) => {
    return propsTree[name]
}

const generateInitJson = (tag) => (
    {
        tag,
        id:generateUUID(),
        props:{
            ...getDefaultProps(tag),
            ...setInitProps(tag)
        },
        children: [

        ]
    }
)

const getUuid = (ele) => {
    while(!ele.id) {
        ele = ele.parentNode
    }
    return ele.id
}

export {
	generateUUID,
	getJsxClass,
	getDefaultProps,
	generateInitJson,
	getUuid
}