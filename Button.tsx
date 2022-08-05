import React from 'react';

import { ButtonR, ButtonContainer } from './Button.style';
import { ButtonProps } from './Button.types';

export const Button = ({
  color,
  size,
  backgroundColor,
  title,
  onClick,
  loaderIcon,
  isLoading,
  disabled,
  circle,
  theme = 'primary',
  icon,
  children,
  fullWidth,
  ...htmlButtonProps
}: ButtonProps) => (
  <ButtonR
    backgroundColor={backgroundColor}
    size={size}
    color={color}
    theme={theme}
    onClick={onClick}
    disabled={disabled}
    circle={circle}
    title={title as string}
    fullWidth={fullWidth}
    {...htmlButtonProps}
  >
    {isLoading ? loaderIcon : (
      <ButtonContainer>
        {icon}
        {title}
        {children}
      </ButtonContainer>
    )}
  </ButtonR>
);
