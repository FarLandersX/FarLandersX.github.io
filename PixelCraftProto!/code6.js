gdjs.TestCode = {};
gdjs.TestCode.localVariables = [];
gdjs.TestCode.GDFemaleCasualObjects1= [];
gdjs.TestCode.GDFemaleCasualObjects2= [];
gdjs.TestCode.GDMaleLongSleeveObjects1= [];
gdjs.TestCode.GDMaleLongSleeveObjects2= [];
gdjs.TestCode.GDFemaleAlternativeObjects1= [];
gdjs.TestCode.GDFemaleAlternativeObjects2= [];
gdjs.TestCode.GDMaleCasualObjects1= [];
gdjs.TestCode.GDMaleCasualObjects2= [];
gdjs.TestCode.GDFemaleTankTopObjects1= [];
gdjs.TestCode.GDFemaleTankTopObjects2= [];
gdjs.TestCode.GDFemaleDressObjects1= [];
gdjs.TestCode.GDFemaleDressObjects2= [];
gdjs.TestCode.GDMaleShirtObjects1= [];
gdjs.TestCode.GDMaleShirtObjects2= [];
gdjs.TestCode.GDMaleSuitObjects1= [];
gdjs.TestCode.GDMaleSuitObjects2= [];
gdjs.TestCode.GDMaleBeachObjects1= [];
gdjs.TestCode.GDMaleBeachObjects2= [];
gdjs.TestCode.GDMaleFarmerObjects1= [];
gdjs.TestCode.GDMaleFarmerObjects2= [];
gdjs.TestCode.GDMaleCasualHoodieObjects1= [];
gdjs.TestCode.GDMaleCasualHoodieObjects2= [];
gdjs.TestCode.GDMaleCasual2Objects1= [];
gdjs.TestCode.GDMaleCasual2Objects2= [];
gdjs.TestCode.GDMaleSuit2Objects1= [];
gdjs.TestCode.GDMaleSuit2Objects2= [];
gdjs.TestCode.GDMaleWorkerObjects1= [];
gdjs.TestCode.GDMaleWorkerObjects2= [];
gdjs.TestCode.GDMalePunkObjects1= [];
gdjs.TestCode.GDMalePunkObjects2= [];
gdjs.TestCode.GDFemalMedievalObjects1= [];
gdjs.TestCode.GDFemalMedievalObjects2= [];
gdjs.TestCode.GDSwatObjects1= [];
gdjs.TestCode.GDSwatObjects2= [];
gdjs.TestCode.GDFemalFormalObjects1= [];
gdjs.TestCode.GDFemalFormalObjects2= [];
gdjs.TestCode.GDFemalPunkObjects1= [];
gdjs.TestCode.GDFemalPunkObjects2= [];
gdjs.TestCode.GDFemalWorkerObjects1= [];
gdjs.TestCode.GDFemalWorkerObjects2= [];
gdjs.TestCode.GDFemalCasual2Objects1= [];
gdjs.TestCode.GDFemalCasual2Objects2= [];
gdjs.TestCode.GDFemalSciFiObjects1= [];
gdjs.TestCode.GDFemalSciFiObjects2= [];
gdjs.TestCode.GDFemalSuitObjects1= [];
gdjs.TestCode.GDFemalSuitObjects2= [];
gdjs.TestCode.GDMaleAdventurerObjects1= [];
gdjs.TestCode.GDMaleAdventurerObjects2= [];
gdjs.TestCode.GDFemalSoldierObjects1= [];
gdjs.TestCode.GDFemalSoldierObjects2= [];
gdjs.TestCode.GDMaleKingObjects1= [];
gdjs.TestCode.GDMaleKingObjects2= [];
gdjs.TestCode.GDSpacesuitObjects1= [];
gdjs.TestCode.GDSpacesuitObjects2= [];
gdjs.TestCode.GDFemalWitchObjects1= [];
gdjs.TestCode.GDFemalWitchObjects2= [];
gdjs.TestCode.GDPathSquareObjects1= [];
gdjs.TestCode.GDPathSquareObjects2= [];
gdjs.TestCode.GDGroundObjects1= [];
gdjs.TestCode.GDGroundObjects2= [];
gdjs.TestCode.GDWallObjects1= [];
gdjs.TestCode.GDWallObjects2= [];
gdjs.TestCode.GDGround2Objects1= [];
gdjs.TestCode.GDGround2Objects2= [];
gdjs.TestCode.GDCameraObjects1= [];
gdjs.TestCode.GDCameraObjects2= [];


gdjs.TestCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtsExt__WithThreeJS__Create3DSceneV2.func(runtimeScene, "165;165;165", "New image", "", "", 1, 1000, 1, "Top Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Camera"), gdjs.TestCode.GDCameraObjects1);
{for(var i = 0, len = gdjs.TestCode.GDCameraObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDCameraObjects1[i].addPolarForce((gdjs.TestCode.GDCameraObjects1[i].getAngle()), 100, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Camera"), gdjs.TestCode.GDCameraObjects1);
{for(var i = 0, len = gdjs.TestCode.GDCameraObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDCameraObjects1[i].addPolarForce((gdjs.TestCode.GDCameraObjects1[i].getAngle()) + 180, 100, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Camera"), gdjs.TestCode.GDCameraObjects1);
{for(var i = 0, len = gdjs.TestCode.GDCameraObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDCameraObjects1[i].rotate(100, runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Camera"), gdjs.TestCode.GDCameraObjects1);
{for(var i = 0, len = gdjs.TestCode.GDCameraObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDCameraObjects1[i].rotate(-(100), runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.TestCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TestCode.GDFemaleCasualObjects1.length = 0;
gdjs.TestCode.GDFemaleCasualObjects2.length = 0;
gdjs.TestCode.GDMaleLongSleeveObjects1.length = 0;
gdjs.TestCode.GDMaleLongSleeveObjects2.length = 0;
gdjs.TestCode.GDFemaleAlternativeObjects1.length = 0;
gdjs.TestCode.GDFemaleAlternativeObjects2.length = 0;
gdjs.TestCode.GDMaleCasualObjects1.length = 0;
gdjs.TestCode.GDMaleCasualObjects2.length = 0;
gdjs.TestCode.GDFemaleTankTopObjects1.length = 0;
gdjs.TestCode.GDFemaleTankTopObjects2.length = 0;
gdjs.TestCode.GDFemaleDressObjects1.length = 0;
gdjs.TestCode.GDFemaleDressObjects2.length = 0;
gdjs.TestCode.GDMaleShirtObjects1.length = 0;
gdjs.TestCode.GDMaleShirtObjects2.length = 0;
gdjs.TestCode.GDMaleSuitObjects1.length = 0;
gdjs.TestCode.GDMaleSuitObjects2.length = 0;
gdjs.TestCode.GDMaleBeachObjects1.length = 0;
gdjs.TestCode.GDMaleBeachObjects2.length = 0;
gdjs.TestCode.GDMaleFarmerObjects1.length = 0;
gdjs.TestCode.GDMaleFarmerObjects2.length = 0;
gdjs.TestCode.GDMaleCasualHoodieObjects1.length = 0;
gdjs.TestCode.GDMaleCasualHoodieObjects2.length = 0;
gdjs.TestCode.GDMaleCasual2Objects1.length = 0;
gdjs.TestCode.GDMaleCasual2Objects2.length = 0;
gdjs.TestCode.GDMaleSuit2Objects1.length = 0;
gdjs.TestCode.GDMaleSuit2Objects2.length = 0;
gdjs.TestCode.GDMaleWorkerObjects1.length = 0;
gdjs.TestCode.GDMaleWorkerObjects2.length = 0;
gdjs.TestCode.GDMalePunkObjects1.length = 0;
gdjs.TestCode.GDMalePunkObjects2.length = 0;
gdjs.TestCode.GDFemalMedievalObjects1.length = 0;
gdjs.TestCode.GDFemalMedievalObjects2.length = 0;
gdjs.TestCode.GDSwatObjects1.length = 0;
gdjs.TestCode.GDSwatObjects2.length = 0;
gdjs.TestCode.GDFemalFormalObjects1.length = 0;
gdjs.TestCode.GDFemalFormalObjects2.length = 0;
gdjs.TestCode.GDFemalPunkObjects1.length = 0;
gdjs.TestCode.GDFemalPunkObjects2.length = 0;
gdjs.TestCode.GDFemalWorkerObjects1.length = 0;
gdjs.TestCode.GDFemalWorkerObjects2.length = 0;
gdjs.TestCode.GDFemalCasual2Objects1.length = 0;
gdjs.TestCode.GDFemalCasual2Objects2.length = 0;
gdjs.TestCode.GDFemalSciFiObjects1.length = 0;
gdjs.TestCode.GDFemalSciFiObjects2.length = 0;
gdjs.TestCode.GDFemalSuitObjects1.length = 0;
gdjs.TestCode.GDFemalSuitObjects2.length = 0;
gdjs.TestCode.GDMaleAdventurerObjects1.length = 0;
gdjs.TestCode.GDMaleAdventurerObjects2.length = 0;
gdjs.TestCode.GDFemalSoldierObjects1.length = 0;
gdjs.TestCode.GDFemalSoldierObjects2.length = 0;
gdjs.TestCode.GDMaleKingObjects1.length = 0;
gdjs.TestCode.GDMaleKingObjects2.length = 0;
gdjs.TestCode.GDSpacesuitObjects1.length = 0;
gdjs.TestCode.GDSpacesuitObjects2.length = 0;
gdjs.TestCode.GDFemalWitchObjects1.length = 0;
gdjs.TestCode.GDFemalWitchObjects2.length = 0;
gdjs.TestCode.GDPathSquareObjects1.length = 0;
gdjs.TestCode.GDPathSquareObjects2.length = 0;
gdjs.TestCode.GDGroundObjects1.length = 0;
gdjs.TestCode.GDGroundObjects2.length = 0;
gdjs.TestCode.GDWallObjects1.length = 0;
gdjs.TestCode.GDWallObjects2.length = 0;
gdjs.TestCode.GDGround2Objects1.length = 0;
gdjs.TestCode.GDGround2Objects2.length = 0;
gdjs.TestCode.GDCameraObjects1.length = 0;
gdjs.TestCode.GDCameraObjects2.length = 0;

gdjs.TestCode.eventsList0(runtimeScene);

return;

}

gdjs['TestCode'] = gdjs.TestCode;
