gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDStartObjects1= [];
gdjs.MenuCode.GDStartObjects2= [];
gdjs.MenuCode.GDBackgroundObjects1= [];
gdjs.MenuCode.GDBackgroundObjects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.MenuCode.GDStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDStartObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDStartObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDStartObjects1[k] = gdjs.MenuCode.GDStartObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDStartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "assets\\ambience.mp3", true, 100, 1);
}}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.playerAuthentication.openAuthenticationWindow(runtimeScene);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDStartObjects1.length = 0;
gdjs.MenuCode.GDStartObjects2.length = 0;
gdjs.MenuCode.GDBackgroundObjects1.length = 0;
gdjs.MenuCode.GDBackgroundObjects2.length = 0;

gdjs.MenuCode.eventsList1(runtimeScene);
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDStartObjects1.length = 0;
gdjs.MenuCode.GDStartObjects2.length = 0;
gdjs.MenuCode.GDBackgroundObjects1.length = 0;
gdjs.MenuCode.GDBackgroundObjects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
