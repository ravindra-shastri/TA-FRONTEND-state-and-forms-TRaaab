import data from "../data/data.json";
import Question from "./Question";
import React from "react";

class Questions extends React.Component{
    constructor(props){
        super(props);

        this.state={
            activeQues:null
        }
    }

    setQuestion = (response) =>{
        this.setState({
            activeQues: this.state.activeQues === response ? null : response,
        });
    }

    render(){
       return(
           <>
            <h2>AltCampus FAQs</h2>
            {
                data.questions.map((ques, index) => {
                return <>
                <Question key={ques.id}  ques={ques} {...this.state} setQuestion={(response)=>this.setQuestion(response)} />
                </>
                }
                )
            }
           </>
       );
    }
};

export default Questions;