gdjs.Game_320_460_461Code = {};
gdjs.Game_320_460_461Code.localVariables = [];
gdjs.Game_320_460_461Code.GDTransparentDarkJoystickObjects1= [];
gdjs.Game_320_460_461Code.GDTransparentDarkJoystickObjects2= [];
gdjs.Game_320_460_461Code.GDGroundObjects1= [];
gdjs.Game_320_460_461Code.GDGroundObjects2= [];
gdjs.Game_320_460_461Code.GDFemaleCharacter1Objects1= [];
gdjs.Game_320_460_461Code.GDFemaleCharacter1Objects2= [];
gdjs.Game_320_460_461Code.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.Game_320_460_461Code.GDFloatingOutButtonDarkBlueObjects2= [];


gdjs.Game_320_460_461Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.Game_320_460_461Code.GDFloatingOutButtonDarkBlueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_320_460_461Code.GDFloatingOutButtonDarkBlueObjects1.length;i<l;++i) {
    if ( gdjs.Game_320_460_461Code.GDFloatingOutButtonDarkBlueObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_320_460_461Code.GDFloatingOutButtonDarkBlueObjects1[k] = gdjs.Game_320_460_461Code.GDFloatingOutButtonDarkBlueObjects1[i];
        ++k;
    }
}
gdjs.Game_320_460_461Code.GDFloatingOutButtonDarkBlueObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.Game_320_460_461Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_320_460_461Code.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.Game_320_460_461Code.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.Game_320_460_461Code.GDGroundObjects1.length = 0;
gdjs.Game_320_460_461Code.GDGroundObjects2.length = 0;
gdjs.Game_320_460_461Code.GDFemaleCharacter1Objects1.length = 0;
gdjs.Game_320_460_461Code.GDFemaleCharacter1Objects2.length = 0;
gdjs.Game_320_460_461Code.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.Game_320_460_461Code.GDFloatingOutButtonDarkBlueObjects2.length = 0;

gdjs.Game_320_460_461Code.eventsList0(runtimeScene);

return;

}

gdjs['Game_320_460_461Code'] = gdjs.Game_320_460_461Code;
