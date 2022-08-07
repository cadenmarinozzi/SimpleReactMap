# SimpleReactMap

A Simple Web Implementation Of The Google Maps API For React. (No API Key Required!)

# Installation

Make sure you have npm and node installed. Run `npm install simple-react-map` to install the package.

# Usage

After installing the package, you can use it by importing it into your React app.

```js
import SimpleReactMap from 'simple-react-map';
```
Then use the component in your React app.

```jsx
function Component() {
  return (
    <SimpleReactMap 
        zoom={14} 
        center={{lat: -34.397, lng: 150.644}}
        className="map"
    />
  );
}
```

# Props

## center: Array [lat, lng] (Default: null, Ex: [-37, -122.8])
The coordinates of the center of the map. Overrides the query string.
## zoom: Number (Default: 12, Ex: 11)
The zoom level of the map.
## query: String (Default: null, Ex: 'San Jose')
The query string to search for. Overrides the center prop.

## ...rest: Object (Default: null, Ex: {className: 'map'})
Other props that are passed to the underlying Element.

# Building

You can manually build SimpleReactMap by following the instructions below:
1. Make sure you have npm and node installed.
2. Clone the repository to your local machine `git clone https://github.com/nekumelon/SimpleReactMap.git`
3. Cd into the cloned directory `cd SimpleReactMap` and run `npm install`
4. Run `npm build` to build the module.

# LICENSE
See [LICENSE](./LICENSE) for the license.