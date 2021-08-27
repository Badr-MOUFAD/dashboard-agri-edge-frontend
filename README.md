# Overview 

This [dashboard](https://dashboard-agri-edge-morocco-wheat-weather.vercel.app/) exhibits in a friendly way the clusters of each Moroccan region according to weather data related to the wheat calendar. It not only enables exploring finely the clusters' characteristics of each region but also gives an insight into the relationship between the weather of regions.

The main purpose of this dashboard is to help [Agri Edge](https://agriedge.um6p.ma/) in finding relations between regions and crop years so that to enhance predictive models. In addition, to provide a visual tool to support their discussions with farmers during field trips.

The dashboard was developped using JavaScript. I particularly used [`React`](https://reactjs.org/) + [`Redux`](https://redux.js.org/) for logic and state management, [`Plotly`](https://plotly.com/javascript/) to build charts, and finaly [`Tailwind CSS`](https://tailwindcss.com/) + some [ready to use templates](https://www.tailwind-kit.com/started) to style components.

Follow [this link](https://dashboard-agri-edge-morocco-wheat-weather.vercel.app/) to view a live version of the dashboard. **Note that the dashboard is not compatible with a mobile or tablet, hence it is recommended to open it on a laptop or desktop**.


# Dashboard description

The dashboard comprises **three** sections:

- The 1st section shows a map of Morocco in a particular crop year where regions are colored by their clusters. The color of the region indicates whether the weather in this particular crop year was dry (Low), normal (Medium), or High (rainy). It is possible to animate the evolution of clusters for each region using a slide bar.

- Once a region in the map is selected, the 2nd section exposes the details of each cluster by showing the centroids of clusters according to weather variables, namely **precipitation**, [**GDD**](https://en.wikipedia.org/wiki/Growing_degree-day), **wind** and **humidity**. Note that the plots show the cumulative sum of these weather variables.

- The last section enables a deep exploration of region weather. Indeed, one has the choice to plot the evolution of a weather variable in whatever crop year.

It is possible to export the clusters of the selected region as `.json` file by clicking the export button located at the sidebar.


# Contribute | Modify | Adapt

You are free to adapt this dashboard to your use case or add some additional functionalities. To do so, I highly recommend cloning the repo in [`CodeSandbox`](https://codesandbox.io/s/github). There it is easy to modify code and see direct effects and more importantly deploy your new version.


# Further links:

- Details about data namely how it was gathered, preprocessed, clustered, and prepared for use can be found in the repository [`dashboard-AgriEdge-data`](https://github.com/Badr-MOUFAD/dashboard-AgriEdge-data).
- Methodology followed to perform the multivariate clustering of wheat calendar weather data can be found in this repository [`multivariate-time-series-clustering`](https://github.com/Badr-MOUFAD/multivariate-time-series-clustering)
