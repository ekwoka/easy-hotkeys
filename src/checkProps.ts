export type PropChecker = {
  altKey: boolean;
  ctrlKey: boolean;
  metaKey: boolean;
  shiftKey: boolean;
  key: string;
};

export const checkProps = (e: KeyboardEvent, keyCombo: PropChecker): boolean => {
  return Object.entries(keyCombo).every(([key, value]) => {
    return e[key as keyof KeyboardEvent] === value;
  });
};
