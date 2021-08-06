import React from 'react';


class Square extends React.Component {
    render() {
        return (
        <button className="square">
            {this.prop.value}
             </button>

        )
    }
}

export default Square;