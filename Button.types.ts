import { HTMLAttributes } from 'react';

export interface ButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'title'> {
  backgroundColor?: string;
  color?: string;
  size?: 'medium' | 'large';
  theme?: 'primary' | 'secondary' | 'tag' | 'secondaryDark' | 'transparent';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title?: string | JSX.Element
  loaderIcon?: JSX.Element
  icon?: JSX.Element
  isLoading?: boolean
  disabled?: boolean
  circle?: boolean
  fullWidth?: boolean;
  visited?: boolean;
}

export type ButtonElemProps = Omit<ButtonProps, 'onClick'>;

export enum ButtonSize {
  medium = 'medium',
  large = 'large',
  small = 'small',
}
