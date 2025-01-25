gdjs.GameEndCode = {};
gdjs.GameEndCode.localVariables = [];
gdjs.GameEndCode.GDBallObjects1= [];
gdjs.GameEndCode.GDBallObjects2= [];
gdjs.GameEndCode.GDLargeHoleObjects1= [];
gdjs.GameEndCode.GDLargeHoleObjects2= [];
gdjs.GameEndCode.GDGameEndObjects1= [];
gdjs.GameEndCode.GDGameEndObjects2= [];
gdjs.GameEndCode.GDBrownBackgroundObjects1= [];
gdjs.GameEndCode.GDBrownBackgroundObjects2= [];
gdjs.GameEndCode.GDBlueBackgroundObjects1= [];
gdjs.GameEndCode.GDBlueBackgroundObjects2= [];
gdjs.GameEndCode.GDGreenBackgroundObjects1= [];
gdjs.GameEndCode.GDGreenBackgroundObjects2= [];


gdjs.GameEndCode.mapOfGDgdjs_9546GameEndCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.GameEndCode.GDBallObjects1});
gdjs.GameEndCode.mapOfGDgdjs_9546GameEndCode_9546GDLargeHoleObjects1Objects = Hashtable.newFrom({"LargeHole": gdjs.GameEndCode.GDLargeHoleObjects1});
gdjs.GameEndCode.asyncCallback17954820 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameEndCode.localVariables);
{gdjs.multiplayer.endLobbyGame();
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lobby", false);
}gdjs.GameEndCode.localVariables.length = 0;
}
gdjs.GameEndCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameEndCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.GameEndCode.asyncCallback17954820(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameEndCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GameEnd"), gdjs.GameEndCode.GDGameEndObjects1);
{for(var i = 0, len = gdjs.GameEndCode.GDGameEndObjects1.length ;i < len;++i) {
    gdjs.GameEndCode.GDGameEndObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(4, 0, 25, 0, 2, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameEndCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("LargeHole"), gdjs.GameEndCode.GDLargeHoleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameEndCode.mapOfGDgdjs_9546GameEndCode_9546GDBallObjects1Objects, gdjs.GameEndCode.mapOfGDgdjs_9546GameEndCode_9546GDLargeHoleObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17952612);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameEndCode.GDBallObjects1 */
/* Reuse gdjs.GameEndCode.GDLargeHoleObjects1 */
{for(var i = 0, len = gdjs.GameEndCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameEndCode.GDBallObjects1[i].activateBehavior("Physics2", false);
}
}{for(var i = 0, len = gdjs.GameEndCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameEndCode.GDBallObjects1[i].getBehavior("Tween").addObjectPositionTween2("Center", (( gdjs.GameEndCode.GDLargeHoleObjects1.length === 0 ) ? 0 :gdjs.GameEndCode.GDLargeHoleObjects1[0].getCenterXInScene()), (( gdjs.GameEndCode.GDLargeHoleObjects1.length === 0 ) ? 0 :gdjs.GameEndCode.GDLargeHoleObjects1[0].getCenterYInScene()), "easeOutQuad", 0.5, false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "WinEffect", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameEndCode.GDBallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameEndCode.GDBallObjects1.length;i<l;++i) {
    if ( gdjs.GameEndCode.GDBallObjects1[i].getBehavior("Tween").exists("Center") ) {
        isConditionTrue_0 = true;
        gdjs.GameEndCode.GDBallObjects1[k] = gdjs.GameEndCode.GDBallObjects1[i];
        ++k;
    }
}
gdjs.GameEndCode.GDBallObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17954612);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameEndCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.GameEndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameEndCode.GDBallObjects1.length = 0;
gdjs.GameEndCode.GDBallObjects2.length = 0;
gdjs.GameEndCode.GDLargeHoleObjects1.length = 0;
gdjs.GameEndCode.GDLargeHoleObjects2.length = 0;
gdjs.GameEndCode.GDGameEndObjects1.length = 0;
gdjs.GameEndCode.GDGameEndObjects2.length = 0;
gdjs.GameEndCode.GDBrownBackgroundObjects1.length = 0;
gdjs.GameEndCode.GDBrownBackgroundObjects2.length = 0;
gdjs.GameEndCode.GDBlueBackgroundObjects1.length = 0;
gdjs.GameEndCode.GDBlueBackgroundObjects2.length = 0;
gdjs.GameEndCode.GDGreenBackgroundObjects1.length = 0;
gdjs.GameEndCode.GDGreenBackgroundObjects2.length = 0;

gdjs.GameEndCode.eventsList1(runtimeScene);
gdjs.GameEndCode.GDBallObjects1.length = 0;
gdjs.GameEndCode.GDBallObjects2.length = 0;
gdjs.GameEndCode.GDLargeHoleObjects1.length = 0;
gdjs.GameEndCode.GDLargeHoleObjects2.length = 0;
gdjs.GameEndCode.GDGameEndObjects1.length = 0;
gdjs.GameEndCode.GDGameEndObjects2.length = 0;
gdjs.GameEndCode.GDBrownBackgroundObjects1.length = 0;
gdjs.GameEndCode.GDBrownBackgroundObjects2.length = 0;
gdjs.GameEndCode.GDBlueBackgroundObjects1.length = 0;
gdjs.GameEndCode.GDBlueBackgroundObjects2.length = 0;
gdjs.GameEndCode.GDGreenBackgroundObjects1.length = 0;
gdjs.GameEndCode.GDGreenBackgroundObjects2.length = 0;


return;

}

gdjs['GameEndCode'] = gdjs.GameEndCode;
