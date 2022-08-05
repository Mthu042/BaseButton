import React, { ButtonHTMLAttributes } from 'react';
import { StyledBaseButton } from './BaseButton.style';

export const BaseButton = React.forwardRef<
HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => (
    <StyledBaseButton ref={ref} {...props} />
  ),
);
