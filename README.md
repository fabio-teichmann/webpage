# webpage

## Critical Render Path

Path the browser takes in order to display a website:

- requests first the **HTML** file; scanns it for additional requirements
- requests next the **CSS** file to resolve **HTML** requirements
  - **CSS** is a blocking element (without it the website cannot be built)
- if required, requests next any _fonts_ that the **HTML** indicates
