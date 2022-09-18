import styled from 'styled-components';
import { PageTitle } from './PageTitle';
import { EventBoard } from './EventBoard';

export const StyledPageTitle = styled(PageTitle)`
  margin-top: 0;
  text-align: center;
  text-transform: uppercase;
  color: aqua;
`;

export const StyledEventBoard = styled(EventBoard)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, auto));
  gap: 24px;
  padding-left: 16px;
  padding-right: 16px;
`;
