// react-redux 라이브러리에서 제공하는 useSelector를 사용하여 
// store에 저장되어 있는 데이터를 가져올 수 있습니다.

import { useDispatch, useSelector } from "react-redux"
import { decreaseNum, increaseNum } from "../reducer/counter";
import Button from "../styled-components/Button";
import Container from "../styled-components/Container";
import Count from "../styled-components/Count";
import styled from "../App.module.css";

console.log(styled);

const CounterContainer = () => {
    console.log(styled);
    const count = useSelector(state => state.num);
    const dispatch = useDispatch();

    return (
        <Container>
            <h1 className={styled.App_header}>COUNTER</h1>
            <Count> {count} </Count>
            <br />
            <Button onClick={() => dispatch(increaseNum())}> + </Button>
            <Button onClick={() => dispatch(decreaseNum())}> - </Button>
        </Container>
    )
}

export default CounterContainer;