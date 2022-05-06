const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션 생성 함수
export const increaseNum = () => {
    return {
        type: INCREASE,
    }
}

export const decreaseNum = () => {
    return {
        type: DECREASE,
    }
}

//초기값
const initState = {
    num: 10,
}

export default function counterReducer(previousState = initState, action) {
    switch(action.type) {
        case INCREASE:
            return {
                ...previousState,
                num: previousState.num + 1,
            };
        case DECREASE:
            return {
                ...previousState,
                num: previousState.num - 1,
            };
        default:
            return {
                ...previousState,
            };
    }
}