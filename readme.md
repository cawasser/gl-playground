# GL-PLAYGROUND

Some early experiments with ["Golden Layout"](https://github.com/golden-layout/golden-layout)
(really with ["FlexLayout"](https://github.com/caplin/FlexLayout),
since that is [recommended](https://github.com/golden-layout/golden-layout#dropped-features)
for use with [React](https://reactjs.org/) and we are using [Reagent](https://github.com/reagent-project/reagent))


## Tooling

We are using [shadow-cljs](https://github.com/thheller/shadow-cljs)

## Developing, testing and Debugging

Clone the repo locally with:

    git clone https://github.com/cawasser/gl-playground

Use shadow-cljs to start the application for development purposes:

    shadow-cljs watch app

Then open your browser to:

    localhost:8081    

Open your IDE of choice and start working with hot-reloading. Additionally, if you would like to nRepl into the running app, configure your IDE to
connect to the nRepl at `localhost` port `5555`.

Note that this playground does NOT have a full-fledged Server at this time, we only use the [minimal server](https://shadow-cljs.github.io/docs/UsersGuide.html#dev-http)
(at port 8081) provided by shadow-cljs.

## Why "this"?

We have indication that some of our customers have standardized on Golden Layout, and we currently do NOT.

Additionally, we have chosen React as our baseline WebUI technology due to its great interop with [Clojurescript](https://clojurescript.org)
and Golden Layout has abandoned support for React, apparently preferring Angular. Hence, FlexibleLayout.

## Why now?

We are starting to see signs of cracks in the underpinnings of the
[Vanilla UI](https://github.com/cawasser/rocky-road/tree/master/bases/vanilla/cljs) in the
[Rocky-Road](https://github.com/cawasser/rocky-road) project.

## What's wrong?

The original Vanilla project was built from [dashboard-clj](https://github.com/multunus/dashboard-clj), which was a very
"batteries included" example of building "dashboard" and "dashboard-like" Single-Page Applications. But, it also burdens
the developer with a number of explicit and implicit couplings:

1. Interactions between the server and the client were scheduled, using [org.immutant/scheduling](http://immutant.org/documentation/current/apidoc/guide-scheduling.html), not "event-driven" as data changed
2. The project is from 2016, so it predated shadow-cljs, instead using [cljsjs](http://cljsjs.github.io) to use React Javascript components.
3. It was built using Leiningen, not shadow-cljs, or clojure,cli and tools.deps.
4. It only provided examples using [Highcharts](http://www.highcharts.com), which is itself very complex (and "sort-of" but not "exactly" [GG](https://ggplot2.tidyverse.org))
5. Highcharts is difficult to work with from CLJS, and incurs licensing fees.
6. Screen management is restricted to a single browser tab on a single screen by [react-grid-layout](https://github.com/react-grid-layout/react-grid-layout)

Further development by our team added more complications and ["complecting"](https://www.infoq.com/presentations/Simple-Made-Easy/):

1. UI Widget construction spans many namespaces and is difficult to understand, debug, and extend
2. Data subscriptions from the server often break [re-frame](https://github.com/Day8/re-frame) re-draw containership, causing "over refresh" of the UI
3. Registering the different types of widgets (highcharts-based, non-highcharts, etc.) are all special cases

## What's worth keeping?

So what do we like about how things are done currently, at least from a UI/UX perspective?

[ ] Pushing data from the server, using websockets and "subscriptions"
[ ] Draggable screen organization (grids, etc)
[ ] User ability to pick the data first from what is available, then the visualization technique
[ ] Meta-data tagging on data sent by the server, documenting the structure of the data provided
[ ] Meta-data tagging on the widgets, documenting the kinds of data they can "easily" present
[ ] Meta-data tags can be used to support data->visualization conversions
[ ] Complex and visually pleasing charts and diagrams, including Sankey diagrams
[ ] Preserving screen layout per user (personalization) at the Server

## Improvements we'd like to make

[ ] True "event-driven" updates from the Server (as the default)
[ ] Support for query-driven updates as well
[ ] Move to a true OSS graphics library, like [oz](https://github.com/metasoarous/oz)
[ ] User-buildable widgets (content), akin to Bret Victor's [Drawing Dynamic Visualizations](http://worrydream.com/#!/DrawingDynamicVisualizationsTalk)
[ ] Inter-widget communications/sharing (of selections, configuration, etc)
[ ] Support for all manner of React-based widget types, including Geo ([WorldWind](https://worldwind.arc.nasa.gov)/[Cesium](https://cesium.com/platform/cesiumjs/)), 3D ([three.js](https://threejs.org)), and others

