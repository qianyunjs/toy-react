import {createElement,Component,render} from "./toy-react.js";

class MyCompontent extends Component{
    render(){
        return <div>
            <h1>my compontent</h1>
            {this.children}
        </div>
    }
}


render(<MyCompontent id="id" class="ss">
    <div>qq</div>
    <div>bb</div>
</MyCompontent>,document.body);