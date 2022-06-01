# Hotkeys

This is a very simple package that allows you to register hotkeys to run functions easily!

## Installation

```zsh
pnpm add @ekwoka/hotkeys
```

## Usage

```js
hotkeys({
  'ctrl+c': () => console.log('copying!!!'),
  'ctrl+k': openSearchBar,
  'cmd+p': openCommandPalette,
  'cmd+ctrl+alt+shift+u': activateSuperUser
});
```

The string accepts `ctrl` `alt` `cmd` and `shift` as modifiers, or any combination thereof.

The function also returns a function to unregister the hotkeys.

```js
const unregister = hotkeys({
  'ctrl+c': () => console.log('copying!!!'),
  'ctrl+x': () => unregister()
});
```

This allows it to be easily used inside `useEffect` for Preact and React to allow easy reactive hotkeys, or cleaning up components registered hotkeys when they are unloaded.

```js
const [counter, setCounter] = useState(0);
useEffect(
  () =>
    hotkeys({
      'ctrl+y': () => setCounter(counter + 1)
    }),
  [counter]
);
```

## Types

Provides Necessary Type declarations for the package, although they are rather simple.

## Unsupported Behaviors

- Registering the '+' key as a hotkey will not work.
- Not tested with any non-alphanumeric keys.
- Registering combinations of multiple keys will not work without you customizing your own actions to support them (no `cmd+m cmd+w` for example).
