gdjs.LegacyCode = {};
gdjs.LegacyCode.localVariables = [];
gdjs.LegacyCode.GDLegacyObjects1= [];
gdjs.LegacyCode.GDLegacyObjects2= [];
gdjs.LegacyCode.GDBlackDecoratedButtonObjects1= [];
gdjs.LegacyCode.GDBlackDecoratedButtonObjects2= [];
gdjs.LegacyCode.GDVersionlatestObjects1= [];
gdjs.LegacyCode.GDVersionlatestObjects2= [];
gdjs.LegacyCode.GDBrownButtonWithShadowObjects1= [];
gdjs.LegacyCode.GDBrownButtonWithShadowObjects2= [];
gdjs.LegacyCode.GDBlueButtonWithShadowObjects1= [];
gdjs.LegacyCode.GDBlueButtonWithShadowObjects2= [];
gdjs.LegacyCode.GDBlackSquareDecoratedButtonObjects1= [];
gdjs.LegacyCode.GDBlackSquareDecoratedButtonObjects2= [];
gdjs.LegacyCode.GDGreenButtonWithShadowObjects1= [];
gdjs.LegacyCode.GDGreenButtonWithShadowObjects2= [];
gdjs.LegacyCode.GDMedievalButtonBeigeObjects1= [];
gdjs.LegacyCode.GDMedievalButtonBeigeObjects2= [];
gdjs.LegacyCode.GDGreenButtonObjects1= [];
gdjs.LegacyCode.GDGreenButtonObjects2= [];
gdjs.LegacyCode.GDGreenButtonWithStoneFrameObjects1= [];
gdjs.LegacyCode.GDGreenButtonWithStoneFrameObjects2= [];
gdjs.LegacyCode.GDGreyButtonWithShadowObjects1= [];
gdjs.LegacyCode.GDGreyButtonWithShadowObjects2= [];
gdjs.LegacyCode.GDGreyButtonObjects1= [];
gdjs.LegacyCode.GDGreyButtonObjects2= [];
gdjs.LegacyCode.GDOnScreenControlsButtonObjects1= [];
gdjs.LegacyCode.GDOnScreenControlsButtonObjects2= [];
gdjs.LegacyCode.GDOrangeBubbleButtonObjects1= [];
gdjs.LegacyCode.GDOrangeBubbleButtonObjects2= [];
gdjs.LegacyCode.GDPurpleButtonWithShadowObjects1= [];
gdjs.LegacyCode.GDPurpleButtonWithShadowObjects2= [];
gdjs.LegacyCode.GDMedievalButtonBrownObjects1= [];
gdjs.LegacyCode.GDMedievalButtonBrownObjects2= [];
gdjs.LegacyCode.GDRedButtonWithGoldFrameObjects1= [];
gdjs.LegacyCode.GDRedButtonWithGoldFrameObjects2= [];
gdjs.LegacyCode.GDPurpleButtonWithStoneFrameObjects1= [];
gdjs.LegacyCode.GDPurpleButtonWithStoneFrameObjects2= [];
gdjs.LegacyCode.GDRedButtonObjects1= [];
gdjs.LegacyCode.GDRedButtonObjects2= [];
gdjs.LegacyCode.GDOrangeButtonWithStoneFrameObjects1= [];
gdjs.LegacyCode.GDOrangeButtonWithStoneFrameObjects2= [];
gdjs.LegacyCode.GDRedButtonWithStoneFrameObjects1= [];
gdjs.LegacyCode.GDRedButtonWithStoneFrameObjects2= [];
gdjs.LegacyCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.LegacyCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.LegacyCode.GDRedButtonWithShadowObjects1= [];
gdjs.LegacyCode.GDRedButtonWithShadowObjects2= [];
gdjs.LegacyCode.GDRedButtonWithMetalFrameObjects1= [];
gdjs.LegacyCode.GDRedButtonWithMetalFrameObjects2= [];
gdjs.LegacyCode.GDWhiteDecoratedButtonObjects1= [];
gdjs.LegacyCode.GDWhiteDecoratedButtonObjects2= [];
gdjs.LegacyCode.GDYellowButtonObjects1= [];
gdjs.LegacyCode.GDYellowButtonObjects2= [];
gdjs.LegacyCode.GDTransparentButtonWithWhiteYellowBorderObjects1= [];
gdjs.LegacyCode.GDTransparentButtonWithWhiteYellowBorderObjects2= [];
gdjs.LegacyCode.GDYellowJellyButtonObjects1= [];
gdjs.LegacyCode.GDYellowJellyButtonObjects2= [];
gdjs.LegacyCode.GDWhiteSquareDecoratedButtonObjects1= [];
gdjs.LegacyCode.GDWhiteSquareDecoratedButtonObjects2= [];
gdjs.LegacyCode.GDWhiteSleekButtonObjects1= [];
gdjs.LegacyCode.GDWhiteSleekButtonObjects2= [];


gdjs.LegacyCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Over_the_Horizon[1].mp3", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MedievalButtonBeige"), gdjs.LegacyCode.GDMedievalButtonBeigeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LegacyCode.GDMedievalButtonBeigeObjects1.length;i<l;++i) {
    if ( gdjs.LegacyCode.GDMedievalButtonBeigeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LegacyCode.GDMedievalButtonBeigeObjects1[k] = gdjs.LegacyCode.GDMedievalButtonBeigeObjects1[i];
        ++k;
    }
}
gdjs.LegacyCode.GDMedievalButtonBeigeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreyButton"), gdjs.LegacyCode.GDGreyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LegacyCode.GDGreyButtonObjects1.length;i<l;++i) {
    if ( gdjs.LegacyCode.GDGreyButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LegacyCode.GDGreyButtonObjects1[k] = gdjs.LegacyCode.GDGreyButtonObjects1[i];
        ++k;
    }
}
gdjs.LegacyCode.GDGreyButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game 0.0.1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.LegacyCode.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LegacyCode.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.LegacyCode.GDGreenButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LegacyCode.GDGreenButtonObjects1[k] = gdjs.LegacyCode.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs.LegacyCode.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game 0.0.2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.LegacyCode.GDYellowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LegacyCode.GDYellowButtonObjects1.length;i<l;++i) {
    if ( gdjs.LegacyCode.GDYellowButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LegacyCode.GDYellowButtonObjects1[k] = gdjs.LegacyCode.GDYellowButtonObjects1[i];
        ++k;
    }
}
gdjs.LegacyCode.GDYellowButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game 0.0.3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithShadow"), gdjs.LegacyCode.GDRedButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LegacyCode.GDRedButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.LegacyCode.GDRedButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LegacyCode.GDRedButtonWithShadowObjects1[k] = gdjs.LegacyCode.GDRedButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.LegacyCode.GDRedButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game 0.0.4", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButton"), gdjs.LegacyCode.GDRedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LegacyCode.GDRedButtonObjects1.length;i<l;++i) {
    if ( gdjs.LegacyCode.GDRedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LegacyCode.GDRedButtonObjects1[k] = gdjs.LegacyCode.GDRedButtonObjects1[i];
        ++k;
    }
}
gdjs.LegacyCode.GDRedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game 0.0.5", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BrownButtonWithShadow"), gdjs.LegacyCode.GDBrownButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LegacyCode.GDBrownButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.LegacyCode.GDBrownButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LegacyCode.GDBrownButtonWithShadowObjects1[k] = gdjs.LegacyCode.GDBrownButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.LegacyCode.GDBrownButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game 0.0.6", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Versionlatest"), gdjs.LegacyCode.GDVersionlatestObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LegacyCode.GDVersionlatestObjects1.length;i<l;++i) {
    if ( gdjs.LegacyCode.GDVersionlatestObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LegacyCode.GDVersionlatestObjects1[k] = gdjs.LegacyCode.GDVersionlatestObjects1[i];
        ++k;
    }
}
gdjs.LegacyCode.GDVersionlatestObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game 0.0.8", false);
}}

}


};

gdjs.LegacyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LegacyCode.GDLegacyObjects1.length = 0;
gdjs.LegacyCode.GDLegacyObjects2.length = 0;
gdjs.LegacyCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.LegacyCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.LegacyCode.GDVersionlatestObjects1.length = 0;
gdjs.LegacyCode.GDVersionlatestObjects2.length = 0;
gdjs.LegacyCode.GDBrownButtonWithShadowObjects1.length = 0;
gdjs.LegacyCode.GDBrownButtonWithShadowObjects2.length = 0;
gdjs.LegacyCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.LegacyCode.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.LegacyCode.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs.LegacyCode.GDBlackSquareDecoratedButtonObjects2.length = 0;
gdjs.LegacyCode.GDGreenButtonWithShadowObjects1.length = 0;
gdjs.LegacyCode.GDGreenButtonWithShadowObjects2.length = 0;
gdjs.LegacyCode.GDMedievalButtonBeigeObjects1.length = 0;
gdjs.LegacyCode.GDMedievalButtonBeigeObjects2.length = 0;
gdjs.LegacyCode.GDGreenButtonObjects1.length = 0;
gdjs.LegacyCode.GDGreenButtonObjects2.length = 0;
gdjs.LegacyCode.GDGreenButtonWithStoneFrameObjects1.length = 0;
gdjs.LegacyCode.GDGreenButtonWithStoneFrameObjects2.length = 0;
gdjs.LegacyCode.GDGreyButtonWithShadowObjects1.length = 0;
gdjs.LegacyCode.GDGreyButtonWithShadowObjects2.length = 0;
gdjs.LegacyCode.GDGreyButtonObjects1.length = 0;
gdjs.LegacyCode.GDGreyButtonObjects2.length = 0;
gdjs.LegacyCode.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.LegacyCode.GDOnScreenControlsButtonObjects2.length = 0;
gdjs.LegacyCode.GDOrangeBubbleButtonObjects1.length = 0;
gdjs.LegacyCode.GDOrangeBubbleButtonObjects2.length = 0;
gdjs.LegacyCode.GDPurpleButtonWithShadowObjects1.length = 0;
gdjs.LegacyCode.GDPurpleButtonWithShadowObjects2.length = 0;
gdjs.LegacyCode.GDMedievalButtonBrownObjects1.length = 0;
gdjs.LegacyCode.GDMedievalButtonBrownObjects2.length = 0;
gdjs.LegacyCode.GDRedButtonWithGoldFrameObjects1.length = 0;
gdjs.LegacyCode.GDRedButtonWithGoldFrameObjects2.length = 0;
gdjs.LegacyCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.LegacyCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.LegacyCode.GDRedButtonObjects1.length = 0;
gdjs.LegacyCode.GDRedButtonObjects2.length = 0;
gdjs.LegacyCode.GDOrangeButtonWithStoneFrameObjects1.length = 0;
gdjs.LegacyCode.GDOrangeButtonWithStoneFrameObjects2.length = 0;
gdjs.LegacyCode.GDRedButtonWithStoneFrameObjects1.length = 0;
gdjs.LegacyCode.GDRedButtonWithStoneFrameObjects2.length = 0;
gdjs.LegacyCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.LegacyCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.LegacyCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.LegacyCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.LegacyCode.GDRedButtonWithMetalFrameObjects1.length = 0;
gdjs.LegacyCode.GDRedButtonWithMetalFrameObjects2.length = 0;
gdjs.LegacyCode.GDWhiteDecoratedButtonObjects1.length = 0;
gdjs.LegacyCode.GDWhiteDecoratedButtonObjects2.length = 0;
gdjs.LegacyCode.GDYellowButtonObjects1.length = 0;
gdjs.LegacyCode.GDYellowButtonObjects2.length = 0;
gdjs.LegacyCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs.LegacyCode.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs.LegacyCode.GDYellowJellyButtonObjects1.length = 0;
gdjs.LegacyCode.GDYellowJellyButtonObjects2.length = 0;
gdjs.LegacyCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.LegacyCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.LegacyCode.GDWhiteSleekButtonObjects1.length = 0;
gdjs.LegacyCode.GDWhiteSleekButtonObjects2.length = 0;

gdjs.LegacyCode.eventsList0(runtimeScene);

return;

}

gdjs['LegacyCode'] = gdjs.LegacyCode;
