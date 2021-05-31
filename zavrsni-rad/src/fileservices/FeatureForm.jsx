import React from "react";
import shortId from "shortid";


class FeatureFrom extends React.Component{

    state = {
        featureHead:"",
        featureDesc:"",
    };


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleUploadFeaturesImage = (event) => {
        this.setState({featureImage: event.target.files[0]})
    };

    handleSubmit = (event) => {
        
        event.preventDefault();
        
        this.props.onSubmit({
            id: shortId.generate(),
            featureHead: this.state.featureHead,
            featureDesc: this.state.featureDesc,
            featureImage: this.state.featureImage
        })
        this.setState({
            featureHead:"",
            featureDesc:"",
        })
    }

   
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            
                <h3>WATCH FEATURES</h3>

                 <h4>Image of feature</h4>
                <input type="file" onChange={this.handleUploadFeaturesImage}></input> 

                <h4>Head text of feature</h4>
                <input type="text" name="featureHead" value={this.state.featureHead} onChange={this.handleChange}></input>

                <h4>Text features</h4>
                <input type="text" name="featureDesc" value={this.state.featureDesc} onChange={this.handleChange}></input>


                <button onClick={this.handleSubmit}> ADD NEW FEATURE</button>
            </form>
        )
    }

}
export default FeatureFrom;