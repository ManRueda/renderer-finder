# Renderer Finder
This module provides an event driven way of obtain all the DLNA renderers present in the network.

## Usage
The module can be used to get the first renderer found or keep listening to new ones.

### Getting only one
```javascript
var RendererFinder = require('renderer-finder');
var finder = new RendererFinder();

finder.findOne(function(err, info, msg){
  console.log(info);
  console.log(msg);
});
```
The callback receive the ```info``` parameter with a basic data of the address of the renderer. The ```msg``` parameter contains the ```M-SEARCH``` parsed response data as a JSON.

Additionally you can ask for more data to the renderer. To do this you need to pass a ```true``` as the first parameter and the callback as a second parameter.

```javascript
finder.findOne(true, function(err, info, msg, desc){
  console.log(info);
  console.log(msg);
  console.log(desc);
});
```

The ```desc``` parameter contains the data of the DLNA description asked to the renderer.

### Event driven mode
The event driven mode have all the same capabilities of the 'get only one' mode but the finder keep looking for more renderers until you say stop.

To ask for more data, you need to pass ```true``` as the first parameter in the ```start``` method.

```javascript
finder.on('found', function(info, msg, desc){
  console.log(info);
  console.log(msg);
  console.log(desc);
});

finder.start(true);
```

To stop searching you only need to call stop:

```javascript
finder.stop();
```
### Search for another devices
The constructor of the finder support a custom ST as the first parameter to search for custom devices.

The default ST is ```urn:schemas-upnp-org:device:MediaRenderer:1```

```javascript
var RendererFinder = require('renderer-finder');
var finder = new RendererFinder('urn:schemas-upnp-org:device:Basic:1');

finder.findOne(function(err, info, msg){
  console.log(info);
  console.log(msg);
});
```
