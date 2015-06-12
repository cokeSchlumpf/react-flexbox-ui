# react-flexbox-ui
React implementation for Flexbox CSS.

## Setup

```
npm install --save react-flexbox-ui
```

## Example

```
<View box row>
  <View box column item size={ 1 }>
    <View item size={ 1 }>A</View>
    <View item size={ 1 }>B</View>
  </View>
  <View item size={ 3 }>
    C
  </View>
  <View item style={{ height: "40px" }}>
    D
  </View>
</View>
```

## API

Basic Syntax for box/ containers:

```
  <View box {column|row} [{wrap|nowrap}] [{justifyStart|justifyEnd|justifyCenter|justifySpaceBetween|justifySpaceAround}] [{alignStart|alignEnd|alignCenter|alignStretch|alignBaseline}] ... />
```

Default is set to `wrap`, `justifySpaceBetween`, `alignStretch` if `column`, `alignCenter` if `row`. If a style property is set, it will be merged with the flexbox styles.

Basic Syntax for items:

```
  <View item [size={ number }] ... />
```

If size is set, the item will be configured with flex-grow, otherwise you should define a static height/ width with CSS. Box and item can be combined in one view. See [this page](http://css-tricks.com/snippets/css/a-guide-to-flexbox/) for more details on Flexbox CSS.