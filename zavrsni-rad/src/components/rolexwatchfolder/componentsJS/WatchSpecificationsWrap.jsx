import React from "react";
import "../componentsCSS/WatchSpecificationsWrap.css";
import WatchModelCase from "./WatchModelCase.jsx";
import WatchMovement from "./WatchMovement.jsx";
import WatchBracelet from "./WatchBracelet.jsx";
import WatchModelDial from "./WatchModelDial.jsx";
import WatchModelCertification from "./WatchModelCertification.jsx"

const WatchSpecificationsWrap = ({ watchCaseProp, watchMovementProp, watchBraceletProp,dialProp,certificationProp}) => {
   
    return (
        <div className="watch-spec-big-wrapper">
            <WatchModelCase caseImage={watchCaseProp.imageCase} modelCase={watchCaseProp.modelCase} oysterArchitecture={watchCaseProp.oysterArchitecture} diameter={watchCaseProp.diameter} material={watchCaseProp.material} bezel={watchCaseProp.bezel} windingCrown={watchCaseProp.windingCrown} crystal={watchCaseProp.crystal} waterResistance={watchCaseProp.waterResistance} />
            <WatchMovement movementImage={watchMovementProp.imageMovement} movement={watchMovementProp.movement} calibre={watchMovementProp.calibre} precision={watchMovementProp.precision} functions={watchMovementProp.functions} oscilator={watchMovementProp.oscilator} winding={watchMovementProp.winding} powerReserve={watchMovementProp.powerReserve} />
            <WatchBracelet braceletImage={watchBraceletProp.imageBracelet} bracelet={watchBraceletProp.bracelet} braceletMaterial={watchBraceletProp.braceletMaterial} clasp={watchBraceletProp.clasp}/>
            <WatchModelDial dialImage={dialProp.dialImg} modelDial={dialProp.modelDial} modelDialDetails={dialProp.modelDialDetails}/>
            <WatchModelCertification certificationImage={certificationProp.certificationImage} certification={certificationProp.certification}/>
        </div>
    );

};
export default WatchSpecificationsWrap;