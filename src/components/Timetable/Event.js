import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import { formatEventStart, formatEventDuration } from './helpers';
import styled from 'styled-components';

const StyledEvent = styled.div`
  position: relative;
  border: 2px dashed black;
  padding: 8px;
  border-radius: 4px;
`;
const StyledTitle = styled.h2`
  margin-top: 0;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;
const StyledInfo = styled.p`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 8px;
  color: var(--color-primary-text);
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;

  > svg {
    display: block;
    margin-right: 8px;
    color: var(--color-secondary-text);
  }
`;

const StyledSpan = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  background-color: #000;
  /* color: #fff; */
  /* color: ${props => props.color}; */

  &.free {
    background-color: green;
  }
  &.paid {
    background-color: blue;
  }
  &.vip {
    background-color: red;
  }
`;

export const Event = ({ event: { name, location, speaker, time, type } }) => {
  return (
    <StyledEvent>
      <StyledTitle>{name}</StyledTitle>

      <StyledInfo>
        <FaMapMarkerAlt color="red" />
        {location}
      </StyledInfo>
      <StyledInfo>
        <FaUserAlt />
        {speaker}
      </StyledInfo>
      <StyledInfo>
        <FaCalendarAlt />
        {formatEventStart(time.start)}
      </StyledInfo>
      <StyledInfo>
        <FaClock />
        {formatEventDuration(time.start, time.end)}
      </StyledInfo>
      <StyledSpan
        className={type}
        style={{ color: type === 'vip' ? 'black' : 'white' }}
      >
        {type}
      </StyledSpan>
    </StyledEvent>
  );
};
