gdjs.Game_320_460_468Code = {};
gdjs.Game_320_460_468Code.localVariables = [];
gdjs.Game_320_460_468Code.GDGroundObjects1= [];
gdjs.Game_320_460_468Code.GDGroundObjects2= [];
gdjs.Game_320_460_468Code.GDShotgunObjects1= [];
gdjs.Game_320_460_468Code.GDShotgunObjects2= [];
gdjs.Game_320_460_468Code.GDAxeObjects1= [];
gdjs.Game_320_460_468Code.GDAxeObjects2= [];
gdjs.Game_320_460_468Code.GDFemaleCharacter1Objects1= [];
gdjs.Game_320_460_468Code.GDFemaleCharacter1Objects2= [];
gdjs.Game_320_460_468Code.GDMaleCharacter8Objects1= [];
gdjs.Game_320_460_468Code.GDMaleCharacter8Objects2= [];
gdjs.Game_320_460_468Code.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.Game_320_460_468Code.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.Game_320_460_468Code.GDTransparentDarkJoystickObjects1= [];
gdjs.Game_320_460_468Code.GDTransparentDarkJoystickObjects2= [];
gdjs.Game_320_460_468Code.GDBlueButtonWithShadowObjects1= [];
gdjs.Game_320_460_468Code.GDBlueButtonWithShadowObjects2= [];
gdjs.Game_320_460_468Code.GDYouDiedObjects1= [];
gdjs.Game_320_460_468Code.GDYouDiedObjects2= [];
gdjs.Game_320_460_468Code.GDBasicFlameObjects1= [];
gdjs.Game_320_460_468Code.GDBasicFlameObjects2= [];
gdjs.Game_320_460_468Code.GDBasicSparksObjects1= [];
gdjs.Game_320_460_468Code.GDBasicSparksObjects2= [];
gdjs.Game_320_460_468Code.GDTvBObjects1= [];
gdjs.Game_320_460_468Code.GDTvBObjects2= [];
gdjs.Game_320_460_468Code.GDMicrosoftEdgeObjects1= [];
gdjs.Game_320_460_468Code.GDMicrosoftEdgeObjects2= [];
gdjs.Game_320_460_468Code.GDTriangleGlassObjects1= [];
gdjs.Game_320_460_468Code.GDTriangleGlassObjects2= [];
gdjs.Game_320_460_468Code.GDThanks_9595Objects1= [];
gdjs.Game_320_460_468Code.GDThanks_9595Objects2= [];


gdjs.Game_320_460_468Code.mapOfGDgdjs_9546Game_9595320_9595460_9595468Code_9546GDAxeObjects1Objects = Hashtable.newFrom({"Axe": gdjs.Game_320_460_468Code.GDAxeObjects1});
gdjs.Game_320_460_468Code.mapOfGDgdjs_9546Game_9595320_9595460_9595468Code_9546GDFemaleCharacter1Objects1Objects = Hashtable.newFrom({"FemaleCharacter1": gdjs.Game_320_460_468Code.GDFemaleCharacter1Objects1});
gdjs.Game_320_460_468Code.mapOfGDgdjs_9546Game_9595320_9595460_9595468Code_9546GDAxeObjects1Objects = Hashtable.newFrom({"Axe": gdjs.Game_320_460_468Code.GDAxeObjects1});
gdjs.Game_320_460_468Code.mapOfGDgdjs_9546Game_9595320_9595460_9595468Code_9546GDFemaleCharacter1Objects1Objects = Hashtable.newFrom({"FemaleCharacter1": gdjs.Game_320_460_468Code.GDFemaleCharacter1Objects1});
gdjs.Game_320_460_468Code.mapOfGDgdjs_9546Game_9595320_9595460_9595468Code_9546GDMicrosoftEdgeObjects1Objects = Hashtable.newFrom({"MicrosoftEdge": gdjs.Game_320_460_468Code.GDMicrosoftEdgeObjects1});
gdjs.Game_320_460_468Code.mapOfGDgdjs_9546Game_9595320_9595460_9595468Code_9546GDFemaleCharacter1Objects1Objects = Hashtable.newFrom({"FemaleCharacter1": gdjs.Game_320_460_468Code.GDFemaleCharacter1Objects1});
gdjs.Game_320_460_468Code.mapOfGDgdjs_9546Game_9595320_9595460_9595468Code_9546GDTriangleGlassObjects1Objects = Hashtable.newFrom({"TriangleGlass": gdjs.Game_320_460_468Code.GDTriangleGlassObjects1});
gdjs.Game_320_460_468Code.mapOfGDgdjs_9546Game_9595320_9595460_9595468Code_9546GDFemaleCharacter1Objects1Objects = Hashtable.newFrom({"FemaleCharacter1": gdjs.Game_320_460_468Code.GDFemaleCharacter1Objects1});
gdjs.Game_320_460_468Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("YouDied"), gdjs.Game_320_460_468Code.GDYouDiedObjects1);
{for(var i = 0, len = gdjs.Game_320_460_468Code.GDYouDiedObjects1.length ;i < len;++i) {
    gdjs.Game_320_460_468Code.GDYouDiedObjects1[i].hide();
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

gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.Game_320_460_468Code.GDFloatingOutButtonDarkBlueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_320_460_468Code.GDFloatingOutButtonDarkBlueObjects1.length;i<l;++i) {
    if ( gdjs.Game_320_460_468Code.GDFloatingOutButtonDarkBlueObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_320_460_468Code.GDFloatingOutButtonDarkBlueObjects1[k] = gdjs.Game_320_460_468Code.GDFloatingOutButtonDarkBlueObjects1[i];
        ++k;
    }
}
gdjs.Game_320_460_468Code.GDFloatingOutButtonDarkBlueObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter1"), gdjs.Game_320_460_468Code.GDFemaleCharacter1Objects1);
{for(var i = 0, len = gdjs.Game_320_460_468Code.GDFemaleCharacter1Objects1.length ;i < len;++i) {
    gdjs.Game_320_460_468Code.GDFemaleCharacter1Objects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.Game_320_460_468Code.GDBlueButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_320_460_468Code.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.Game_320_460_468Code.GDBlueButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_320_460_468Code.GDBlueButtonWithShadowObjects1[k] = gdjs.Game_320_460_468Code.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.Game_320_460_468Code.GDBlueButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Axe"), gdjs.Game_320_460_468Code.GDAxeObjects1);
gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter1"), gdjs.Game_320_460_468Code.GDFemaleCharacter1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_320_460_468Code.mapOfGDgdjs_9546Game_9595320_9595460_9595468Code_9546GDAxeObjects1Objects, gdjs.Game_320_460_468Code.mapOfGDgdjs_9546Game_9595320_9595460_9595468Code_9546GDFemaleCharacter1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_320_460_468Code.GDFemaleCharacter1Objects1 */
{for(var i = 0, len = gdjs.Game_320_460_468Code.GDFemaleCharacter1Objects1.length ;i < len;++i) {
    gdjs.Game_320_460_468Code.GDFemaleCharacter1Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Axe"), gdjs.Game_320_460_468Code.GDAxeObjects1);
gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter1"), gdjs.Game_320_460_468Code.GDFemaleCharacter1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_320_460_468Code.mapOfGDgdjs_9546Game_9595320_9595460_9595468Code_9546GDAxeObjects1Objects, gdjs.Game_320_460_468Code.mapOfGDgdjs_9546Game_9595320_9595460_9595468Code_9546GDFemaleCharacter1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("YouDied"), gdjs.Game_320_460_468Code.GDYouDiedObjects1);
{for(var i = 0, len = gdjs.Game_320_460_468Code.GDYouDiedObjects1.length ;i < len;++i) {
    gdjs.Game_320_460_468Code.GDYouDiedObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YouDied"), gdjs.Game_320_460_468Code.GDYouDiedObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_320_460_468Code.GDYouDiedObjects1.length;i<l;++i) {
    if ( gdjs.Game_320_460_468Code.GDYouDiedObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_320_460_468Code.GDYouDiedObjects1[k] = gdjs.Game_320_460_468Code.GDYouDiedObjects1[i];
        ++k;
    }
}
gdjs.Game_320_460_468Code.GDYouDiedObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter1"), gdjs.Game_320_460_468Code.GDFemaleCharacter1Objects1);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game 0.0.7 beta", false);
}{for(var i = 0, len = gdjs.Game_320_460_468Code.GDFemaleCharacter1Objects1.length ;i < len;++i) {
    gdjs.Game_320_460_468Code.GDFemaleCharacter1Objects1[i].clearForces();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter1"), gdjs.Game_320_460_468Code.GDFemaleCharacter1Objects1);
gdjs.copyArray(runtimeScene.getObjects("MicrosoftEdge"), gdjs.Game_320_460_468Code.GDMicrosoftEdgeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_320_460_468Code.mapOfGDgdjs_9546Game_9595320_9595460_9595468Code_9546GDMicrosoftEdgeObjects1Objects, gdjs.Game_320_460_468Code.mapOfGDgdjs_9546Game_9595320_9595460_9595468Code_9546GDFemaleCharacter1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_320_460_468Code.GDFemaleCharacter1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("YouDied"), gdjs.Game_320_460_468Code.GDYouDiedObjects1);
{for(var i = 0, len = gdjs.Game_320_460_468Code.GDFemaleCharacter1Objects1.length ;i < len;++i) {
    gdjs.Game_320_460_468Code.GDFemaleCharacter1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_320_460_468Code.GDYouDiedObjects1.length ;i < len;++i) {
    gdjs.Game_320_460_468Code.GDYouDiedObjects1[i].hide(false);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "xD Spark", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter1"), gdjs.Game_320_460_468Code.GDFemaleCharacter1Objects1);
gdjs.copyArray(runtimeScene.getObjects("TriangleGlass"), gdjs.Game_320_460_468Code.GDTriangleGlassObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_320_460_468Code.mapOfGDgdjs_9546Game_9595320_9595460_9595468Code_9546GDTriangleGlassObjects1Objects, gdjs.Game_320_460_468Code.mapOfGDgdjs_9546Game_9595320_9595460_9595468Code_9546GDFemaleCharacter1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_320_460_468Code.GDFemaleCharacter1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("YouDied"), gdjs.Game_320_460_468Code.GDYouDiedObjects1);
{for(var i = 0, len = gdjs.Game_320_460_468Code.GDYouDiedObjects1.length ;i < len;++i) {
    gdjs.Game_320_460_468Code.GDYouDiedObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Game_320_460_468Code.GDFemaleCharacter1Objects1.length ;i < len;++i) {
    gdjs.Game_320_460_468Code.GDFemaleCharacter1Objects1[i].hide();
}
}}

}


};

gdjs.Game_320_460_468Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_320_460_468Code.GDGroundObjects1.length = 0;
gdjs.Game_320_460_468Code.GDGroundObjects2.length = 0;
gdjs.Game_320_460_468Code.GDShotgunObjects1.length = 0;
gdjs.Game_320_460_468Code.GDShotgunObjects2.length = 0;
gdjs.Game_320_460_468Code.GDAxeObjects1.length = 0;
gdjs.Game_320_460_468Code.GDAxeObjects2.length = 0;
gdjs.Game_320_460_468Code.GDFemaleCharacter1Objects1.length = 0;
gdjs.Game_320_460_468Code.GDFemaleCharacter1Objects2.length = 0;
gdjs.Game_320_460_468Code.GDMaleCharacter8Objects1.length = 0;
gdjs.Game_320_460_468Code.GDMaleCharacter8Objects2.length = 0;
gdjs.Game_320_460_468Code.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.Game_320_460_468Code.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.Game_320_460_468Code.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.Game_320_460_468Code.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.Game_320_460_468Code.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.Game_320_460_468Code.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.Game_320_460_468Code.GDYouDiedObjects1.length = 0;
gdjs.Game_320_460_468Code.GDYouDiedObjects2.length = 0;
gdjs.Game_320_460_468Code.GDBasicFlameObjects1.length = 0;
gdjs.Game_320_460_468Code.GDBasicFlameObjects2.length = 0;
gdjs.Game_320_460_468Code.GDBasicSparksObjects1.length = 0;
gdjs.Game_320_460_468Code.GDBasicSparksObjects2.length = 0;
gdjs.Game_320_460_468Code.GDTvBObjects1.length = 0;
gdjs.Game_320_460_468Code.GDTvBObjects2.length = 0;
gdjs.Game_320_460_468Code.GDMicrosoftEdgeObjects1.length = 0;
gdjs.Game_320_460_468Code.GDMicrosoftEdgeObjects2.length = 0;
gdjs.Game_320_460_468Code.GDTriangleGlassObjects1.length = 0;
gdjs.Game_320_460_468Code.GDTriangleGlassObjects2.length = 0;
gdjs.Game_320_460_468Code.GDThanks_9595Objects1.length = 0;
gdjs.Game_320_460_468Code.GDThanks_9595Objects2.length = 0;

gdjs.Game_320_460_468Code.eventsList0(runtimeScene);

return;

}

gdjs['Game_320_460_468Code'] = gdjs.Game_320_460_468Code;
