import React from "react";

class Formone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: "",
            dateInput: "",
            textarea: ""
        }
        this.fileInput = React.createRef();
    }
    handleInput = ({ target }) => {
        let { name, value } = target;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.textInput + " " + this.state.dateInput + " " + this.state.textarea);
        console.log(this.fileInput.current.files[0].name);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="textInput">Text Input</label>
                    <input type="text" id="textInput" name="textInput" onChange={this.handleInput} value={this.state.value} />
                    <label htmlFor="dateInput">Date Input</label>
                    <input type="date" id="dateInput" name="dateInput" onChange={this.handleInput} value={this.state.value} />
                    <label htmlFor="fileInput">File Input</label>
                    <input type="file" id="fileInput" name="fileInput" onChange={this.handleInput} ref={this.fileInput} /> 
                    <label htmlFor="readOnlyInput">Read-Only-Input</label>
                    <input type="text" id="readonlyInput" name="readOnlyInput" readOnly value="This can only be Read" onChange={this.handleInput} />
                    <label htmlFor="disabledInput">Disabled Input</label>
                    <input type="text" id="disabledInput" name="disabledInput" disabled onChange={this.handleInput} />
                    <label htmlFor="textarea">Textarea </label>
                    <textarea id="textarea" onChange={this.handleInput} value={this.state.value}>
                    </textarea>
                    <label htmlFor="disabledTextarea">Textarea Disabled</label>
                    <textarea id="disabledTextarea" disabled onChange={this.handleInput}>
                    </textarea>
                    <button type="submit" value="Submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Formone;