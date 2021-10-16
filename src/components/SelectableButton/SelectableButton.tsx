import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import { Colors } from 'react-native-paper';

const GREY_WIDTH = 10;
const WHITE_WIDTH = 5;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getSelectableButtonStyles = (size: number) => StyleSheet.create({
  container: {
    margin: WHITE_WIDTH,
  },
  whiteLayer: {
    position: 'absolute',
    zIndex: 2,
    backgroundColor: Colors.white,
    left: -(WHITE_WIDTH / 2),
    top: -(WHITE_WIDTH / 2),
    borderRadius: (size + WHITE_WIDTH) / 2,
    width: (size + WHITE_WIDTH),
    height: (size + WHITE_WIDTH),
  },
  greyLayer: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: Colors.grey700,
    left: -(GREY_WIDTH / 2),
    top: -(GREY_WIDTH / 2),
    borderRadius: (size + GREY_WIDTH) / 2,
    width: (size + GREY_WIDTH),
    height: (size + GREY_WIDTH),
  },
});

interface SelectableButtonProps {
  size: number,
  onPress: () => void,
  selected?: boolean,
  children: JSX.Element
}

export const SelectableButton = ({
  onPress, size, selected, children,
} : SelectableButtonProps): JSX.Element => {
  const styles = getSelectableButtonStyles(size);

  const selectedBorder = selected ? (
    <>
      <View style={styles.whiteLayer} />
      <View style={styles.greyLayer} />
    </>
  ) : null;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        {children}
        {selectedBorder}
      </View>
    </TouchableWithoutFeedback>
  );
};
