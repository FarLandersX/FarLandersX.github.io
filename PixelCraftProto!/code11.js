gdjs.AboutCode = {};
gdjs.AboutCode.localVariables = [];
gdjs.AboutCode.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.AboutCode.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.AboutCode.GD_9595007BETAObjects1= [];
gdjs.AboutCode.GD_9595007BETAObjects2= [];
gdjs.AboutCode.GDGdevelopObjects1= [];
gdjs.AboutCode.GDGdevelopObjects2= [];
gdjs.AboutCode.GDPixel_9595Craft_9595ProtoObjects1= [];
gdjs.AboutCode.GDPixel_9595Craft_9595ProtoObjects2= [];
gdjs.AboutCode.GDVersion_9595numberObjects1= [];
gdjs.AboutCode.GDVersion_9595numberObjects2= [];
gdjs.AboutCode.GDFloatingOutButtonDarkBlue2Objects1= [];
gdjs.AboutCode.GDFloatingOutButtonDarkBlue2Objects2= [];
gdjs.AboutCode.GDThanks_9595Objects1= [];
gdjs.AboutCode.GDThanks_9595Objects2= [];


gdjs.AboutCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Over_the_Horizon[1].mp3", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.AboutCode.GDFloatingOutButtonDarkBlueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AboutCode.GDFloatingOutButtonDarkBlueObjects1.length;i<l;++i) {
    if ( gdjs.AboutCode.GDFloatingOutButtonDarkBlueObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.AboutCode.GDFloatingOutButtonDarkBlueObjects1[k] = gdjs.AboutCode.GDFloatingOutButtonDarkBlueObjects1[i];
        ++k;
    }
}
gdjs.AboutCode.GDFloatingOutButtonDarkBlueObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue2"), gdjs.AboutCode.GDFloatingOutButtonDarkBlue2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AboutCode.GDFloatingOutButtonDarkBlue2Objects1.length;i<l;++i) {
    if ( gdjs.AboutCode.GDFloatingOutButtonDarkBlue2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.AboutCode.GDFloatingOutButtonDarkBlue2Objects1[k] = gdjs.AboutCode.GDFloatingOutButtonDarkBlue2Objects1[i];
        ++k;
    }
}
gdjs.AboutCode.GDFloatingOutButtonDarkBlue2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game 0.0.7 beta", false);
}}

}


};

gdjs.AboutCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.AboutCode.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.AboutCode.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.AboutCode.GD_9595007BETAObjects1.length = 0;
gdjs.AboutCode.GD_9595007BETAObjects2.length = 0;
gdjs.AboutCode.GDGdevelopObjects1.length = 0;
gdjs.AboutCode.GDGdevelopObjects2.length = 0;
gdjs.AboutCode.GDPixel_9595Craft_9595ProtoObjects1.length = 0;
gdjs.AboutCode.GDPixel_9595Craft_9595ProtoObjects2.length = 0;
gdjs.AboutCode.GDVersion_9595numberObjects1.length = 0;
gdjs.AboutCode.GDVersion_9595numberObjects2.length = 0;
gdjs.AboutCode.GDFloatingOutButtonDarkBlue2Objects1.length = 0;
gdjs.AboutCode.GDFloatingOutButtonDarkBlue2Objects2.length = 0;
gdjs.AboutCode.GDThanks_9595Objects1.length = 0;
gdjs.AboutCode.GDThanks_9595Objects2.length = 0;

gdjs.AboutCode.eventsList0(runtimeScene);

return;

}

gdjs['AboutCode'] = gdjs.AboutCode;
