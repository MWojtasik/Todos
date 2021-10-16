import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { ListIcon } from '../ListIcon/ListIcon';
import { ListInfo } from '../ListInfo/ListInfo';
import { RootState } from '../../redux/store';
import { listCardStyles } from './ListCard.styles';

interface ListCardProps {
  id: string
}

export const ListCard = ({ id }: ListCardProps): JSX.Element => {
  const list = useSelector((state: RootState) => state.lists[id]);
  const {
    name, remaindersCount, icon, color,
  } = list;

  return (
    <TouchableOpacity style={listCardStyles.container}>
      <ListIcon icon={icon} color={color} />
      <ListInfo name={name} count={remaindersCount} />
    </TouchableOpacity>
  );
};
