gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.MenuCode.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.MenuCode.GDPurpleButtonWithShadowObjects1= [];
gdjs.MenuCode.GDPurpleButtonWithShadowObjects2= [];
gdjs.MenuCode.GDBlackSquareDecoratedButtonObjects1= [];
gdjs.MenuCode.GDBlackSquareDecoratedButtonObjects2= [];
gdjs.MenuCode.GDGreyButtonWithShadowObjects1= [];
gdjs.MenuCode.GDGreyButtonWithShadowObjects2= [];
gdjs.MenuCode.GDBlueButtonWithShadowObjects1= [];
gdjs.MenuCode.GDBlueButtonWithShadowObjects2= [];
gdjs.MenuCode.GDRedButtonWithShadowObjects1= [];
gdjs.MenuCode.GDRedButtonWithShadowObjects2= [];
gdjs.MenuCode.GDBrownButtonWithShadowObjects1= [];
gdjs.MenuCode.GDBrownButtonWithShadowObjects2= [];
gdjs.MenuCode.GDPixel_9595Craft_9595ProtoObjects1= [];
gdjs.MenuCode.GDPixel_9595Craft_9595ProtoObjects2= [];
gdjs.MenuCode.GDVersion_9595numberObjects1= [];
gdjs.MenuCode.GDVersion_9595numberObjects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithShadow"), gdjs.MenuCode.GDPurpleButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDPurpleButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDPurpleButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDPurpleButtonWithShadowObjects1[k] = gdjs.MenuCode.GDPurpleButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDPurpleButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game 0.0.8", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.MenuCode.GDBlueButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBlueButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBlueButtonWithShadowObjects1[k] = gdjs.MenuCode.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBlueButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Options", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreyButtonWithShadow"), gdjs.MenuCode.GDGreyButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDGreyButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDGreyButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDGreyButtonWithShadowObjects1[k] = gdjs.MenuCode.GDGreyButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDGreyButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Legacy", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackSquareDecoratedButton"), gdjs.MenuCode.GDBlackSquareDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBlackSquareDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBlackSquareDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBlackSquareDecoratedButtonObjects1[k] = gdjs.MenuCode.GDBlackSquareDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBlackSquareDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "About", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithShadow"), gdjs.MenuCode.GDRedButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDRedButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDRedButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDRedButtonWithShadowObjects1[k] = gdjs.MenuCode.GDRedButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDRedButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.MenuCode.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.MenuCode.GDPurpleButtonWithShadowObjects1.length = 0;
gdjs.MenuCode.GDPurpleButtonWithShadowObjects2.length = 0;
gdjs.MenuCode.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs.MenuCode.GDBlackSquareDecoratedButtonObjects2.length = 0;
gdjs.MenuCode.GDGreyButtonWithShadowObjects1.length = 0;
gdjs.MenuCode.GDGreyButtonWithShadowObjects2.length = 0;
gdjs.MenuCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.MenuCode.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.MenuCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.MenuCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.MenuCode.GDBrownButtonWithShadowObjects1.length = 0;
gdjs.MenuCode.GDBrownButtonWithShadowObjects2.length = 0;
gdjs.MenuCode.GDPixel_9595Craft_9595ProtoObjects1.length = 0;
gdjs.MenuCode.GDPixel_9595Craft_9595ProtoObjects2.length = 0;
gdjs.MenuCode.GDVersion_9595numberObjects1.length = 0;
gdjs.MenuCode.GDVersion_9595numberObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
