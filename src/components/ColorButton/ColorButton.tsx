import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Avatar, Colors } from 'react-native-paper';

interface ColorButtonProps {
  color: string,
  size: number,
  onPress: () => void,
  selected?: boolean
}

const GREY_WIDTH = 10;
const WHITE_WIDTH = 5;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getColorButtonStyles = (size: number) => StyleSheet.create({
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

export const ColorButton = ({
  onPress, color, size, selected,
} : ColorButtonProps): JSX.Element => {
  const styles = getColorButtonStyles(size);

  const selectedBorder = selected ? (
    <>
      <View style={styles.whiteLayer} />
      <View style={styles.greyLayer} />
    </>
  ) : null;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={{
          zIndex: 3,
          backgroundColor: color,
          borderRadius: size / 2,
          width: size,
          height: size,
        }}
        />
        {selectedBorder}
      </View>
    </TouchableWithoutFeedback>
  );
};

interface IconButtonProps {
  size: number,
  icon: string,
  onPress: () => void,
  selected?: boolean
}

export const IconButton = ({
  onPress, icon, size, selected,
} : IconButtonProps): JSX.Element => {
  const styles = getColorButtonStyles(size);

  const selectedBorder = selected ? (
    <>
      <View style={styles.whiteLayer} />
      <View style={styles.greyLayer} />
    </>
  ) : null;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Avatar.Icon
          size={size}
          color={Colors.grey900}
          icon={icon}
          style={{
            zIndex: 3,
            backgroundColor: Colors.grey400,
            borderRadius: size / 2,
            width: size,
            height: size,
          }}
        />
        {selectedBorder}
      </View>
    </TouchableWithoutFeedback>
  );
};
