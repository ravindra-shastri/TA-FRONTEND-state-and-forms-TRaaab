import React from 'react';

class Question extends React.Component{
   constructor(props){
       super(props);
   }

   handleClick = (incId)=>{
       this.props.setQuestion(incId);
       }

   render(){
       return(
           <>
           <article className="question">
                <div className={ this.props.ques.id === this.props.activeQues ? 'questionbox active' : 'questionbox'}>
                <h1>{this.props.ques.Q}</h1> 
                <p>
                <span onClick={()=> this.handleClick(this.props.ques.id)}>
                    <i class="fas fa-hand-point-down"  className={this.props.activeQues === this.props.ques.id ? 'fas fa-hand-point-up' : 'fas fa-hand-point-down'}></i> </span>
               </p>
               </div>
              
              {
         this.props.ques.id === this.props.activeQues ?  <p className="answerbox"> {this.props.ques.A}</p> :   ''   
               }
           </article>
           </>
       );

   }
}

export default Question;