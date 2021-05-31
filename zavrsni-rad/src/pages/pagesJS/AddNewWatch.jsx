import React from "react";
import "../pagesCSS/AddNewWatch.css";
import { useState } from "react";
import AddNewFeature from "../../components/addnewrolexcomponents/addnewrolexcomponentsJS/AddNewFeature";
import axios from "axios";
import ModelContext from "../../components/addnewrolexcomponents/addnewrolexcomponentsJS/ModelContext";


const AddNewWatch = () => {

    const [watch, setWatch] = useState({
        watchType: "",
        model: "",
        description: "",
        price: 0,
        priceWord: "",
        firstDesc: "",
        secondDesc: "",
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
    })


    const handleUpload = (e) => {
        e.preventDefault()
        watch.data.append('watchType', watch.watchType);
        watch.data.append('model', watch.model);
        watch.data.append('description', watch.description);
        watch.data.append('price', watch.price);
        watch.data.append('priceWord', watch.priceWord);
        watch.data.append('firstDesc', watch.firstDesc);
        watch.data.append('secondDesc', watch.secondDesc);
        watch.data.append('modelCase', watch.modelCase);
        watch.data.append('oysterArchitecture', watch.oysterArchitecture);
        watch.data.append('diameter', watch.diameter);
        watch.data.append('material', watch.material);
        watch.data.append('bezel', watch.bezel);
        watch.data.append('windingCrown', watch.windingCrown);
        watch.data.append('crystal', watch.crystal);
        watch.data.append('waterResistance', watch.waterResistance);
        watch.data.append('movement', watch.movement);
        watch.data.append('calibre', watch.calibre);
        watch.data.append('precision', watch.precision);
        watch.data.append('functions', watch.functions);
        watch.data.append('oscilator', watch.oscilator);
        watch.data.append('winding', watch.winding);
        watch.data.append('powerReserve', watch.powerReserve);
        watch.data.append('bracelet', watch.bracelet);
        watch.data.append('braceletMaterial', watch.braceletMaterial);
        watch.data.append('clasp', watch.clasp);
        watch.data.append('dial', watch.dial);
        watch.data.append('dialDetails', watch.dialDetails);
        watch.data.append('certification', watch.certification);

        axios({
            method: 'post',
            url: 'http://rolexwebsite.com/api/watches/admin/createWatch',
            data: watch.data,
            headers: { 'Content-Type': 'multipart/form-data',
                    "Authorization" : localStorage.getItem("jwt")    
            }
        })
            .then(function (response) {
                //handle success
                console.log("Uploaded...");
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });


    }

    const handleChange = e => {
        setWatch({ ...watch, [e.target.name]: e.target.value })
    }

    const handleChangeFiles = e => {
        watch.data.append(e.target.name,e.target.files[0])
    }

    console.log(watch.model)

    return (

        <div>

            <h4>Watch type</h4>
            <input type="text" name="watchType" onChange={e => handleChange(e)} placeholder="Watch type..." />

            <h4>Image of watch in card</h4>
            <input type="file" name="watchCardImage" onChange={e => { handleChangeFiles(e); console.log("Uploading file ", e.target.files[0]) }} />

            <h4>Model</h4>
            <input type="text" name="model" onChange={e => handleChange(e)} placeholder="Model..." />

            <h4>Description</h4>
            <input type="text" name="description" onChange={e => handleChange(e)} placeholder="Description..." />

            <h4>Price</h4>
            <input type="number" name="price" onChange={e => handleChange(e)} placeholder="Price..." />

            <h4>Price with word</h4>
            <input type="text" name="priceWord" onChange={e => handleChange(e)} placeholder="Price word..."></input>

            <h4>Background watch image</h4>
            <input type="file" name="watchBackgroundImage" onChange={e => { handleChangeFiles(e); console.log("Uploading file ", e.target.files[0]) }} />

            <h4>Image of watch - 600x600</h4>
            <input type="file" name="watchImage" onChange={e => { handleChangeFiles(e); console.log("Uploading file ", e.target.files[0]) }} />

            <h4>Night image of watch - 600x600</h4>
            <input type="file" name="watchNightImage" onChange={e => { handleChangeFiles(e); console.log("Uploading file ", e.target.files[0]) }} />

            <h4>First Desc</h4>
            <input type="text" name="firstDesc" onChange={e => handleChange(e)} placeholder="First description..." />

            <h4 >Second desc</h4>
            <input type="text" name="secondDesc" onChange={e => handleChange(e)} placeholder="Second description..." />


            <ModelContext.Provider value={watch.model}>
                <AddNewFeature />
            </ModelContext.Provider>

            <h4>Rolex box image</h4>
            <input type="file" name="watchBoxImage" onChange={e => { handleChangeFiles(e); console.log("Uploading file ", e.target.files[0]) }}></input>

            <h3>Model Case</h3>

            <h4>Image of case</h4>
            <input type="file" name="watchCaseImage" onChange={e => { handleChangeFiles(e); console.log("Uploading file ", e.target.files[0]) }} ></input>

            <h4>Model of case</h4>
            <input type="text" name="modelCase" onChange={e => handleChange(e)} placeholder="Model case..." />

            <h4>Oyster Architecture</h4>
            <input type="text" name="oysterArchitecture" onChange={e => handleChange(e)} placeholder="Oyster architecture..." />

            <h4>Diameter</h4>
            <input type="text" name="diameter" onChange={e => handleChange(e)} placeholder="Diameter..." />

            <h4>Material</h4>
            <input type="text" name="material" onChange={e => handleChange(e)} placeholder="Material..." />

            <h4>Bezel</h4>
            <input type="text" name="bezel" onChange={e => handleChange(e)} placeholder="Bezel..." />

            <h4>Winding Crown</h4>
            <input type="text" name="windingCrown" onChange={e => handleChange(e)} placeholder="Winding crown" />

            <h4>Crystal</h4>
            <input type="text" name="crystal" onChange={e => handleChange(e)} placeholder="Crystal..." />

            <h4>Water resistance</h4>
            <input type="text" name="waterResistance" onChange={e => handleChange(e)} placeholder="Water resistance..." />


            <h3>WATCH MOVEMENT</h3>
            <h4>Image movement</h4>
            <input type="file" name="watchMovementImage" onChange={e => { handleChangeFiles(e); console.log("Uploading file ", e.target.files[0]) }} />

            <h4>Movement</h4>
            <input type="text" name="movement" onChange={e => handleChange(e)} placeholder="Movement..." />

            <h4>Calibre</h4>
            <input type="text" name="calibre" onChange={e => handleChange(e)} placeholder="Calibre..." />

            <h4>Precision</h4>
            <input type="text" name="precision" onChange={e => handleChange(e)} placeholder="Precision..." />

            <h4>Functions</h4>
            <input type="text" name="functions" onChange={e => handleChange(e)} placeholder="Functions..." />

            <h4>Oscilator</h4>
            <input type="text" name="oscilator" onChange={e => handleChange(e)} placeholder="Oscilator" />

            <h4>Winding</h4>
            <input type="text" name="winding" onChange={e => handleChange(e)} placeholder="Winding..." />

            <h4>Power reserve</h4>
            <input type="text" name="powerReserve" onChange={e => handleChange(e)} placeholder="Power reserve..." />


            <h3>BRACELET</h3>
            <h4>Bracelet image</h4>
            <input type="file" name="watchBraceletImage" onChange={e => { handleChangeFiles(e); console.log("Uploading file ", e.target.files[0]) }} />

            <h4>Bracelet</h4>
            <input type="text" name="bracelet" onChange={e => handleChange(e)} placeholder="Bracelet..." />

            <h4>Bracelet material</h4>
            <input type="text" name="braceletMaterial" onChange={e => handleChange(e)} placeholder="Bracelet material" />

            <h4>Clasp</h4>
            <input type="text" name="clasp" onChange={e => handleChange(e)} placeholder="Clasp..." />

            <h3>WATCH DIAL</h3>
            <h4>Dial image</h4>
            <input type="file" name="watchDialImage" onChange={e => { handleChangeFiles(e); console.log("Uploading file ", e.target.files[0]) }} />

            <h4>Dial</h4>
            <input type="text" name="dial" onChange={e => handleChange(e)} placeholder="Dial..." />

            <h4>Dial details</h4>
            <input type="text" name="dialDetails" onChange={e => handleChange(e)} placeholder="Dial details..." />


            <h3>WATCH CERTIFICATION</h3>
            <h4>Certification Image</h4>
            <input type="file" name="watchCertificationImage" onChange={e => { handleChangeFiles(e); console.log("Uploading file ", e.target.files[0]) }} />

            <h4>Certification</h4>
            <input type="text" name="certification" onChange={e => handleChange(e)} placeholder="Certification..." />

            <h4>Order backgroud image</h4>
            <input type="file" name="watchOrderBackgroundImage" onChange={e => { handleChangeFiles(e); console.log("Uploading file ", e.target.files[0]) }} />

            <button onClick={handleUpload}>Upload</button>




        </div>

    );

}
export default AddNewWatch;