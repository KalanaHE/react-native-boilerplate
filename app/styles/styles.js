/*
 * Provides universal color configs used in the app.
 * Provides universal fonts used in the app.
 */
import {StyleSheet, Dimensions} from 'react-native';

export const PRIMARY_COLOR = '#8c499c';
export const SECONDARY_COLOR = '#5636B8';
export const WHITE = '#FFFFFF';
export const GRAY = '#757E90';
export const DARK_GRAY = '#363636';
export const BLACK = '#000000';

export const ONLINE_STATUS = '#46A575';
export const OFFLINE_STATUS = '#D04949';

export const STAR_ACTIONS = '#FFA200';
export const LIKE_ACTIONS = '#B644B2';
export const DISLIKE_ACTIONS = '#363636';
export const FLASH_ACTIONS = '#5028D7';
export const CONTAINER_BACKGROUND = '#F6F6F6';

export const ICON_FONT = 'tinderclone';

export const DIMENSION_WIDTH = Dimensions.get('window').width;
export const DIMENSION_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  containerCardItem: {
    backgroundColor: WHITE,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 15,
    marginVertical: 10,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: BLACK,
    shadowOffset: {height: 0, width: 0},
    overflow: 'hidden',
  },
});
