import {template} from './templates/template'
import './styles/styles.css'

(async function App(){
    
    const root = null || document.getElementById('root')
    root.innerHTML= await template();
})(); 