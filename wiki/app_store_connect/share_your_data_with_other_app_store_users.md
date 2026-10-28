---
layout: wiki
title: "Share your data with other App Store Users"
permalink: /app_store_connect/share_your_data_with_other_app_store_users.html
---
Other App Store users can only access your data if you explicitly authorize it. App Store Connect is the gateway. Follow the instructions below to configure sharing.

1. Log onto the server hosting App Store Connect. Open the "App Store Connect" shortcut on the desktop. Alternatively, open a web browser and go to http://localhost:2006/Service/AppStore.
Select "Configure Data Core". (Data Core is platform App Store Connect employs.)

<img src="/assets/media/app_store_connect/authorizedatasource01.png" alt="authorizedatasource01" style="max-width:400px" loading="lazy" />

2. From the menu, select "Real-Time Data > Data Sources"

<img src="/assets/media/app_store_connect/authorizedatasource02.png" alt="authorizedatasource02" style="max-width:400px" loading="lazy" />

3. Find the data source you wish to share, and select "Details".

<img src="/assets/media/app_store_connect/authorizeddatasource09.png" alt="authorizeddatasource09" style="max-width:400px" loading="lazy" />

4. Add an authorization rule.

<img src="/assets/media/app_store_connect/authorizedatasource04.png" alt="authorizedatasource04" style="max-width:400px" loading="lazy" />

5. Configure the authorization rule. For instance, we may with to allow read access to a specific user.

<img src="/assets/media/app_store_connect/authorizedatasource05.png" alt="authorizedatasource05" style="max-width:400px" loading="lazy" />

6. Use the search input to select users or groups. To include search results from trusted 3rd parties, select the checkbox.

<strong>Hint</strong> We recommend selecting "groups". <br /> Groups are defined and administered in the Organization Portal of the Industrial App Store.
<br /> <em>[More info...](/general/organization_user_and_data_management/user_management.html)</em>

<img src="/assets/media/app_store_connect/authorizedatasource06.png" alt="authorizedatasource06" style="max-width:400px" loading="lazy" />

7. Select "Add" to confirm selection.

<img src="/assets/media/app_store_connect/authorizeddatasource12.png" alt="authorizeddatasource12" style="max-width:400px" loading="lazy" />

8. Confirm your authorization rule is correct and select "Add rule".

<img src="/assets/media/app_store_connect/authorizedatasource07.png" alt="authorizedatasource07" style="max-width:400px" loading="lazy" />

9. And that's it! Your colleague is now permitted to view your data in App Store <em>connected</em> apps.

(Note you can return to this page and revoke permission by selecting <strong>Remove</strong>.)

<img src="/assets/media/app_store_connect/authorizedatasource08.png" alt="authorizedatasource08" style="max-width:400px" loading="lazy" />
