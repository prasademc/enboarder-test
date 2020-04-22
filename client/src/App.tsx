import React from "react";
import { Store } from "./store";
import {
  Container,
  Wrapper,
  Controll,
  Cell,
  CellWide,
  Button,
  InputText,
} from "./styles";
import { ReactComponent as Rocket } from "./assets/rocket.svg";
import CapsuleData from "./components/Capsule";

export default function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  const fetchUpcomingCapsules = async () => {
    const URL = "https://api.spacexdata.com/v3/capsules/upcoming";
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_CDATA",
      capload: dataJSON,
    });
  };

  const fetchLandingPad = async () => {
    const URL = "http://localhost:4000/LZ-4";
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_LPDATA",
      landingpad: dataJSON,
    });
  };

  return (
    <Container>
      <Wrapper>{CapsuleData(state.capsules)}</Wrapper>
      <Controll>
        <Cell>
          <Button onClick={() => fetchUpcomingCapsules()}>Capsules</Button>
        </Cell>
        <Cell>
          <Rocket />
        </Cell>
        <CellWide>
          <InputText type="text" placeholder="Landing Pad id" />
          <Button onClick={() => fetchLandingPad()}>Landing Pad</Button>
        </CellWide>
      </Controll>
    </Container>
  );
}
