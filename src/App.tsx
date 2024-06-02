import './App.css'
import {Button, Input, Label} from '../'

function App() {

    return (
        <div style={{display: "flex", flexDirection:'column', gap:"1em"}}>
            <Label>The Label</Label>
            <Input/>
            <Button>The Button</Button>
        </div>
    )
}

export default App
