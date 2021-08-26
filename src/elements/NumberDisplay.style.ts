import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { neonText } from "tokens/color";

export enum NumberDisplayMode {
  PRIMARY = `primary`,
  SECONDARY = `secondary`
}

interface HandleNumberDisplayProps {
  (props: NumberDisplayProps): false | FlattenSimpleInterpolation;
}

export const displayPrimary: HandleNumberDisplayProps = ({ mode }) =>
  mode === NumberDisplayMode.PRIMARY &&
  css`
    font-size: 4rem;
    line-height: 4rem;
  `;

export const displaySecondary: HandleNumberDisplayProps = ({ mode }) =>
  mode !== NumberDisplayMode.PRIMARY &&
  css`
    font-size: 3.2rem;
    line-height: 3.2rem;
  `;

export type NumberDisplayProps = {
  mode: NumberDisplayMode;
};

export const NumberDisplay = styled.p<NumberDisplayProps>`
  ${neonText(`FFF`, `B6FF00`)}
  
  color: #FFF;
  margin: 0;
  padding: 0;

  ${displayPrimary}
  ${displaySecondary}
`;
