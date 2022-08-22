import { checkProps, PropEntries } from './checkProps';
import { parseKeys } from './parseKeys';

export type KeyMap = {
  [key: KeyCombo]: () => void;
};

export type KeyCombo = string;

export const hotkeys = (keyMap: KeyMap): (() => void) => {
  const keyActions = Object.entries(keyMap).map(([keys, action]) => {
    const keyCombo = parseKeys(keys);
    return registerHandler(keyCombo, action);
  });
  return () => keyActions.forEach((fn) => fn());
};

const registerHandler = (keyCombo: PropEntries, action: () => void): (() => void) => {
  const handler = (e: KeyboardEvent) => {
    if (checkProps(e, keyCombo)) action();
  };
  window.addEventListener('keydown', handler);
  return () => window.removeEventListener('keydown', handler);
};
