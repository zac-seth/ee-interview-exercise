import styled, { css } from 'styled-components';

export enum PanelVariant {
  CONTENT = `content`,
  HERO = `hero`,
};

export type PanelProps = {
  variant: PanelVariant;
};

const isHero = ({ variant }: PanelProps) => variant === PanelVariant.HERO && css`
  background-color: #171717;
`;

export const Panel = styled.section<PanelProps>`
  width: 33.25rem;
  padding: .25rem;
  border-radius: .25rem;
  background-color: #FFF;

  ${isHero}
`;
