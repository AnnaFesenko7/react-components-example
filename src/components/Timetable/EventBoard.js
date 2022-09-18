import { Event } from './Event';
import styled from 'styled-components';

export const StyledEventBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, auto));
  gap: 24px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const EventBoard = ({ events }) => {
  return (
    <StyledEventBoard>
      {events.map(event => (
        <Event key={event.name} event={event} />
      ))}
    </StyledEventBoard>
  );
};
