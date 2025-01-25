gdjs.Game_320_460_465Code = {};
gdjs.Game_320_460_465Code.localVariables = [];
gdjs.Game_320_460_465Code.GDTransparentDarkJoystickObjects1= [];
gdjs.Game_320_460_465Code.GDTransparentDarkJoystickObjects2= [];
gdjs.Game_320_460_465Code.GDGroundObjects1= [];
gdjs.Game_320_460_465Code.GDGroundObjects2= [];
gdjs.Game_320_460_465Code.GDFemaleCharacter1Objects1= [];
gdjs.Game_320_460_465Code.GDFemaleCharacter1Objects2= [];
gdjs.Game_320_460_465Code.GDMaleCharacter8Objects1= [];
gdjs.Game_320_460_465Code.GDMaleCharacter8Objects2= [];
gdjs.Game_320_460_465Code.GDShotgunObjects1= [];
gdjs.Game_320_460_465Code.GDShotgunObjects2= [];
gdjs.Game_320_460_465Code.GDCrossbowObjects1= [];
gdjs.Game_320_460_465Code.GDCrossbowObjects2= [];
gdjs.Game_320_460_465Code.GDAxeObjects1= [];
gdjs.Game_320_460_465Code.GDAxeObjects2= [];
gdjs.Game_320_460_465Code.GDCannonObjects1= [];
gdjs.Game_320_460_465Code.GDCannonObjects2= [];
gdjs.Game_320_460_465Code.GDGatlingGunObjects1= [];
gdjs.Game_320_460_465Code.GDGatlingGunObjects2= [];
gdjs.Game_320_460_465Code.GDHealthBarObjects1= [];
gdjs.Game_320_460_465Code.GDHealthBarObjects2= [];
gdjs.Game_320_460_465Code.GDTankBullet6Objects1= [];
gdjs.Game_320_460_465Code.GDTankBullet6Objects2= [];
gdjs.Game_320_460_465Code.GDCursor1Objects1= [];
gdjs.Game_320_460_465Code.GDCursor1Objects2= [];
gdjs.Game_320_460_465Code.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.Game_320_460_465Code.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.Game_320_460_465Code.GDBlueButtonWithShadowObjects1= [];
gdjs.Game_320_460_465Code.GDBlueButtonWithShadowObjects2= [];


gdjs.Game_320_460_465Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Over_the_Horizon[1].mp3", true, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter1"), gdjs.Game_320_460_465Code.GDFemaleCharacter1Objects1);
{for(var i = 0, len = gdjs.Game_320_460_465Code.GDFemaleCharacter1Objects1.length ;i < len;++i) {
    gdjs.Game_320_460_465Code.GDFemaleCharacter1Objects1[i].getBehavior("TopDownMovement").setXVelocity(150);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter1"), gdjs.Game_320_460_465Code.GDFemaleCharacter1Objects1);
{for(var i = 0, len = gdjs.Game_320_460_465Code.GDFemaleCharacter1Objects1.length ;i < len;++i) {
    gdjs.Game_320_460_465Code.GDFemaleCharacter1Objects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.Game_320_460_465Code.GDFloatingOutButtonDarkBlueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_320_460_465Code.GDFloatingOutButtonDarkBlueObjects1.length;i<l;++i) {
    if ( gdjs.Game_320_460_465Code.GDFloatingOutButtonDarkBlueObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_320_460_465Code.GDFloatingOutButtonDarkBlueObjects1[k] = gdjs.Game_320_460_465Code.GDFloatingOutButtonDarkBlueObjects1[i];
        ++k;
    }
}
gdjs.Game_320_460_465Code.GDFloatingOutButtonDarkBlueObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter1"), gdjs.Game_320_460_465Code.GDFemaleCharacter1Objects1);
{for(var i = 0, len = gdjs.Game_320_460_465Code.GDFemaleCharacter1Objects1.length ;i < len;++i) {
    gdjs.Game_320_460_465Code.GDFemaleCharacter1Objects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.Game_320_460_465Code.GDBlueButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_320_460_465Code.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.Game_320_460_465Code.GDBlueButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_320_460_465Code.GDBlueButtonWithShadowObjects1[k] = gdjs.Game_320_460_465Code.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.Game_320_460_465Code.GDBlueButtonWithShadowObjects1.length = k;
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

gdjs.Game_320_460_465Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_320_460_465Code.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.Game_320_460_465Code.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.Game_320_460_465Code.GDGroundObjects1.length = 0;
gdjs.Game_320_460_465Code.GDGroundObjects2.length = 0;
gdjs.Game_320_460_465Code.GDFemaleCharacter1Objects1.length = 0;
gdjs.Game_320_460_465Code.GDFemaleCharacter1Objects2.length = 0;
gdjs.Game_320_460_465Code.GDMaleCharacter8Objects1.length = 0;
gdjs.Game_320_460_465Code.GDMaleCharacter8Objects2.length = 0;
gdjs.Game_320_460_465Code.GDShotgunObjects1.length = 0;
gdjs.Game_320_460_465Code.GDShotgunObjects2.length = 0;
gdjs.Game_320_460_465Code.GDCrossbowObjects1.length = 0;
gdjs.Game_320_460_465Code.GDCrossbowObjects2.length = 0;
gdjs.Game_320_460_465Code.GDAxeObjects1.length = 0;
gdjs.Game_320_460_465Code.GDAxeObjects2.length = 0;
gdjs.Game_320_460_465Code.GDCannonObjects1.length = 0;
gdjs.Game_320_460_465Code.GDCannonObjects2.length = 0;
gdjs.Game_320_460_465Code.GDGatlingGunObjects1.length = 0;
gdjs.Game_320_460_465Code.GDGatlingGunObjects2.length = 0;
gdjs.Game_320_460_465Code.GDHealthBarObjects1.length = 0;
gdjs.Game_320_460_465Code.GDHealthBarObjects2.length = 0;
gdjs.Game_320_460_465Code.GDTankBullet6Objects1.length = 0;
gdjs.Game_320_460_465Code.GDTankBullet6Objects2.length = 0;
gdjs.Game_320_460_465Code.GDCursor1Objects1.length = 0;
gdjs.Game_320_460_465Code.GDCursor1Objects2.length = 0;
gdjs.Game_320_460_465Code.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.Game_320_460_465Code.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.Game_320_460_465Code.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.Game_320_460_465Code.GDBlueButtonWithShadowObjects2.length = 0;

gdjs.Game_320_460_465Code.eventsList0(runtimeScene);

return;

}

gdjs['Game_320_460_465Code'] = gdjs.Game_320_460_465Code;
