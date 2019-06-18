import React from 'react';
import './index.css';
import './Collapse.css';

const text = 
    `A dog is a type of domesticated animal. 
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world`;

const data = [
    {
        title: 'This is Panel 1',
        content: text
    },
    {
        title: 'This is Panel 2',
        content: text
    },
    {
        title: 'This is Panel 3',
        content: text
    }
]
class Collapse extends React.Component {
   render () {
       const item = [];
        for (let i = 0; i < data.length; i++) {
            const key = i + 1;
            item.push (
                <CollapseItem title = {data[i].title} content = {data[i].content} 
                                index = {i} key = {key} />
            );
        }

       
       return (
           <div className = 'wrapper' >
               { item}
            </div>
       )
   }
}

class CollapseItem extends React.Component {
    constructor(props) {
        super(); 
        this.title = props.title;
        this.content = props.content;
        this.index = props.index;
        this.state = {
            shown: false,
        };
    }

    toggle() {
        this.setState({
            shown: !this.state.shown,
        });
    }

    render() {
        let shown = {
            display: this.state.shown ? "block" : "none",

        };
        return (
            <div className = "item">
              <button className = {`butt${this.index}`} onClick = {this.toggle.bind(this)} disabled = {this.index === 2}>
                <i className = "arrow">
                    <svg className ={this.state.shown? 'rotate': null}
                    viewBox="64 64 896 896" class="" data-icon="right" 
            width="1em" height="1em" fill="currentColor" aria-hidden="true" 
            focusable="false" >
                <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
                </svg>
                </i>     {this.title}</button>
              <div className = "content" style = {shown}>
                  <p> {this.content} </p>
                </div>
            </div>
        )
    }
}



export default Collapse;
