import * as antd from 'antd'
import { props as propsTree } from './props'
import { v4 as uuidv4 } from 'uuid';

const generateUUID = () => `astx${uuidv4()}`

const getJsxClass = (name) => {
    return antd[name]
}

const getDefaultProps = (name) => {
    return antd[name].defaultProps
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