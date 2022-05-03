Repository for demonstrating an issue with Nest js

There are 2 packages

- client - simple client built with `create-react-app` which has a component to subscribe to an Event Source and to console log out messages it receives and the status of the source.
- server - server built with `nest new` which has a controller with a SSE event source.

Run `yarn install` to install the packages

Run `yarn server start` to start the server
Run `yarn client start` to start the client

Repro steps

1. Start the client and the server
1. Navigate to http://localhost:3001/ to load the client. Open the developer tools console - it should emit the status of the event source every 3 seconds, and emit any messages received from the server.
1. Stop the server by using `ctrl+c` on the process running the server.

Note that the client is still receiving events from the server and still reports the event source as open. This is a problem because when the server starts again - the client is connected to the wrong event source.

Then - comment out this lien in `server/src/main.ts`

```typesceript
  app.enableShutdownHooks();
```

and run through the steps above again.

This time the client correctly knows the event source has gone away and keeps trying to reconnect until the server starts again. If you run `yarn server start` again you'll see the client correctly reconnect.
