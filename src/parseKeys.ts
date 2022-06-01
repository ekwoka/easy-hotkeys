import { KeyCombo } from '.';
import { PropChecker } from './checkProps';

export const parseKeys = (keys: KeyCombo): PropChecker => {
  const separateKeys = keys.split('+');
  const modifiers = separateKeys.map((key) => {
    if (key.toLocaleLowerCase() === 'cmd') key = 'meta';
    if (['ctrl', 'alt', 'shift', 'meta'].includes(key.toLocaleLowerCase())) return [`${key}Key`, true];
    return ['key', key];
  });
  return Object.fromEntries(modifiers);
};
