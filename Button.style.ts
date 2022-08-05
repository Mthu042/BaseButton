import styled, { css } from 'styled-components';

import { colord } from 'colord';
import { ButtonElemProps, ButtonSize } from './Button.types';
import { vars } from '../../styles';
import { tone } from '../../styles/theme/opasity';
import { fonts as ThemeFonts } from '../../styles/theme/typography';

const sizeStyle = (size?: keyof typeof ButtonSize) => {
  switch (size) {
    case 'large':
      return `${vars.x4} ${vars.x5}`;
    case 'medium':
      return `${vars.x2_5} ${vars.x4}`;
    case 'small':
      return `${vars.x1} ${vars.x2}`;
    default:
      return `${vars.x3_5} ${vars.x6}`;
  }
};

const primaryBtn = css<ButtonElemProps>`
        ${ThemeFonts.fontLabelPrimary};
        background-color: ${vars.colorPrimaryDefault};
        color: ${vars.colorTextLight};
        padding: ${({ size }) => sizeStyle(size)};
        border-radius: ${vars.radius};
        &:hover {
            background-color: ${vars.colorPrimaryHover};
        }
`;

const secondaryLightBtn = css<ButtonElemProps>`
        ${ThemeFonts.fontLabelSecondary};
        background-color: ${vars.colorSecondaryLightDefault};
        color: ${vars.colorTextDark};
        padding: ${({ size }) => sizeStyle(size)};
        border-radius: ${vars.radius};
        &:hover {
            background-color: ${vars.colorSecondaryLightHover};
        }
`;

const secondaryDarkBtn = css<ButtonElemProps>`
        ${ThemeFonts.fontLabelSecondary};
        background-color: ${vars.colorSecondaryDarkDefault};
        color: ${vars.colorTextLight};
        padding: ${({ size }) => sizeStyle(size)};
        border-radius: ${vars.radius};
        &:hover {
            background-color: ${({ disabled }) => !disabled && vars.colorSecondaryDarkHover};
        }
`;

const transparentBtn = css<ButtonElemProps>`
    ${ThemeFonts.fontLabelPrimary};
    background-color: transparent;
    color: ${vars.colorTextLight};
    padding: ${({ size }) => sizeStyle(size)};
    border-radius: ${vars.radius};
    &:hover {
      background-color: ${vars.colorSecondaryDarkHover};
    }
`;

const defaultBtn = css<ButtonElemProps>`
        ${ThemeFonts.fontLabelPrimary};
        background-color: ${vars.colorSecondaryDarkDefault};
        color: ${vars.colorTextDark};
        padding: ${({ size }) => sizeStyle(size)};
        border-radius: ${vars.radius};
`;

const tagBtn = css`
        ${ThemeFonts.fontLabelXSmall}
        padding: ${vars.x05} ${vars.x1};
        color: ${vars.colorLightGreyDark};
        border-radius: ${vars.x05};
        background-color: ${vars.colorSecondaryDarkDefault};
        &:hover {
            background-color: ${vars.colorSecondaryDarkHover};
        }
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ButtonR = styled.button<ButtonElemProps>`
    font-family : inherit;
    ${(props) => {
    switch (props.theme) {
      case 'primary':
        return primaryBtn;
      case 'secondary':
        return secondaryLightBtn;
      case 'secondaryDark':
        return secondaryDarkBtn;
      case 'tag':
        return tagBtn;
      case 'transparent':
        return transparentBtn;
      default:
        return defaultBtn;
    }
  }}
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => (props.fullWidth && '100%')};
    border: 0;
    border-radius: ${(props) => (props.circle && '50%')};
  
    padding: ${(props) => (props.circle && vars.x3)};;
  
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
    &:hover {
      background-color: ${(props) => (props.backgroundColor ? colord(props.backgroundColor).alpha(tone.toneHover).toRgbString() : null)};
    }
    cursor: ${(props) => !props.disabled && 'pointer'};

    line-height: ${(props) => (props.circle && `${vars.x3_5}`)};
    opacity: ${(props) => props.disabled && tone.toneHover};
  
    ${ButtonContainer} :first-child {
      margin-right: ${(props) => !props.circle && typeof props.title !== 'object' && vars.x3};
    }
`;
