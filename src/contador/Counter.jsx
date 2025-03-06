import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  removeCounter,
  incrementAsync,
  addCounterAsync,
  resetCounter,
} from "./counterSlice";
import {
  Card,
  Buttons,
  Container,
  Display,
  DisplayButtons,
  Color,
  Header,
} from "./styles.js";

export function Counter() {
  const counters = useSelector((state) => state.counter.counters);
  const dispatch = useDispatch();

  return (
    <>
      <Header>
        <h1>Redux - Múltiplos Contadores</h1>
        <button onClick={() => dispatch(addCounterAsync())}>
          Adicionar Contadores
        </button>
        {counters == 0 && <p>Ainda não há contadores</p>}
      </Header>
      <Container>
        {counters.map(({ id, value, color }) => (
          <Card key={id} cor={color}>
            <Color style={{ margin: "20px 0px" }}>Color: {color}</Color>

            <Buttons>
              <Display cor={color}>
                <button onClick={() => dispatch(decrement(id))}>-</button>
                <span>{value}</span>
                <button onClick={() => dispatch(increment(id))}>+</button>
              </Display>
              <DisplayButtons cor={color}>
                <button onClick={() => dispatch(incrementAsync(id))}>
                  Async
                </button>
                <button onClick={() => dispatch(resetCounter(id))}>
                  Reset
                </button>
                <button
                  remove={true}
                  onClick={() => dispatch(removeCounter(id))}
                >
                  Remover
                </button>
              </DisplayButtons>
            </Buttons>
          </Card>
        ))}
      </Container>
    </>
  );
}
