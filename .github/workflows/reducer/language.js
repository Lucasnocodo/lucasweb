const initialState = {
    locale: navigator.language
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_LOCALE':
            return { locale: action.value }
        default:
            return state;
    }
}