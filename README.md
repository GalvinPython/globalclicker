# GlobalClicker
[Click here to play](https://gc.galvindev.me.uk)  
![Website](https://img.shields.io/website?url=https%3A%2F%2Fgc.galvindev.me.uk&style=for-the-badge&label=Website) ![API](https://img.shields.io/website?url=https%3A%2F%2Fapi-gc.galvindev.me.uk&style=for-the-badge&label=API)

# Note
This clicker is no longer being actively maintained, and will only be getting security updates and such, as I have a new, improved clicker [here](https://github.com/stats100/clicker)

# API Endpoints
These are the currently working endpoints, however more are to be developed:
* /clicks - Get the number of clicks **(GET)**

# Changelog
<details>
  
  ### 1.0 (24/05/2024)
  * Changed API response
  * Out of beta because there's nothing else happening
  
  <summary>Beta</summary>
  
  ### Beta 0.3.1 (18/09/2023)
  #### Frontend
  * Fixed loading time bug (thanks Nia)

  ### Beta 0.3 (26/07/2023)
  #### Frontend
  * Removed the two CSS files and replaced them with one `index.css` file
  * Changed the frequency of how often the API was requested from one second to two seconds to reduce stress on the server
  * Renamed `manifest.json` to `site.webmanifest`
  * Renamed `short_name` in manifest file to **Clicker App** to meet 12 character recommendation

  #### Backend
  * No changes. Version 1.0 will address >20 second response times

  ### Beta 0.2 (02/06/2023)
  String: Version 0.2-20230701
  #### Frontend
  * Changed cursor image to app icon
  * Removed React template files

  #### Backend
  * Changed the response to a **/clicked** request  
    * Previously the JSON response would be
    ```json
    {
      "fieldCount":0,
      "affectedRows":1,
      "insertId":0,
      "serverStatus":2,
      "warningCount":0,
      "message":"",
      "protocol41":true,
      "changedRows":0
    }
    ```
    however, it's now been changed to:
    ```json
    {
      "clicks": 1
    }
    ```

  #### Other
  * Modified some things in README

  ### Beta 0.1 (21/06/2023)
  String: Version 0.1-20230621
  #### Frontend
  - Design released
  #### Backend
  - APIS
    - `/clicks` - Get the number of clicks (GET)
</details>