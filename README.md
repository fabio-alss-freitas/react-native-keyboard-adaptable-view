<h1 align="center">
  React Native Keyboard Adaptable View
</h1>

<div align="center">

A component that adapt to keyboard and automatically scrolls to focused `TextInput` or custom text input component. It works on both platforms.

[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
[![Version](https://img.shields.io/npm/v/react-native-keyboard-adaptable-view.svg)](https://www.npmjs.com/package/react-native-keyboard-adaptable-view)
[![npm](https://img.shields.io/npm/dt/react-native-keyboard-adaptable-view.svg)](https://www.npmjs.com/package/react-native-keyboard-adaptable-view)
![GitHub issues](https://img.shields.io/github/issues-raw/fabio-alss-freitas/react-native-keyboard-adaptable-view)

![GitHub followers](https://img.shields.io/github/followers/fabio-alss-freitas?style=social)
![GitHub stars](https://img.shields.io/github/stars/fabio-alss-freitas/react-native-keyboard-adaptable-view?style=social)

</div>

<p align="center" >
  <kbd>
    <img src="https://i.postimg.cc/nhqwMPqF/ezgif-2-6acaae0619c8.gif" title="Scroll Demo" float="left">
  </kbd>
  <br>
  <em>KeyboardAdaptableView example app.</em>
</p>

## Features

- [x] Adapt using autoscroll

## Installation

`yarn add react-native-keyboard-adaptable-view`
or
`npm install --save react-native-keyboard-adaptable-view`

## Usage

1. Import the `KeyboardAdaptableView` from `react-native-keyboard-adaptable-view` and wrap your content inside of it.

```javascript
import KeyboardAdaptableView from "react-native-keyboard-adaptable-view";
...

render() {
    return (
      <KeyboardAvoidantView>
        //...content
      </KeyboardAvoidantView>
    );
  }

...
```

2. Add 'adaptKeyboard' prop to components `TextInput` or custom text input component to active the autoscroll adaptation.

```javascript
...
  <TextInput adaptKeyboard />
...
```

## Props

All the `ScrollView` props will be accepted.

## Example

```javascript
import KeyboardAdaptableView from "react-native-keyboard-adaptable-view";

render() {
    return (
      <KeyboardAvoidantView style={styles.container}> //<-- Wrap content with KeyboardAdaptableView
        <Title
          text={"My Account"}
          iconName={"user-circle-o"}
        />

        <Text style={styles.title}>Title1</Text>
        <TextInput
          adaptKeyboard //<-- Add 'adaptKeyboard' prop to TextInput or or custom text input component.
          secureTextEntry
          maxLength={maxLength}
          onChangeText={this.onChangeText}
          placeholder={"Type here..."}
        />

        <Text style={styles.title}>Title2</Text>
        <TextInput
          adaptKeyboard //<-- Add 'adaptKeyboard' prop to TextInput or or custom text input component.
          secureTextEntry
          maxLength={maxLength}
          onChangeText={this.onChangeText}
          placeholder={"Type here..."}
        />

        <Text style={styles.title}>Title3</Text>
        <MyCustomInput
          adaptKeyboard //<-- Add 'adaptKeyboard' prop to TextInput or or custom text input component.
          secureTextEntry
          maxLength={maxLength}
          onChangeText={this.onChangeText}
          placeholder={"Type here..."}
        />

        <Button
          iconName={"lock"}
          text={"Change"}
          onPress={this.onButtonPress}
        />
        </KeyboardAvoidantView> //<-- Wrap content with KeyboardAdaptableView
    );
  }
```

## Author

[Fabio Freitas](https://github.com/fabio-alss-freitas)

## License

MIT
