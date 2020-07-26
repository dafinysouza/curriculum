import { Container, MiddleBackground } from 'src/styles/components';
import styled from 'styled-components';

export const CurriculoContainer = styled(Container)`
  background-color: ${MiddleBackground};
  display: grid;
  grid-template-columns: 300px auto;
  position: relative;
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
  }
`;
