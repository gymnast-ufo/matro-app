import { FC } from 'react';
import { TextField } from '@mui/material';

export const Search: FC = () => {
  return (
    <div className="default-paddings-x">
      <TextField variant="filled" placeholder="Поиск элемента" size="small" fullWidth />
    </div>
  );
};
