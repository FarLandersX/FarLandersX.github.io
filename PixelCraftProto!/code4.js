gdjs.Game_320_460_464Code = {};
gdjs.Game_320_460_464Code.localVariables = [];
gdjs.Game_320_460_464Code.GDGroundObjects1= [];
gdjs.Game_320_460_464Code.GDGroundObjects2= [];
gdjs.Game_320_460_464Code.GDFemaleCharacter1Objects1= [];
gdjs.Game_320_460_464Code.GDFemaleCharacter1Objects2= [];
gdjs.Game_320_460_464Code.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.Game_320_460_464Code.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.Game_320_460_464Code.GDTransparentDarkJoystickObjects1= [];
gdjs.Game_320_460_464Code.GDTransparentDarkJoystickObjects2= [];
gdjs.Game_320_460_464Code.GDBlueButtonWithShadowObjects1= [];
gdjs.Game_320_460_464Code.GDBlueButtonWithShadowObjects2= [];


gdjs.Game_320_460_464Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.Game_320_460_464Code.GDFloatingOutButtonDarkBlueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_320_460_464Code.GDFloatingOutButtonDarkBlueObjects1.length;i<l;++i) {
    if ( gdjs.Game_320_460_464Code.GDFloatingOutButtonDarkBlueObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_320_460_464Code.GDFloatingOutButtonDarkBlueObjects1[k] = gdjs.Game_320_460_464Code.GDFloatingOutButtonDarkBlueObjects1[i];
        ++k;
    }
}
gdjs.Game_320_460_464Code.GDFloatingOutButtonDarkBlueObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter1"), gdjs.Game_320_460_464Code.GDFemaleCharacter1Objects1);
{for(var i = 0, len = gdjs.Game_320_460_464Code.GDFemaleCharacter1Objects1.length ;i < len;++i) {
    gdjs.Game_320_460_464Code.GDFemaleCharacter1Objects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Over_the_Horizon[1].mp3", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.Game_320_460_464Code.GDBlueButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_320_460_464Code.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.Game_320_460_464Code.GDBlueButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_320_460_464Code.GDBlueButtonWithShadowObjects1[k] = gdjs.Game_320_460_464Code.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.Game_320_460_464Code.GDBlueButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Options", false);
}}

}


};

gdjs.Game_320_460_464Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_320_460_464Code.GDGroundObjects1.length = 0;
gdjs.Game_320_460_464Code.GDGroundObjects2.length = 0;
gdjs.Game_320_460_464Code.GDFemaleCharacter1Objects1.length = 0;
gdjs.Game_320_460_464Code.GDFemaleCharacter1Objects2.length = 0;
gdjs.Game_320_460_464Code.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.Game_320_460_464Code.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.Game_320_460_464Code.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.Game_320_460_464Code.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.Game_320_460_464Code.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.Game_320_460_464Code.GDBlueButtonWithShadowObjects2.length = 0;

gdjs.Game_320_460_464Code.eventsList0(runtimeScene);

return;

}

gdjs['Game_320_460_464Code'] = gdjs.Game_320_460_464Code;
