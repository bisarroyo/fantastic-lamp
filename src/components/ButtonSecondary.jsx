import React from 'react';
import Button from '@mui/material/Button';

const ButtonSecondary = (props) => {
  const { text } = props;
  return (
    <div>
      <Button variant='contained' color='secondary'>{text}</Button>
    </div>
  );
};

export default ButtonSecondary;
