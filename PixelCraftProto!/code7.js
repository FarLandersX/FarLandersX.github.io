gdjs.Game_320_460_466Code = {};
gdjs.Game_320_460_466Code.localVariables = [];
gdjs.Game_320_460_466Code.GDGroundObjects1= [];
gdjs.Game_320_460_466Code.GDGroundObjects2= [];
gdjs.Game_320_460_466Code.GDShotgunObjects1= [];
gdjs.Game_320_460_466Code.GDShotgunObjects2= [];
gdjs.Game_320_460_466Code.GDAxeObjects1= [];
gdjs.Game_320_460_466Code.GDAxeObjects2= [];
gdjs.Game_320_460_466Code.GDFemaleCharacter1Objects1= [];
gdjs.Game_320_460_466Code.GDFemaleCharacter1Objects2= [];
gdjs.Game_320_460_466Code.GDMaleCharacter8Objects1= [];
gdjs.Game_320_460_466Code.GDMaleCharacter8Objects2= [];
gdjs.Game_320_460_466Code.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.Game_320_460_466Code.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.Game_320_460_466Code.GDTransparentDarkJoystickObjects1= [];
gdjs.Game_320_460_466Code.GDTransparentDarkJoystickObjects2= [];
gdjs.Game_320_460_466Code.GDBlueButtonWithShadowObjects1= [];
gdjs.Game_320_460_466Code.GDBlueButtonWithShadowObjects2= [];
gdjs.Game_320_460_466Code.GDYouDiedObjects1= [];
gdjs.Game_320_460_466Code.GDYouDiedObjects2= [];


gdjs.Game_320_460_466Code.mapOfGDgdjs_9546Game_9595320_9595460_9595466Code_9546GDAxeObjects1Objects = Hashtable.newFrom({"Axe": gdjs.Game_320_460_466Code.GDAxeObjects1});
gdjs.Game_320_460_466Code.mapOfGDgdjs_9546Game_9595320_9595460_9595466Code_9546GDFemaleCharacter1Objects1Objects = Hashtable.newFrom({"FemaleCharacter1": gdjs.Game_320_460_466Code.GDFemaleCharacter1Objects1});
gdjs.Game_320_460_466Code.mapOfGDgdjs_9546Game_9595320_9595460_9595466Code_9546GDAxeObjects1Objects = Hashtable.newFrom({"Axe": gdjs.Game_320_460_466Code.GDAxeObjects1});
gdjs.Game_320_460_466Code.mapOfGDgdjs_9546Game_9595320_9595460_9595466Code_9546GDFemaleCharacter1Objects1Objects = Hashtable.newFrom({"FemaleCharacter1": gdjs.Game_320_460_466Code.GDFemaleCharacter1Objects1});
gdjs.Game_320_460_466Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("YouDied"), gdjs.Game_320_460_466Code.GDYouDiedObjects1);
{for(var i = 0, len = gdjs.Game_320_460_466Code.GDYouDiedObjects1.length ;i < len;++i) {
    gdjs.Game_320_460_466Code.GDYouDiedObjects1[i].hide();
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

gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.Game_320_460_466Code.GDFloatingOutButtonDarkBlueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_320_460_466Code.GDFloatingOutButtonDarkBlueObjects1.length;i<l;++i) {
    if ( gdjs.Game_320_460_466Code.GDFloatingOutButtonDarkBlueObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_320_460_466Code.GDFloatingOutButtonDarkBlueObjects1[k] = gdjs.Game_320_460_466Code.GDFloatingOutButtonDarkBlueObjects1[i];
        ++k;
    }
}
gdjs.Game_320_460_466Code.GDFloatingOutButtonDarkBlueObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter1"), gdjs.Game_320_460_466Code.GDFemaleCharacter1Objects1);
{for(var i = 0, len = gdjs.Game_320_460_466Code.GDFemaleCharacter1Objects1.length ;i < len;++i) {
    gdjs.Game_320_460_466Code.GDFemaleCharacter1Objects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.Game_320_460_466Code.GDBlueButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_320_460_466Code.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.Game_320_460_466Code.GDBlueButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_320_460_466Code.GDBlueButtonWithShadowObjects1[k] = gdjs.Game_320_460_466Code.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.Game_320_460_466Code.GDBlueButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Axe"), gdjs.Game_320_460_466Code.GDAxeObjects1);
gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter1"), gdjs.Game_320_460_466Code.GDFemaleCharacter1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_320_460_466Code.mapOfGDgdjs_9546Game_9595320_9595460_9595466Code_9546GDAxeObjects1Objects, gdjs.Game_320_460_466Code.mapOfGDgdjs_9546Game_9595320_9595460_9595466Code_9546GDFemaleCharacter1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_320_460_466Code.GDFemaleCharacter1Objects1 */
{for(var i = 0, len = gdjs.Game_320_460_466Code.GDFemaleCharacter1Objects1.length ;i < len;++i) {
    gdjs.Game_320_460_466Code.GDFemaleCharacter1Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Axe"), gdjs.Game_320_460_466Code.GDAxeObjects1);
gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter1"), gdjs.Game_320_460_466Code.GDFemaleCharacter1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_320_460_466Code.mapOfGDgdjs_9546Game_9595320_9595460_9595466Code_9546GDAxeObjects1Objects, gdjs.Game_320_460_466Code.mapOfGDgdjs_9546Game_9595320_9595460_9595466Code_9546GDFemaleCharacter1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("YouDied"), gdjs.Game_320_460_466Code.GDYouDiedObjects1);
{for(var i = 0, len = gdjs.Game_320_460_466Code.GDYouDiedObjects1.length ;i < len;++i) {
    gdjs.Game_320_460_466Code.GDYouDiedObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YouDied"), gdjs.Game_320_460_466Code.GDYouDiedObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_320_460_466Code.GDYouDiedObjects1.length;i<l;++i) {
    if ( gdjs.Game_320_460_466Code.GDYouDiedObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_320_460_466Code.GDYouDiedObjects1[k] = gdjs.Game_320_460_466Code.GDYouDiedObjects1[i];
        ++k;
    }
}
gdjs.Game_320_460_466Code.GDYouDiedObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter1"), gdjs.Game_320_460_466Code.GDFemaleCharacter1Objects1);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game 0.0.6", false);
}{for(var i = 0, len = gdjs.Game_320_460_466Code.GDFemaleCharacter1Objects1.length ;i < len;++i) {
    gdjs.Game_320_460_466Code.GDFemaleCharacter1Objects1[i].clearForces();
}
}}

}


};

gdjs.Game_320_460_466Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_320_460_466Code.GDGroundObjects1.length = 0;
gdjs.Game_320_460_466Code.GDGroundObjects2.length = 0;
gdjs.Game_320_460_466Code.GDShotgunObjects1.length = 0;
gdjs.Game_320_460_466Code.GDShotgunObjects2.length = 0;
gdjs.Game_320_460_466Code.GDAxeObjects1.length = 0;
gdjs.Game_320_460_466Code.GDAxeObjects2.length = 0;
gdjs.Game_320_460_466Code.GDFemaleCharacter1Objects1.length = 0;
gdjs.Game_320_460_466Code.GDFemaleCharacter1Objects2.length = 0;
gdjs.Game_320_460_466Code.GDMaleCharacter8Objects1.length = 0;
gdjs.Game_320_460_466Code.GDMaleCharacter8Objects2.length = 0;
gdjs.Game_320_460_466Code.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.Game_320_460_466Code.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.Game_320_460_466Code.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.Game_320_460_466Code.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.Game_320_460_466Code.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.Game_320_460_466Code.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.Game_320_460_466Code.GDYouDiedObjects1.length = 0;
gdjs.Game_320_460_466Code.GDYouDiedObjects2.length = 0;

gdjs.Game_320_460_466Code.eventsList0(runtimeScene);

return;

}

gdjs['Game_320_460_466Code'] = gdjs.Game_320_460_466Code;
