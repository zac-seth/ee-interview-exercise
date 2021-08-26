import { css, FlattenSimpleInterpolation } from 'styled-components';

export interface NeonText {
  (highlight: string, glow: string): FlattenSimpleInterpolation
}

/** Neon effect lifted and modified from: https://codemyui.com/various-color-neon-glow-for-text-in-css/ */
export const neonText: NeonText = (highlight, glow) => css`
  text-shadow: 0 0 5px #${highlight}, 0 0 15px #${glow};
`;
