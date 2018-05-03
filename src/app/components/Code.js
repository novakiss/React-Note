import React, {Component} from 'react';

class Code extends Component {

    render() {
        const {text} = this.props;

        return (
            <pre>
                <code>
                <span>{text}</span>
            </code>
            </pre>

        )

    }

}

export default Code;