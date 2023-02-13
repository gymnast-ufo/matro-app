import { FC } from 'react';
import { TextField } from '@mui/material';
import { inject, observer } from 'mobx-react';

export const Search: FC = inject(stores => stores)(observer((stores) => {
  const { metroStore: { search, setSearch } } = stores;
  const handleInput = (event) => setSearch(event.target.value);

  return (
    <div className="default-paddings-x">
      <TextField
        value={search}
        onChange={handleInput}
        variant="filled"
        placeholder="Поиск элемента"
        size="small"
        fullWidth
      />
    </div>
  );
}));
