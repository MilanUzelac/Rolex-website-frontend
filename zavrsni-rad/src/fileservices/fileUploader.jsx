import React, { Component } from 'react';
import { FileService } from "./file-service.jsx";
import AddNewFeature from "../components/addnewrolexcomponents/addnewrolexcomponentsJS/AddNewFeature.jsx";
import FeatureForm from "./FeatureForm";
import Feature from "./Feature";
import axios from "axios";

export default class FileUploader extends Component {
    constructor() {
        super();
        this.fileService = new FileService();


    }



    state = {
        firstName: "Novak",
        lastName: "Djokovic",
        watchType: "",
        model: "",
        description: "",
        price: 0,
        priceWord: "",
        firstDesc: "",
        secondDesc: "",

        allFeatures: [],

        modelCase: "",
        oysterArchitecture: "",
        diameter: "",
        material: "",
        bezel: "",
        windingCrown: "",
        crystal: "",
        waterResistance: "",
        movement: "",
        calibre: "",
        precision: "",
        functions: "",
        oscilator: "",
        winding: "",
        powerReserve: "",
        bracelet: "",
        braceletMaterial: "",
        clasp: "",
        dial: "",
        dialDetails: "",
        certification: "",
        data: new FormData()
    }

    addFeature = (feature) => {
        this.setState({
            allFeatures: [feature, ...this.state.allFeatures]
        })
    
        let formdata = new FormData();
        console.log("TO SEND" + feature.featureImage);
        
       
        formdata.set('model',this.state.model)
        formdata.set('id', feature.id)
        formdata.append('featureImage', feature.featureImage)
        formdata.set('featureHead', feature.featureHead)
        formdata.set('featureDesc', feature.featureDesc)

        console.log(formdata.get("model"))
        console.log(formdata.get("id"))
        console.log(formdata.get("featureImage"))
        console.log(formdata.get("featureHead"))
        console.log(formdata.get("featureDesc"))

        axios({
            method: 'post',
            url: 'http://localhost:8082/createFeature',
            data: formdata,
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
        
            
    }

    handleDeleteFeature = id => {
        this.setState({
            allFeatures: this.state.allFeatures.filter(feature => feature.id != id)
        });
        const response = axios.delete('http://localhost:8082/deleteFeature/'+id)
        console.log(response)
    }


    handleReload = () =>{
        window.location.reload(false)
    }

    handleUploadWatchCardImage = (event) => {
        //using File API to get chosen file
        let watchCardImage = event.target.files[0];
        console.log("Uploading file", event.target.files[0]);
        this.state.data.append('watchCardImage', event.target.files[0]);
        //this.state.data.append('firstName', this.state.firstName);
        //this.state.data.append('lastName', this.state.lastName);
        //this.state.data.append('name', 'my_file');
        //this.state.data.append('description', 'this file is uploaded by young padawan');
        let self = this;
        //calling async Promise and handling response or error situation

    };

    handleUploadBackgroundImage = (event) => {
        //using File API to get chosen file
        let watchBackgroundImage = event.target.files[0];
        console.log("Uploading file", event.target.files[0]);
        this.state.data.append('watchBackgroundImage', event.target.files[0]);
        //calling async Promise and handling response or error situation
    };

    handleUploadWatchImage = (event) => {
        //using File API to get chosen file
        let watchImage = event.target.files[0];
        console.log("Uploading file", event.target.files[0]);
        this.state.data.append('watchImage', event.target.files[0]);
        //calling async Promise and handling response or error situation
    };

    handleUploadWatchNightImage = (event) => {
        //using File API to get chosen file
        let watchNightImage = event.target.files[0];
        console.log("Uploading file", event.target.files[0]);
        this.state.data.append('watchNightImage', event.target.files[0]);
        //calling async Promise and handling response or error situation
    };

    handleUploadFeaturesImage = (event) => {
        //using File API to get chosen file
        let watchFeatureImage = event.target.files[0];
        console.log("Uploading file", event.target.files[0]);
        this.state.data.append('watchFeatureImage', event.target.files[0]);
        //calling async Promise and handling response or error situation
    };


    handleUploadRolexBoxImage = (event) => {
        //using File API to get chosen file
        let watchBoxImage = event.target.files[0];
        console.log("Uploading file", event.target.files[0]);
        this.state.data.append('watchBoxImage', event.target.files[0]);
        //calling async Promise and handling response or error situation
    };

    handleUploadWatchCaseImage = (event) => {
        //using File API to get chosen file
        let watchCaseImage = event.target.files[0];
        console.log("Uploading file", event.target.files[0]);
        this.state.data.append('watchCaseImage', event.target.files[0]);
        //calling async Promise and handling response or error situation
    };


    handleUploadWatchMovementImage = (event) => {
        //using File API to get chosen file
        let watchMovementImage = event.target.files[0];
        console.log("Uploading file", event.target.files[0]);
        this.state.data.append('watchMovementImage', event.target.files[0]);
        //calling async Promise and handling response or error situation
    };

    handleUploadWatchBraceletImage = (event) => {
        //using File API to get chosen file
        let watchBraceletImage = event.target.files[0];
        console.log("Uploading file", event.target.files[0]);
        this.state.data.append('watchBraceletImage', event.target.files[0]);
        //calling async Promise and handling response or error situation
    };

    handleUploadWatchDialImage = (event) => {
        //using File API to get chosen file
        let watchDialImage = event.target.files[0];
        console.log("Uploading file", event.target.files[0]);
        this.state.data.append('watchDialImage', event.target.files[0]);
        //calling async Promise and handling response or error situation
    };

    handleUploadWatchCertificationImage = (event) => {
        //using File API to get chosen file
        let watchCertificationImage = event.target.files[0];
        console.log("Uploading file", event.target.files[0]);
        this.state.data.append('watchCertificationImage', event.target.files[0]);
        //calling async Promise and handling response or error situation
    };

    handleUploadWatchOrderBackgroundImage = (event) => {
        //using File API to get chosen file
        let watchOrderBackgrounImage = event.target.files[0];
        console.log("Uploading file", event.target.files[0]);
        this.state.data.append('watchOrderBackgroundImage', event.target.files[0]);
        //calling async Promise and handling response or error situation
    };



    /*handleUploadFile = (event) => {
        //using File API to get chosen file
        let file = event.target.files[0];
        console.log("Uploading file", event.target.files[0]);
        this.state.data.append('file', event.target.files[0]);
        this.state.data.append('firstName', this.state.firstName);
        this.state.data.append('lastName', this.state.lastName);
        this.state.data.append('name', 'my_file');
        this.state.data.append('description', 'this file is uploaded by young padawan');
        let self = this;
        //calling async Promise and handling response or error situation
        
    };*/

    onClickUpload = (e) => {
        this.state.data.append('watchType', this.state.watchType);
        this.state.data.append('model', this.state.model);
        this.state.data.append('description', this.state.description);
        this.state.data.append('price', this.state.price);
        this.state.data.append('priceWord', this.state.priceWord);
        this.state.data.append('firstDesc', this.state.firstDesc);
        this.state.data.append('secondDesc', this.state.secondDesc);
        this.state.data.append('headFeature', this.state.headFeature);
        this.state.data.append('textFeature', this.state.textFeature);
        this.state.data.append('modelCase', this.state.modelCase);
        this.state.data.append('oysterArchitecture', this.state.oysterArchitecture);
        this.state.data.append('diameter', this.state.diameter);
        this.state.data.append('material', this.state.material);
        this.state.data.append('bezel', this.state.bezel);
        this.state.data.append('windingCrown', this.state.windingCrown);
        this.state.data.append('crystal', this.state.crystal);
        this.state.data.append('waterResistance', this.state.waterResistance);
        this.state.data.append('movement', this.state.movement);
        this.state.data.append('calibre', this.state.calibre);
        this.state.data.append('precision', this.state.precision);
        this.state.data.append('functions', this.state.functions);
        this.state.data.append('oscilator', this.state.oscilator);
        this.state.data.append('winding', this.state.winding);
        this.state.data.append('powerReserve', this.state.powerReserve);
        this.state.data.append('bracelet', this.state.bracelet);
        this.state.data.append('braceletMaterial', this.state.braceletMaterial);
        this.state.data.append('clasp', this.state.clasp);
        this.state.data.append('dial', this.state.dial);
        this.state.data.append('dialDetails', this.state.dialDetails);
        this.state.data.append('certification', this.state.certification);



        alert("sent")
        this.fileService.uploadFileToServer(this.state.data).then((response) => {
            console.log("File is uploaded");
        }).catch(function (error) {
            console.log(error);
            if (error.response) {
                //HTTP error happened
                console.log("Upload error. HTTP error/status code=", error.response.status);
            } else {
                //some other error happened
                console.log("Upload error. HTTP error/status code=", error.message);
            }
        });

        this.handleReload();
    }

    handleInputFirstName = event => {
        this.setState({ firstName: event.target.value })
    }

    handleInputLastName = event => {
        this.setState({ lastName: event.target.value })
    }

    handleInputWatchType = event => {
        this.setState({ watchType: event.target.value })
    }

    handleInputModel = event => {
        this.setState({ model: event.target.value })
    }

    handleInputDescription = event => {
        this.setState({ description: event.target.value })
    }

    handleInputPrice = event => {
        this.setState({ price: event.target.value })
    }

    handleInputPriceWord = event => {
        this.setState({ priceWord: event.target.value })
    }

    handleInputFirstDesc = event => {
        this.setState({ firstDesc: event.target.value })
    }

    handleInputSecondDesc = event => {
        this.setState({ secondDesc: event.target.value })
    }



    // handleInputHeadFeature = event => {
    //     this.setState({ headFeature: event.target.value })
    //     console.log(this.state.headFeature)
    // }

    // handleInputTextFeature = event => {
    //     this.setState({ textFeature: event.target.value })
    //     console.log(this.state.textFeature)
    // }

    // addFeatureToFeaturesState = event => {
    //     this.state.features.setState({ features: [...this.state.feature, ...this.state.features] })
    //     console.log(this.state.features)
    // }



    handleInputModelCase = event => {
        this.setState({ modelCase: event.target.value })
    }

    handleInputOysterArch = event => {
        this.setState({ oysterArchitecture: event.target.value })
    }

    handleInputDiameter = event => {
        this.setState({ diameter: event.target.value })
    }

    handleInputMaterial = event => {
        this.setState({ material: event.target.value })
    }

    handleInputBezel = event => {
        this.setState({ bezel: event.target.value })
    }

    handleInputWindingCrown = event => {
        this.setState({ windingCrown: event.target.value })
    }

    handleInputCrystal = event => {
        this.setState({ crystal: event.target.value })
    }

    handleInputWaterResistance = event => {
        this.setState({ waterResistance: event.target.value })
    }

    handleInputMovement = event => {
        this.setState({ movement: event.target.value })
    }

    handleInputCalibre = event => {
        this.setState({ calibre: event.target.value })
    }

    handleInputprecision = event => {
        this.setState({ precision: event.target.value })
    }

    handleInputFunctions = event => {
        this.setState({ functions: event.target.value })
    }

    handleInputOscilator = event => {
        this.setState({ oscilator: event.target.value })
    }

    handleInputWinding = event => {
        this.setState({ winding: event.target.value })
    }

    handleInputPowerReserve = event => {
        this.setState({ powerReserve: event.target.value })
    }

    handleInputBracelet = event => {
        this.setState({ bracelet: event.target.value })
    }

    handleInputBraceletMaterial = event => {
        this.setState({ braceletMaterial: event.target.value })
    }

    handleInputClasp = event => {
        this.setState({ clasp: event.target.value })
    }

    handleInputDial = event => {
        this.setState({ dial: event.target.value })
    }

    handleInputDialDetails = event => {
        this.setState({ dialDetails: event.target.value })
    }

    handleInputCertification = event => {
        this.setState({ certification: event.target.value })
    }


    handleInputHeadFeature = event => {
        this.setState({ headFeature: event.target.value })
    }

    handleInputTextFeature = event => {
        this.setState({ textFeature: event.target.value })
    }





    render() {
        return (
            <div>

                <h4>FirstName:</h4>
                <input type="text" onChange={this.handleInputFirstName}></input>
                <h4>LastName:</h4>
                <input type="text" onChange={this.handleInputLastName}></input>
                <br></br>
                <input type="file" onChange={this.handleUploadFile} />


                <h4>Watch type</h4>
                <input type="text" onChange={this.handleInputWatchType}></input>

                <h4>Image of watch in card</h4>
                <input type="file" onChange={this.handleUploadWatchCardImage}></input>

                <h4>Model</h4>
                <input type="text" onChange={this.handleInputModel}></input>

                <h4>Description</h4>
                <input type="text" onChange={this.handleInputDescription}></input>

                <h4>Price</h4>
                <input type="number" onChange={this.handleInputPrice}></input>

                <h4>Price with word</h4>
                <input type="text" onChange={this.handleInputPriceWord}></input>

                <h4>Background watch image</h4>
                <input type="file" onChange={this.handleUploadBackgroundImage}></input>

                <h4>Image of watch - 600x600</h4>
                <input type="file" onChange={this.handleUploadWatchImage}></input>

                <h4>Night image of watch - 600x600</h4>
                <input type="file" onChange={this.handleUploadWatchNightImage}></input>

                <h4>First Desc</h4>
                <input type="text" onChange={this.handleInputFirstDesc}></input>

                <h4 >Second desc</h4>
                <input type="text" onChange={this.handleInputSecondDesc}></input>







                <div><FeatureForm onSubmit={this.addFeature} />
                    {
                        this.state.allFeatures.map(feature => (
                            <Feature key={feature.id} head={feature.featureHead} desc={feature.featureDesc} image={feature.featureImage.name} onDelete={() => this.handleDeleteFeature(feature.id)} />
                        ))

                    }
                </div>





                <h4>Rolex box image</h4>
                <input type="file" onChange={this.handleUploadRolexBoxImage}></input>

                <h3>Model Case</h3>

                <h4>Image of case</h4>
                <input type="file" onChange={this.handleUploadWatchCaseImage}></input>

                <h4>Model of case</h4>
                <input type="text" onChange={this.handleInputModelCase}></input>

                <h4>Oyster Architecture</h4>
                <input type="text" onChange={this.handleInputOysterArch}></input>

                <h4>Diameter</h4>
                <input type="text" onChange={this.handleInputDiameter}></input>

                <h4>Material</h4>
                <input type="text" onChange={this.handleInputMaterial}></input>

                <h4>Bezel</h4>
                <input type="text" onChange={this.handleInputBezel}></input>

                <h4>Winding Crown</h4>
                <input type="text" onChange={this.handleInputWindingCrown}></input>

                <h4>Crystal</h4>
                <input type="text" onChange={this.handleInputCrystal}></input>

                <h4>Water resistance</h4>
                <input type="text" onChange={this.handleInputWaterResistance}></input>


                <h3>WATCH MOVEMENT</h3>
                <h4>Image movement</h4>
                <input type="file" onChange={this.handleUploadWatchMovementImage}></input>

                <h4>Movement</h4>
                <input type="text" onChange={this.handleInputMovement}></input>

                <h4>Calibre</h4>
                <input type="text" onChange={this.handleInputCalibre}></input>

                <h4>Precision</h4>
                <input type="text" onChange={this.handleInputprecision}></input>

                <h4>Functions</h4>
                <input type="text" onChange={this.handleInputFunctions}></input>

                <h4>Oscilator</h4>
                <input type="text" onChange={this.handleInputOscilator}></input>

                <h4>Winding</h4>
                <input type="text" onChange={this.handleInputWinding}></input>

                <h4>Power reserve</h4>
                <input type="text" onChange={this.handleInputPowerReserve}></input>


                <h3>BRACELET</h3>
                <h4>Bracelet image</h4>
                <input type="file" onChange={this.handleUploadWatchBraceletImage}></input>

                <h4>Bracelet</h4>
                <input type="text" onChange={this.handleInputBracelet}></input>

                <h4>Bracelet material</h4>
                <input type="text" onChange={this.handleInputBraceletMaterial}></input>

                <h4>Clasp</h4>
                <input type="text" onChange={this.handleInputClasp}></input>

                <h3>WATCH DIAL</h3>
                <h4>Dial image</h4>
                <input type="file" onChange={this.handleUploadWatchDialImage}></input>

                <h4>Dial</h4>
                <input type="text" onChange={this.handleInputDial}></input>

                <h4>Dial details</h4>
                <input type="text" onChange={this.handleInputDialDetails}></input>


                <h3>WATCH CERTIFICATION</h3>
                <h4>Certification Image</h4>
                <input type="file" onChange={this.handleUploadWatchCertificationImage}></input>

                <h4>Certification</h4>
                <input type="text" onChange={this.handleInputCertification}></input>

                <h4>Order backgroud image</h4>
                <input type="file" onChange={this.handleUploadWatchOrderBackgroundImage}></input>

                <button onClick={this.onClickUpload}>Upload</button>


            </div>
        )
    };
}