import {GuestRoomView} from 'matrix-rx'

function App() {
    const urlSearchParams = new URLSearchParams(window.location.search)
    const params = Object.fromEntries(urlSearchParams.entries())

    return (
        <div className="App">
            <GuestRoomView roomId={params.roomId} server={params.server}/>
        </div>
    )
}

export default App
