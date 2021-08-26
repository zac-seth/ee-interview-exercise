import styled, { css } from 'styled-components';
import { LayoutDirection } from './layout-direction';

export type LayoutProps = {
  items?: number[];
  layoutDirection?: LayoutDirection;
  length?: number;
};

const getManualColumns = ({ layoutDirection: direction = LayoutDirection.ROW, items }: LayoutProps) => {
  if (!items) {
    return;
  }

  const value = items.reduce((result, item) => `${result} ${item}fr`, ``);

  if (direction === LayoutDirection.COLUMN) {
    return css`
      grid-template-rows: ${value};
    `;
  }

  return css`
    grid-template-columns: ${value};
  `;
};

const getDynamicColumns = ({
  layoutDirection: direction = LayoutDirection.ROW,
  length,
}: LayoutProps) => {
  if (!length) {
    return;
  }

  if (direction === LayoutDirection.ROW) {
    return css`
      grid-template-columns: repeat(${length}, 1fr);
    `;
  }

  return css`
    grid-template-rows: repeat(${length}, 1fr);
  `;
};

export const Layout = styled.div<LayoutProps>`
  display: grid;
  grid-gap: 0.25rem;
  margin: 0;
  padding: 0;

  ${getManualColumns};
  ${getDynamicColumns};
`;
