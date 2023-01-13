import ReactDOM from 'react-dom/client'
import React from 'react'
import {GuestRoomView} from 'matrix-rx'
import {ChakraProvider} from '@chakra-ui/react'
import {CacheProvider} from '@emotion/react'
import createCache from '@emotion/cache'

interface InitProps {
    roomId: string
    server: string
    rootElement: HTMLElement
}

export const init = (params: InitProps) => {
    console.log('Initializing matrix-rx', params)
    const shadowRoot = params.rootElement.attachShadow({mode: 'open'})

    const styleCache = createCache({
        key: 'embed-matrix',
        container: shadowRoot as Node,
    })

    ReactDOM.createRoot(shadowRoot).render(
        <React.StrictMode>
            <CacheProvider value={styleCache}>
                <ChakraProvider>
                    <GuestRoomView roomId={params.roomId} server={params.server}/>
                </ChakraProvider>
            </CacheProvider>
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
