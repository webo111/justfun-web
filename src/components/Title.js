import React from 'react';

class Title extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const titleStyle = {
            padding:'5px 20px',
            color:'#5C6B77',
            background:'#ecf6fd',
            marginTop: 20,
            marginBottom: 10,
            letterSpacing:4,
            borderRadius:3,
            overflow:'hidden',
        };
        return(
            <div style={titleStyle}>
                <h2>{this.props.title}</h2>
            </div>
        );
    }
}

export default Title;