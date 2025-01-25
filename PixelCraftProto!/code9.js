gdjs.Game_320_460_462Code = {};
gdjs.Game_320_460_462Code.localVariables = [];
gdjs.Game_320_460_462Code.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.Game_320_460_462Code.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.Game_320_460_462Code.GDGroundObjects1= [];
gdjs.Game_320_460_462Code.GDGroundObjects2= [];
gdjs.Game_320_460_462Code.GDFemaleCharacter1Objects1= [];
gdjs.Game_320_460_462Code.GDFemaleCharacter1Objects2= [];
gdjs.Game_320_460_462Code.GDTransparentDarkJoystickObjects1= [];
gdjs.Game_320_460_462Code.GDTransparentDarkJoystickObjects2= [];


gdjs.Game_320_460_462Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Over_the_Horizon[1].mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.Game_320_460_462Code.GDFloatingOutButtonDarkBlueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_320_460_462Code.GDFloatingOutButtonDarkBlueObjects1.length;i<l;++i) {
    if ( gdjs.Game_320_460_462Code.GDFloatingOutButtonDarkBlueObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_320_460_462Code.GDFloatingOutButtonDarkBlueObjects1[k] = gdjs.Game_320_460_462Code.GDFloatingOutButtonDarkBlueObjects1[i];
        ++k;
    }
}
gdjs.Game_320_460_462Code.GDFloatingOutButtonDarkBlueObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.Game_320_460_462Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_320_460_462Code.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.Game_320_460_462Code.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.Game_320_460_462Code.GDGroundObjects1.length = 0;
gdjs.Game_320_460_462Code.GDGroundObjects2.length = 0;
gdjs.Game_320_460_462Code.GDFemaleCharacter1Objects1.length = 0;
gdjs.Game_320_460_462Code.GDFemaleCharacter1Objects2.length = 0;
gdjs.Game_320_460_462Code.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.Game_320_460_462Code.GDTransparentDarkJoystickObjects2.length = 0;

gdjs.Game_320_460_462Code.eventsList0(runtimeScene);

return;

}

gdjs['Game_320_460_462Code'] = gdjs.Game_320_460_462Code;
