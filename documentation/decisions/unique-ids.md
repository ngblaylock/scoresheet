# Unique IDs

I started down the path of using unique IDs with Lodash's `uniqueID` like I use for the PACKAGE in nathanblaylock.com. However, this lodash method is dependent on the current session, so when you refresh your page it will reset.

The specific issue I ran into was with editing players that have a `playerId` property. If you refresh the page the incremented number can conflict with the `playerId` stored in localstorage.

My solution was to use `nanoid` so the id is in fact unique, no matter the session.

I still think using `uniqueID` in the PACKAGE is okay since it primarily deals with the `id` attribute.