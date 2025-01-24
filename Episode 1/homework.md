## what is cdn ?
cdn is globally distributed network of servers designed to deliver content.

## why do we use cdn ?
they serve the content(js libraries, css frameworks, images, fonts, videos, etc) from servers that are geographically closer to the user.

## what is crossorigin that is written in cdn link?
1. he crossorigin attribute in a <script> tag specifies whether the browser should include credentials (like cookies or HTTP authentication) in cross-origin requests when loading a resource.
2. Why is crossorigin needed?
When using external resources (like a React library from a CDN), the browser makes a CORS (Cross-Origin Resource Sharing) request. The crossorigin attribute:
- Ensures proper communication between the client and the CDN.
- Prevents errors if the resource requires CORS headers.
- Improves security and caching behavior.
3. When you include the crossorigin attribute without a value, it is equivalent to crossorigin="anonymous".