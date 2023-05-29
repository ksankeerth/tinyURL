import { Button } from '@mui/material';
import React, { ReactNode } from 'react';

type RoundedButtonProps = {
  children: ReactNode;
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large' | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function RoundedButton(props: RoundedButtonProps) {
  const { children, onClick, size, fullWidth } = props;
  return (
    <Button onClick={onClick} size={size} fullWidth={fullWidth} variant="contained" sx={{ borderRadius: '30px' }}>
      {children}
    </Button>
  );
}

RoundedButton.defaultProps = {
  fullWidth: false,
  size: undefined,
  onClick: undefined,
};
