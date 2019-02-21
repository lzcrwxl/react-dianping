import {USERINFO_UPDATE } from  '../../constants'

export  const updateInfo=(data)=> {
    return {
        type:USERINFO_UPDATE,
        data
    }
}