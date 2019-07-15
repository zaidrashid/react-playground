import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        this.state = {spans: 0};
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({spans});
    }

    render() {
        const {description, urls, id, alt_description} = this.props.image;
        return (
            <div key={id} style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img
                    ref={this.imageRef}
                    src={urls.regular}
                    alt={description || alt_description}>
                </img>
            </div>
        );
    }
}

export default ImageCard;