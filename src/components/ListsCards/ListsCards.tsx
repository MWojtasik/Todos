import { useSelector } from 'react-redux';
import React from 'react';
import { RootState } from '../../redux/store';
import { ListCard } from '../ListCard/ListCard';

const toListElement = (folderId: string) => {
  return <ListCard id={folderId} key={folderId} />;
};

export const ListsCards = (): JSX.Element => {
  const listsIds = useSelector((state: RootState) => state.listsIds);
  const lists = listsIds.map(toListElement);

  return (
    <>
      {lists}
    </>
  );
};
