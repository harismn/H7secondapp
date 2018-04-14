
export const DASHBOARD_ACTION = Object.freeze({
    FULLFILLED: 'FULLFILLED_ACTION',
    REQUEST: 'REQUEST'

})

export const DashboardAction = Object.freeze({
    fullfilled: (value) => ({
        type: DASHBOARD_ACTION.FULLFILLED,
        value,
    }),
    request: () => ({
    type: DASHBOARD_ACTION.REQUEST
    })
})

const initState = {
    card: {},

}

const reducer = (state = initState, {type, value}) => {
    switch(type){
        case DASHBOARD_ACTION.FULLFILLED: 
        return {
            ...state,
            card: value,
        }
    }
}

export default reducer