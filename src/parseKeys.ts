import { KeyCombo } from '.';
import { PropEntries } from './checkProps';

export const parseKeys = (keys: KeyCombo): PropEntries => {
  const separateKeys = keys.split('+');
  const modifiers = separateKeys.map((key) => {
    if (key.toLocaleLowerCase() === 'cmd') key = 'meta';
    if (['ctrl', 'alt', 'shift', 'meta'].includes(key.toLocaleLowerCase())) return [`${key}Key`, true];
    return ['key', key];
  });
  return modifiers as PropEntries;
};
