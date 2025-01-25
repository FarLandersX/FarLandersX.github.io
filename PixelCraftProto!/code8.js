gdjs.Game_320_460_467_32betaCode = {};
gdjs.Game_320_460_467_32betaCode.localVariables = [];
gdjs.Game_320_460_467_32betaCode.GDGroundObjects1= [];
gdjs.Game_320_460_467_32betaCode.GDGroundObjects2= [];
gdjs.Game_320_460_467_32betaCode.GDShotgunObjects1= [];
gdjs.Game_320_460_467_32betaCode.GDShotgunObjects2= [];
gdjs.Game_320_460_467_32betaCode.GDAxeObjects1= [];
gdjs.Game_320_460_467_32betaCode.GDAxeObjects2= [];
gdjs.Game_320_460_467_32betaCode.GDFemaleCharacter1Objects1= [];
gdjs.Game_320_460_467_32betaCode.GDFemaleCharacter1Objects2= [];
gdjs.Game_320_460_467_32betaCode.GDMaleCharacter8Objects1= [];
gdjs.Game_320_460_467_32betaCode.GDMaleCharacter8Objects2= [];
gdjs.Game_320_460_467_32betaCode.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.Game_320_460_467_32betaCode.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.Game_320_460_467_32betaCode.GDTransparentDarkJoystickObjects1= [];
gdjs.Game_320_460_467_32betaCode.GDTransparentDarkJoystickObjects2= [];
gdjs.Game_320_460_467_32betaCode.GDBlueButtonWithShadowObjects1= [];
gdjs.Game_320_460_467_32betaCode.GDBlueButtonWithShadowObjects2= [];
gdjs.Game_320_460_467_32betaCode.GDYouDiedObjects1= [];
gdjs.Game_320_460_467_32betaCode.GDYouDiedObjects2= [];
gdjs.Game_320_460_467_32betaCode.GDBasicFlameObjects1= [];
gdjs.Game_320_460_467_32betaCode.GDBasicFlameObjects2= [];
gdjs.Game_320_460_467_32betaCode.GDBasicSparksObjects1= [];
gdjs.Game_320_460_467_32betaCode.GDBasicSparksObjects2= [];
gdjs.Game_320_460_467_32betaCode.GDTvBObjects1= [];
gdjs.Game_320_460_467_32betaCode.GDTvBObjects2= [];
gdjs.Game_320_460_467_32betaCode.GDMicrosoftEdgeObjects1= [];
gdjs.Game_320_460_467_32betaCode.GDMicrosoftEdgeObjects2= [];


gdjs.Game_320_460_467_32betaCode.mapOfGDgdjs_9546Game_9595320_9595460_9595467_959532betaCode_9546GDAxeObjects1Objects = Hashtable.newFrom({"Axe": gdjs.Game_320_460_467_32betaCode.GDAxeObjects1});
gdjs.Game_320_460_467_32betaCode.mapOfGDgdjs_9546Game_9595320_9595460_9595467_959532betaCode_9546GDFemaleCharacter1Objects1Objects = Hashtable.newFrom({"FemaleCharacter1": gdjs.Game_320_460_467_32betaCode.GDFemaleCharacter1Objects1});
gdjs.Game_320_460_467_32betaCode.mapOfGDgdjs_9546Game_9595320_9595460_9595467_959532betaCode_9546GDAxeObjects1Objects = Hashtable.newFrom({"Axe": gdjs.Game_320_460_467_32betaCode.GDAxeObjects1});
gdjs.Game_320_460_467_32betaCode.mapOfGDgdjs_9546Game_9595320_9595460_9595467_959532betaCode_9546GDFemaleCharacter1Objects1Objects = Hashtable.newFrom({"FemaleCharacter1": gdjs.Game_320_460_467_32betaCode.GDFemaleCharacter1Objects1});
gdjs.Game_320_460_467_32betaCode.mapOfGDgdjs_9546Game_9595320_9595460_9595467_959532betaCode_9546GDMicrosoftEdgeObjects1Objects = Hashtable.newFrom({"MicrosoftEdge": gdjs.Game_320_460_467_32betaCode.GDMicrosoftEdgeObjects1});
gdjs.Game_320_460_467_32betaCode.mapOfGDgdjs_9546Game_9595320_9595460_9595467_959532betaCode_9546GDFemaleCharacter1Objects1Objects = Hashtable.newFrom({"FemaleCharacter1": gdjs.Game_320_460_467_32betaCode.GDFemaleCharacter1Objects1});
gdjs.Game_320_460_467_32betaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("YouDied"), gdjs.Game_320_460_467_32betaCode.GDYouDiedObjects1);
{for(var i = 0, len = gdjs.Game_320_460_467_32betaCode.GDYouDiedObjects1.length ;i < len;++i) {
    gdjs.Game_320_460_467_32betaCode.GDYouDiedObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Over_the_Horizon[1].mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.Game_320_460_467_32betaCode.GDFloatingOutButtonDarkBlueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_320_460_467_32betaCode.GDFloatingOutButtonDarkBlueObjects1.length;i<l;++i) {
    if ( gdjs.Game_320_460_467_32betaCode.GDFloatingOutButtonDarkBlueObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_320_460_467_32betaCode.GDFloatingOutButtonDarkBlueObjects1[k] = gdjs.Game_320_460_467_32betaCode.GDFloatingOutButtonDarkBlueObjects1[i];
        ++k;
    }
}
gdjs.Game_320_460_467_32betaCode.GDFloatingOutButtonDarkBlueObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter1"), gdjs.Game_320_460_467_32betaCode.GDFemaleCharacter1Objects1);
{for(var i = 0, len = gdjs.Game_320_460_467_32betaCode.GDFemaleCharacter1Objects1.length ;i < len;++i) {
    gdjs.Game_320_460_467_32betaCode.GDFemaleCharacter1Objects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.Game_320_460_467_32betaCode.GDBlueButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_320_460_467_32betaCode.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.Game_320_460_467_32betaCode.GDBlueButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_320_460_467_32betaCode.GDBlueButtonWithShadowObjects1[k] = gdjs.Game_320_460_467_32betaCode.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.Game_320_460_467_32betaCode.GDBlueButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Axe"), gdjs.Game_320_460_467_32betaCode.GDAxeObjects1);
gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter1"), gdjs.Game_320_460_467_32betaCode.GDFemaleCharacter1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_320_460_467_32betaCode.mapOfGDgdjs_9546Game_9595320_9595460_9595467_959532betaCode_9546GDAxeObjects1Objects, gdjs.Game_320_460_467_32betaCode.mapOfGDgdjs_9546Game_9595320_9595460_9595467_959532betaCode_9546GDFemaleCharacter1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_320_460_467_32betaCode.GDFemaleCharacter1Objects1 */
{for(var i = 0, len = gdjs.Game_320_460_467_32betaCode.GDFemaleCharacter1Objects1.length ;i < len;++i) {
    gdjs.Game_320_460_467_32betaCode.GDFemaleCharacter1Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Axe"), gdjs.Game_320_460_467_32betaCode.GDAxeObjects1);
gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter1"), gdjs.Game_320_460_467_32betaCode.GDFemaleCharacter1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_320_460_467_32betaCode.mapOfGDgdjs_9546Game_9595320_9595460_9595467_959532betaCode_9546GDAxeObjects1Objects, gdjs.Game_320_460_467_32betaCode.mapOfGDgdjs_9546Game_9595320_9595460_9595467_959532betaCode_9546GDFemaleCharacter1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("YouDied"), gdjs.Game_320_460_467_32betaCode.GDYouDiedObjects1);
{for(var i = 0, len = gdjs.Game_320_460_467_32betaCode.GDYouDiedObjects1.length ;i < len;++i) {
    gdjs.Game_320_460_467_32betaCode.GDYouDiedObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YouDied"), gdjs.Game_320_460_467_32betaCode.GDYouDiedObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_320_460_467_32betaCode.GDYouDiedObjects1.length;i<l;++i) {
    if ( gdjs.Game_320_460_467_32betaCode.GDYouDiedObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_320_460_467_32betaCode.GDYouDiedObjects1[k] = gdjs.Game_320_460_467_32betaCode.GDYouDiedObjects1[i];
        ++k;
    }
}
gdjs.Game_320_460_467_32betaCode.GDYouDiedObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter1"), gdjs.Game_320_460_467_32betaCode.GDFemaleCharacter1Objects1);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game 0.0.7 beta", false);
}{for(var i = 0, len = gdjs.Game_320_460_467_32betaCode.GDFemaleCharacter1Objects1.length ;i < len;++i) {
    gdjs.Game_320_460_467_32betaCode.GDFemaleCharacter1Objects1[i].clearForces();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter1"), gdjs.Game_320_460_467_32betaCode.GDFemaleCharacter1Objects1);
gdjs.copyArray(runtimeScene.getObjects("MicrosoftEdge"), gdjs.Game_320_460_467_32betaCode.GDMicrosoftEdgeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_320_460_467_32betaCode.mapOfGDgdjs_9546Game_9595320_9595460_9595467_959532betaCode_9546GDMicrosoftEdgeObjects1Objects, gdjs.Game_320_460_467_32betaCode.mapOfGDgdjs_9546Game_9595320_9595460_9595467_959532betaCode_9546GDFemaleCharacter1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_320_460_467_32betaCode.GDFemaleCharacter1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("YouDied"), gdjs.Game_320_460_467_32betaCode.GDYouDiedObjects1);
{for(var i = 0, len = gdjs.Game_320_460_467_32betaCode.GDFemaleCharacter1Objects1.length ;i < len;++i) {
    gdjs.Game_320_460_467_32betaCode.GDFemaleCharacter1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_320_460_467_32betaCode.GDYouDiedObjects1.length ;i < len;++i) {
    gdjs.Game_320_460_467_32betaCode.GDYouDiedObjects1[i].hide(false);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "xD Spark", true, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Game_320_460_467_32betaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_320_460_467_32betaCode.GDGroundObjects1.length = 0;
gdjs.Game_320_460_467_32betaCode.GDGroundObjects2.length = 0;
gdjs.Game_320_460_467_32betaCode.GDShotgunObjects1.length = 0;
gdjs.Game_320_460_467_32betaCode.GDShotgunObjects2.length = 0;
gdjs.Game_320_460_467_32betaCode.GDAxeObjects1.length = 0;
gdjs.Game_320_460_467_32betaCode.GDAxeObjects2.length = 0;
gdjs.Game_320_460_467_32betaCode.GDFemaleCharacter1Objects1.length = 0;
gdjs.Game_320_460_467_32betaCode.GDFemaleCharacter1Objects2.length = 0;
gdjs.Game_320_460_467_32betaCode.GDMaleCharacter8Objects1.length = 0;
gdjs.Game_320_460_467_32betaCode.GDMaleCharacter8Objects2.length = 0;
gdjs.Game_320_460_467_32betaCode.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.Game_320_460_467_32betaCode.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.Game_320_460_467_32betaCode.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.Game_320_460_467_32betaCode.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.Game_320_460_467_32betaCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.Game_320_460_467_32betaCode.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.Game_320_460_467_32betaCode.GDYouDiedObjects1.length = 0;
gdjs.Game_320_460_467_32betaCode.GDYouDiedObjects2.length = 0;
gdjs.Game_320_460_467_32betaCode.GDBasicFlameObjects1.length = 0;
gdjs.Game_320_460_467_32betaCode.GDBasicFlameObjects2.length = 0;
gdjs.Game_320_460_467_32betaCode.GDBasicSparksObjects1.length = 0;
gdjs.Game_320_460_467_32betaCode.GDBasicSparksObjects2.length = 0;
gdjs.Game_320_460_467_32betaCode.GDTvBObjects1.length = 0;
gdjs.Game_320_460_467_32betaCode.GDTvBObjects2.length = 0;
gdjs.Game_320_460_467_32betaCode.GDMicrosoftEdgeObjects1.length = 0;
gdjs.Game_320_460_467_32betaCode.GDMicrosoftEdgeObjects2.length = 0;

gdjs.Game_320_460_467_32betaCode.eventsList0(runtimeScene);

return;

}

gdjs['Game_320_460_467_32betaCode'] = gdjs.Game_320_460_467_32betaCode;
