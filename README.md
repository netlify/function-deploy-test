# This repository shows the 3 ways you can deploy Javascript Netlify Functions.

- /lambda/bundled-function
    - The build script in the root package.json file bundles the function and its depdendency into a single file and that bundled file is copied into the functions/ folder.
- /lambda/zipped-function
    - The build script also zips this whole folder (including the node_modules, etc.) into a zip file and copied into the functions/ folder.
- /functions/zisi-function
    - The build script does not touch this function at all. This function is handled by the Netlify Buildbot using the built-in zip-it-and-ship-it feature.

## Zip-it-and-Ship-it deployed functions

There is now a troubleshooting section in the repo here: https://github.com/netlify/zip-it-and-ship-it/blob/master/README.md#troubleshooting.
And there is a details description on the bundling strategy here: https://github.com/netlify/zip-it-and-ship-it/blob/master/README.md#zipfunctionssrcfolder-destfolder-options.


## Other

Deployed site: awesome-torvalds-d5c2df.netlify.com
https://app.netlify.com/sites/awesome-torvalds-d5c2df/functions
