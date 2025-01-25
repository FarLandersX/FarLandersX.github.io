gdjs.OptionsCode = {};
gdjs.OptionsCode.localVariables = [];
gdjs.OptionsCode.GDOptionsObjects1= [];
gdjs.OptionsCode.GDOptionsObjects2= [];
gdjs.OptionsCode.GDReturnObjects1= [];
gdjs.OptionsCode.GDReturnObjects2= [];


gdjs.OptionsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Return"), gdjs.OptionsCode.GDReturnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OptionsCode.GDReturnObjects1.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDReturnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.OptionsCode.GDReturnObjects1[k] = gdjs.OptionsCode.GDReturnObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDReturnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
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


};

gdjs.OptionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OptionsCode.GDOptionsObjects1.length = 0;
gdjs.OptionsCode.GDOptionsObjects2.length = 0;
gdjs.OptionsCode.GDReturnObjects1.length = 0;
gdjs.OptionsCode.GDReturnObjects2.length = 0;

gdjs.OptionsCode.eventsList0(runtimeScene);

return;

}

gdjs['OptionsCode'] = gdjs.OptionsCode;
