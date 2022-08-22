export type PropChecker = {
  altKey: boolean;
  ctrlKey: boolean;
  metaKey: boolean;
  shiftKey: boolean;
  key: string;
};

export type PropEntries = [keyof PropChecker, PropChecker[keyof PropChecker]][];

export const checkProps = (e: KeyboardEvent, keyCombo: PropEntries): boolean => {
  return keyCombo.every(([key, value]) => {
    return e[key as keyof KeyboardEvent] === value;
  });
};
