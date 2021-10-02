# collab-lan-electron

Collabs container host that uses libp2p/MDNS for networking on a LAN, as an Electron app.

Build:

First, put the container of your choice (plus supporting files, if applicable) in `src/site/container/`, and rename the main HTML file to `container.html`.

Then do:

```
npm run build
npm run make
```

The finished install files are placed in `out/`.

Start:

```
npm run start
```

Or, just `npm run build` and then do `npm run electron`.
