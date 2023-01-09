import {GuestRoomView} from 'matrix-rx'
import {ChakraProvider} from '@chakra-ui/react'

function App() {
    const urlSearchParams = new URLSearchParams(window.location.search)
    const params = Object.fromEntries(urlSearchParams.entries())

    return (
        <ChakraProvider>
            <GuestRoomView roomId={params.roomId} server={params.server}/>
        </ChakraProvider>
    )
}

export default App
