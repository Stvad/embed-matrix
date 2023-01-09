# Embed Matrix

This a tool that allows you to embed a live view on a public Matrix room anywhere on the web (where you can add iframes to anyway). 

See example in action at https://embed-matrix.netlify.app/?roomId=!oNHFzHHxnzlValnsyb:matrix.org&server=matrix.org

You can substitute the roomId and server parameters in the URL to embed a different room: 

`https://embed-matrix.netlify.app/?roomId={roomId}&server={server}`

### Caveats
- Room needs to be configured to allow guest users. Example from Element: 
  ![](media/element-guest-access.png)
- Message types besides text are not supported yet
- It takes a bit to load the first time because it creates a guest user for you on a first load


### Implementation

This is a slim wrapper around [matrix-rx](https://github.com/Stvad/matrix-rx) client. 
You can use the React components from the library directly to do the room embedding 
programmatically with more control of the process.  
