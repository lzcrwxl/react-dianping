import {USERINFO_UPDATE } from  '../../constants'

export function update(data) {
    return {
        type:USERINFO_UPDATE,
        data
    }
}