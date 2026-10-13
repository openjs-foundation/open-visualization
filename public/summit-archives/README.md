# Summit archives

Copied from `deck.gl/website/static/events` as the starting point for the Open
Visualization summit pages. The original agendas, styling, and external assets
are preserved. Each page adds a base URL for local assets and a link back to
`/summits`. Public summit URLs are mapped to these files in `next.config.mjs`.

The index and navigation use `content/summits.json`, ordered newest first.
All five past summit cards use participant group photos. Zürich, Seattle,
London, and New York photos were supplied by the user; Madrid comes from the
OpenJS Foundation recap linked in the content data. Group photos are cropped
for the wide cards and compressed as JPEGs. Chicago 2027 uses visualization
artwork from `deck.gl-data/events` while the event is in planning.

## Talk resources

Recording playlist URLs were recovered from the existing Prismic home document.
Seattle's individual agenda video links and recap come from:
https://openjsf.org/blog/open-vis-collab-summit-2025

Zürich slide links come from comments on openjs-foundation/summit issues
#495 (erdblick), #500 (Atlas of Switzerland), #491 (3D Tiles), and #494 (Mapterhorn).
London's MapLibre text-rendering slides come from Oliver Wipfli's event recap:
https://oliverwipfli.ch/open-visualization-collaborator-summit-london-2024-09-12/

Only verified resources are linked; the absence of a link does not imply a talk
was not recorded. Add more slide and video links beside the corresponding agenda
title as they become available.

Additional recordings were matched against the complete YouTube playlist entries:
Madrid (15), New York (14), London (17), and Seattle (15). Every available playlist
recording has an individual agenda link. Talks without a matching video remain
unlinked rather than pointing to an unrelated session.

Additional slides were matched from the shared Drive summit folders:
- London: https://drive.google.com/drive/folders/13MCdwemxe0HtqGJrMI1aOSc0Tdcgwmpu
- Seattle: https://drive.google.com/drive/folders/10oNn9_i3kuQIPBFgq53pS7dE1spXmeR8
- Zürich: https://drive.google.com/drive/folders/1Ax16tLpF8609x4ciujAZ-URN2-yhqlrf

Seattle's State of the Union deck was also found through Drive search. The generic
Seattle presentation was inspected and identified as Martin Schuhfuss's
@vis.gl/react-google-maps talk. Ambiguous files and demonstration clips were not
assigned to agenda entries.
