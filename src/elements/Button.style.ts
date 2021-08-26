import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { neonText, textBody } from 'tokens';

type ButtonProps = {
  isFunction?: boolean;
  isCalculate?: boolean;
  isPlaceholder?: boolean;
};


type AppliedStyles = false | FlattenSimpleInterpolation | undefined;

interface ApplyStylesForProps {
  (props: ButtonProps): AppliedStyles;
}

type CustomStyles = {
  basic?: FlattenSimpleInterpolation;
  hover?: FlattenSimpleInterpolation;
};

interface HoverStyleApplicator {
  (flag: boolean | undefined, customStyles: CustomStyles): AppliedStyles;
}

const applyStyleForFlag: HoverStyleApplicator = (flag, { basic, hover }) =>
  flag &&
  css`
    ${!!basic && basic}

    ${!!hover &&
    css`
      &:hover {
        ${hover}
      }
    `}
  `;

const applyFunctionStyles: ApplyStylesForProps = ({ isFunction }) =>
  applyStyleForFlag(isFunction, {
    basic: css`
      background-color: #1a1a1a;
    `,
    hover: css`
      background-color: #1d1d1d;
    `,
  });

const applyCalculateStyles: ApplyStylesForProps = ({ isCalculate }) =>
  applyStyleForFlag(isCalculate, {
    basic: css`
      background-color: #1a2b1a;
    `,
    hover: css`
      background-color: #1d2e1d;
    `,
  });

const applyPlaceholderStyles: ApplyStylesForProps = ({ isPlaceholder }) =>
  applyStyleForFlag(isPlaceholder, {
    basic: css`
      color: #666;
    `,
    hover: css`
      background-color: inherit;
      cursor: default;
    `,
  });

export const Button = styled.button<ButtonProps>`
  ${textBody}
  ${neonText(`1A94D2`, `228DFF`)}

  font-size: 4rem;
  line-height: 4rem;
  text-align: center;
  padding: 1rem;
  margin: 0;
  width: 8rem;
  height: 8rem;
  background-color: inherit;
  color: #1a94d2;
  border: 0;
  cursor: pointer;

  &:hover {
    background-color: #1a1a1a;
  }

  ${applyFunctionStyles}
  ${applyCalculateStyles}
  ${applyPlaceholderStyles}
`;
