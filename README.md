# GlobalClicker
[Click here to play](https://gc.galvindev.me.uk)

# API Endpoints
There are currently only two supported endpoints, however more are to be developed:
* /clicks - Get the number of clicks **(GET)**
* /clicked - Add another number to the clicks total **(GET)**
  * This is a GET request as post requests were bugging, and a GET request was the first way to getting it worked properly  

<!-- **Look at `sample/readme.md` for sample API code** -->

# Changelog
Note: Backend code isn't available, however changes are documented

<details>
  <summary>Beta</summary>
  
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