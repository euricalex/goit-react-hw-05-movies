import { StyledMain } from 'pages/Home/StyledHome';
import { StyledDiv } from './StyledNotFound';

const NotFound = () => {
  return (
    <StyledMain>
      <StyledDiv>
        <b>404</b>
        <p>Sorry, we couldn't find that movie :(</p>
      </StyledDiv>
    </StyledMain>
  );
};

export default NotFound;