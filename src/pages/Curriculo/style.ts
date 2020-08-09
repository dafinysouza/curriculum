import { Container, MiddleBackground } from 'src/styles/components';
import styled from 'styled-components';

export const CurriculoContainer = styled(Container)`
  background-color: ${MiddleBackground};
  display: grid;
  grid-template-columns: 1fr 2fr;
  position: relative;
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
  }
`;
