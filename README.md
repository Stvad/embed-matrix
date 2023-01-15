# Embed Matrix

This a tool that allows you to embed a live view on a public Matrix room anywhere on the web (where you can add iframes to anyway). 

See example in action at https://embed-matrix.netlify.app/?roomId=!oNHFzHHxnzlValnsyb:matrix.org&server=matrix.org

You can substitute the roomId and server parameters in the URL to embed a different room: 

`https://embed-matrix.netlify.app/?roomId={roomId}&server={server}`

## Usage

### Iframe

You can embed the Matrix room in an iframe on your website like this:

`<iframe src="https://embed-matrix.netlify.app/?roomId={roomId}&server={server}"></iframe>`

### Inline

You can embed the Matrix room inline on your website like this:

`<div id="embed-matrix" data-room-id="{roomId}" data-server="{server}"></div>`


`<script async crossorigin type="module" src="https://embed-matrix.netlify.app/inline.js"></script>`

### Caveats
- Room needs to be configured to allow guest users. Example from Element: 
  - ![](media/element-guest-access.png)
  - This is an issue because as far as I can tell you can't make the guest users (specifically) read-only
  - So there is a possibility of them joining the room and spamming it
  - Plausibly it's better to create a designated read-only user and use that instead of guest users
- It takes a bit to load the first time because it creates a guest user for you on a first load
- Message types besides text are not supported yet


### Implementation

This is a slim wrapper around [matrix-rx](https://github.com/Stvad/matrix-rx) client. 
You can use the React components from the library directly to do the room embedding 
programmatically with more control of the process.  
