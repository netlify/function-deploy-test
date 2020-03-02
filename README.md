# This repository shows the 3 ways you can deploy Javascript Netlify Functions.

- /lambda/bundled-function
    - The build script in the root package.json file bundles the function and its depdendency into a single file and that bundled file is copied into the functions/ folder.
- /lambda/zipped-function
    - The build script also zips this whole folder (including the node_modules, etc.) into a zip file and copied into the functions/ folder.
- /functions/zisi-function
    - The build script does not touch this function at all. This function is handled by the Netlify Buildbot using the built-in zip-it-and-ship-it feature.
    
Deployed site: awesome-torvalds-d5c2df.netlify.com

https://app.netlify.com/sites/awesome-torvalds-d5c2df/functions
