gdjs.Game_320_460_463Code = {};
gdjs.Game_320_460_463Code.localVariables = [];
gdjs.Game_320_460_463Code.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.Game_320_460_463Code.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.Game_320_460_463Code.GDPurpleButtonWithShadowObjects1= [];
gdjs.Game_320_460_463Code.GDPurpleButtonWithShadowObjects2= [];
gdjs.Game_320_460_463Code.GDTransparentDarkJoystickObjects1= [];
gdjs.Game_320_460_463Code.GDTransparentDarkJoystickObjects2= [];
gdjs.Game_320_460_463Code.GDFemaleCharacter1Objects1= [];
gdjs.Game_320_460_463Code.GDFemaleCharacter1Objects2= [];
gdjs.Game_320_460_463Code.GDGroundObjects1= [];
gdjs.Game_320_460_463Code.GDGroundObjects2= [];


gdjs.Game_320_460_463Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Over_the_Horizon[1].mp3", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithShadow"), gdjs.Game_320_460_463Code.GDPurpleButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_320_460_463Code.GDPurpleButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.Game_320_460_463Code.GDPurpleButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_320_460_463Code.GDPurpleButtonWithShadowObjects1[k] = gdjs.Game_320_460_463Code.GDPurpleButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.Game_320_460_463Code.GDPurpleButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter1"), gdjs.Game_320_460_463Code.GDFemaleCharacter1Objects1);
{for(var i = 0, len = gdjs.Game_320_460_463Code.GDFemaleCharacter1Objects1.length ;i < len;++i) {
    gdjs.Game_320_460_463Code.GDFemaleCharacter1Objects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.Game_320_460_463Code.GDFloatingOutButtonDarkBlueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_320_460_463Code.GDFloatingOutButtonDarkBlueObjects1.length;i<l;++i) {
    if ( gdjs.Game_320_460_463Code.GDFloatingOutButtonDarkBlueObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_320_460_463Code.GDFloatingOutButtonDarkBlueObjects1[k] = gdjs.Game_320_460_463Code.GDFloatingOutButtonDarkBlueObjects1[i];
        ++k;
    }
}
gdjs.Game_320_460_463Code.GDFloatingOutButtonDarkBlueObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Game_320_460_463Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_320_460_463Code.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.Game_320_460_463Code.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.Game_320_460_463Code.GDPurpleButtonWithShadowObjects1.length = 0;
gdjs.Game_320_460_463Code.GDPurpleButtonWithShadowObjects2.length = 0;
gdjs.Game_320_460_463Code.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.Game_320_460_463Code.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.Game_320_460_463Code.GDFemaleCharacter1Objects1.length = 0;
gdjs.Game_320_460_463Code.GDFemaleCharacter1Objects2.length = 0;
gdjs.Game_320_460_463Code.GDGroundObjects1.length = 0;
gdjs.Game_320_460_463Code.GDGroundObjects2.length = 0;

gdjs.Game_320_460_463Code.eventsList0(runtimeScene);

return;

}

gdjs['Game_320_460_463Code'] = gdjs.Game_320_460_463Code;
