import React from "react";
import { useContext, useState } from "react";
import shortid from "shortid";
import ModelContext from "./ModelContext";
import axios from "axios";
import DisplayFeature from "./DisplayFeature";

const AddNewFeature = () => {

    const model = useContext(ModelContext);
    const [feature, setFeature] = useState({
        "watchModel": "",
        "featuresHead": "",
        "id": shortid.generate(),
        "featuresDesc": "",
        "featureImage": null
    })

    const [allFeatures, setAllFeatures] = useState([])

    const handleAddFeature = () => {
        setAllFeatures([...allFeatures, feature])
        feature.watchModel = model;
        feature.id = shortid.generate();
        let formdata = new FormData();

        formdata.set('model', feature.watchModel)
        formdata.set('featureId', feature.id)
        formdata.append('featureImage', feature.featureImage)
        formdata.set('featureHead', feature.featuresHead)
        formdata.set('featureDesc', feature.featuresDesc)

        axios({
            method: 'post',
            url: 'http://rolexwebsite.com/api/watches/admin/createFeature',
            data: formdata,
            headers: { 'Content-Type': 'multipart/form-data' ,
                    "Authorization" : localStorage.getItem("jwt")
            }
        })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            })

    }


    const deleteFeature = id => {
        setAllFeatures(allFeatures.filter(feature => feature.id !== id));
        const response = axios.delete('http://localhost:8082/deleteFeature/' + id)
        console.log(response)
    }

    return (
        <form>
            <label>Add new feature</label>

            <h3>Feature image</h3>
            <input type="file" onChange={e => setFeature({ ...feature, featureImage: e.target.files[0] })} />
            <h3>Head text of feature</h3>
            <input type="text" onChange={e => setFeature({ ...feature, featuresHead: e.target.value })} />
            <h3>Text feature</h3>
            <input type="text" onChange={e => setFeature({ ...feature, featuresDesc: e.target.value })} />
            <button type="reset" onClick={handleAddFeature}>Add</button>

            {
                allFeatures.map((item, key) => (
                    <div key={key}>
                        <DisplayFeature head={item.featuresHead} desc={item.featuresDesc} onDelete={() => deleteFeature(item.id)} />
                    </div>
                ))
            }

        </form>


    );


};
export default AddNewFeature;