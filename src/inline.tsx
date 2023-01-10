import ReactDOM from 'react-dom/client'
import React from 'react'
import {GuestRoomView} from 'matrix-rx'
import {ChakraProvider} from '@chakra-ui/react'

interface InitProps {
    roomId: string
    server: string
    rootElement: HTMLElement
}

export const init = (params: InitProps) => {
    ReactDOM.createRoot(params.rootElement).render(
        <React.StrictMode>
            <ChakraProvider>
                <GuestRoomView roomId={params.roomId} server={params.server}/>
            </ChakraProvider>
        </React.StrictMode>,
    )
}

const initFromElement = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (!element) {
        console.error(`No element found with id ${elementId}, please call init directly`)
        return
    }
    const roomId = element.getAttribute('data-room-id')
    const server = element.getAttribute('data-server')
    if (!roomId || !server) {
        console.error(`No data-room-id or data-server attribute found on element ${elementId}`)
        return
    }
    init({roomId, server, rootElement: element})
}

initFromElement('embed-matrix')
