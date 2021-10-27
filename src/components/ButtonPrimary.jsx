import React from 'react';
import Button from '@mui/material/Button';

const ButtonPrimary = (props) => {
  const { text } = props;
  return (
    <div>
      <Button variant='contained'>{text}</Button>
    </div>
  );
};

export default ButtonPrimary;
