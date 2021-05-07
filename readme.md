# GL-PLAYGROUND

Some early experiments with ["Golden Layout"](https://github.com/golden-layout/golden-layout)
(really with ["FlexLayout"](https://github.com/caplin/FlexLayout),
since that is [recommended](https://github.com/golden-layout/golden-layout#dropped-features)
for use with [React](https://reactjs.org/) and we are using [Reagent](https://github.com/reagent-project/reagent)


## Tooling

We are using [shadow-cljs](https://github.com/thheller/shadow-cljs)


### Running and Developing

Use shadow-cljs to start the application for development purposes:

    shadow-cljs watch :app

Then open your browser to:

    localhost:8081    

and start working with hot-reloading. Additionally, if you would like to nRepl into the running app, configure your IDE to
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
"batteries included" example of building "dashboard" and "dashboard-like" Single-Page Applications. But, it also burdened
the developer with a number of explicit and implicit couplings:

1. Interactions between the server and the client were scheduled, using [org.immutant/scheduling](http://immutant.org/documentation/current/apidoc/guide-scheduling.html), not "event-driven" as data changed
2. It was from 2016, so it predated shadow-cljs, using [cljsjs](http://cljsjs.github.io) to use React Javascript components.
3. It was built using Leiningen.
4. Only provided examples using [Highcharts](http://www.highcharts.com), which is itself very complex (and "sort-of" but not "exactly" [GG](https://ggplot2.tidyverse.org))
5. Highcharts is difficult to work with from CLJS, and incurs licensing fees.
6. Screen management is restricted to a single browser tab on a single screen by [react-grid-layout](https://github.com/react-grid-layout/react-grid-layout)

Further development by our team added more complications and ["complecting"](https://www.infoq.com/presentations/Simple-Made-Easy/):

1. UI Widget construction spans many namespaces and is difficult to understand, debug, and extend
2. Data subscriptions from the server often break [re-frame](https://github.com/Day8/re-frame) re-draw containership, causing "over refresh" of the UI

## What's worth keeping?

So what do we like about how things are done currently, at least from a UI/UX perspective?

1. Pushing data from the server, using websockets
2. Draggable screen organization (grids, etc)
3. User ability to pick the data first, then the visualization technique
4. Meta-data tagging on data sent by the server
5. Meta-data tagging on widgets, documenting the kinds of data they can "easily" present
6. Meta-data tags can be used to support data->visualization conversions
7. Complex and visually pleasing charts and diagrams, including Sankey diagrams
8. Preserving screen layout per user (personalization) at the Server

## Improvements we'd like to see

1. True "event-driven" updates from the Server
2. Support for query-driven updates as well
3. Move to a true OSS graphics library, like [oz](https://github.com/metasoarous/oz)
4. User-buildable widgets (grid content), akin to Bret Victor's [Drawing Dynamic Visualizations](http://worrydream.com/#!/DrawingDynamicVisualizationsTalk)
5. Inter-widget communications/sharing (of selections, configuration, etc)

