gdjs.GameSceneCode = {};
gdjs.GameSceneCode.localVariables = [];
gdjs.GameSceneCode.GDBallObjects1= [];
gdjs.GameSceneCode.GDBallObjects2= [];
gdjs.GameSceneCode.GDBallObjects3= [];
gdjs.GameSceneCode.GDBallObjects4= [];
gdjs.GameSceneCode.GDLargeHoleObjects1= [];
gdjs.GameSceneCode.GDLargeHoleObjects2= [];
gdjs.GameSceneCode.GDLargeHoleObjects3= [];
gdjs.GameSceneCode.GDLargeHoleObjects4= [];
gdjs.GameSceneCode.GDDirectionalArrowFullCircleObjects1= [];
gdjs.GameSceneCode.GDDirectionalArrowFullCircleObjects2= [];
gdjs.GameSceneCode.GDDirectionalArrowFullCircleObjects3= [];
gdjs.GameSceneCode.GDDirectionalArrowFullCircleObjects4= [];
gdjs.GameSceneCode.GDStartObjects1= [];
gdjs.GameSceneCode.GDStartObjects2= [];
gdjs.GameSceneCode.GDStartObjects3= [];
gdjs.GameSceneCode.GDStartObjects4= [];
gdjs.GameSceneCode.GDMouseCursor_9595Player1Objects1= [];
gdjs.GameSceneCode.GDMouseCursor_9595Player1Objects2= [];
gdjs.GameSceneCode.GDMouseCursor_9595Player1Objects3= [];
gdjs.GameSceneCode.GDMouseCursor_9595Player1Objects4= [];
gdjs.GameSceneCode.GDMouseCursor_9595Player2Objects1= [];
gdjs.GameSceneCode.GDMouseCursor_9595Player2Objects2= [];
gdjs.GameSceneCode.GDMouseCursor_9595Player2Objects3= [];
gdjs.GameSceneCode.GDMouseCursor_9595Player2Objects4= [];
gdjs.GameSceneCode.GDSpring_9595RedObjects1= [];
gdjs.GameSceneCode.GDSpring_9595RedObjects2= [];
gdjs.GameSceneCode.GDSpring_9595RedObjects3= [];
gdjs.GameSceneCode.GDSpring_9595RedObjects4= [];
gdjs.GameSceneCode.GDSpring_9595GreenObjects1= [];
gdjs.GameSceneCode.GDSpring_9595GreenObjects2= [];
gdjs.GameSceneCode.GDSpring_9595GreenObjects3= [];
gdjs.GameSceneCode.GDSpring_9595GreenObjects4= [];
gdjs.GameSceneCode.GDBlock_9595RedObjects1= [];
gdjs.GameSceneCode.GDBlock_9595RedObjects2= [];
gdjs.GameSceneCode.GDBlock_9595RedObjects3= [];
gdjs.GameSceneCode.GDBlock_9595RedObjects4= [];
gdjs.GameSceneCode.GDBlock_9595GreenObjects1= [];
gdjs.GameSceneCode.GDBlock_9595GreenObjects2= [];
gdjs.GameSceneCode.GDBlock_9595GreenObjects3= [];
gdjs.GameSceneCode.GDBlock_9595GreenObjects4= [];
gdjs.GameSceneCode.GDTriangle_9595GreenObjects1= [];
gdjs.GameSceneCode.GDTriangle_9595GreenObjects2= [];
gdjs.GameSceneCode.GDTriangle_9595GreenObjects3= [];
gdjs.GameSceneCode.GDTriangle_9595GreenObjects4= [];
gdjs.GameSceneCode.GDRightTriangle_9595RedObjects1= [];
gdjs.GameSceneCode.GDRightTriangle_9595RedObjects2= [];
gdjs.GameSceneCode.GDRightTriangle_9595RedObjects3= [];
gdjs.GameSceneCode.GDRightTriangle_9595RedObjects4= [];
gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects1= [];
gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects2= [];
gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects3= [];
gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects4= [];
gdjs.GameSceneCode.GDTriangle_9595RedObjects1= [];
gdjs.GameSceneCode.GDTriangle_9595RedObjects2= [];
gdjs.GameSceneCode.GDTriangle_9595RedObjects3= [];
gdjs.GameSceneCode.GDTriangle_9595RedObjects4= [];
gdjs.GameSceneCode.GDBlock_9595BlackObjects1= [];
gdjs.GameSceneCode.GDBlock_9595BlackObjects2= [];
gdjs.GameSceneCode.GDBlock_9595BlackObjects3= [];
gdjs.GameSceneCode.GDBlock_9595BlackObjects4= [];
gdjs.GameSceneCode.GDLevelObjects1= [];
gdjs.GameSceneCode.GDLevelObjects2= [];
gdjs.GameSceneCode.GDLevelObjects3= [];
gdjs.GameSceneCode.GDLevelObjects4= [];
gdjs.GameSceneCode.GDBrownBackgroundObjects1= [];
gdjs.GameSceneCode.GDBrownBackgroundObjects2= [];
gdjs.GameSceneCode.GDBrownBackgroundObjects3= [];
gdjs.GameSceneCode.GDBrownBackgroundObjects4= [];
gdjs.GameSceneCode.GDBlueBackgroundObjects1= [];
gdjs.GameSceneCode.GDBlueBackgroundObjects2= [];
gdjs.GameSceneCode.GDBlueBackgroundObjects3= [];
gdjs.GameSceneCode.GDBlueBackgroundObjects4= [];
gdjs.GameSceneCode.GDGreenBackgroundObjects1= [];
gdjs.GameSceneCode.GDGreenBackgroundObjects2= [];
gdjs.GameSceneCode.GDGreenBackgroundObjects3= [];
gdjs.GameSceneCode.GDGreenBackgroundObjects4= [];
gdjs.GameSceneCode.GDPlayerColorObjects1= [];
gdjs.GameSceneCode.GDPlayerColorObjects2= [];
gdjs.GameSceneCode.GDPlayerColorObjects3= [];
gdjs.GameSceneCode.GDPlayerColorObjects4= [];


gdjs.GameSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MouseCursor_Player1"), gdjs.GameSceneCode.GDMouseCursor_9595Player1Objects1);
gdjs.copyArray(runtimeScene.getObjects("MouseCursor_Player2"), gdjs.GameSceneCode.GDMouseCursor_9595Player2Objects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDMouseCursor_9595Player1Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDMouseCursor_9595Player1Objects1[i].returnVariable(gdjs.GameSceneCode.GDMouseCursor_9595Player1Objects1[i].getVariables().getFromIndex(0)).setNumber(2);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDMouseCursor_9595Player2Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDMouseCursor_9595Player2Objects1[i].returnVariable(gdjs.GameSceneCode.GDMouseCursor_9595Player2Objects1[i].getVariables().getFromIndex(0)).setNumber(2);
}
}}

}


};gdjs.GameSceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MouseCursor_Player1"), gdjs.GameSceneCode.GDMouseCursor_9595Player1Objects2);
{for(var i = 0, len = gdjs.GameSceneCode.GDMouseCursor_9595Player1Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDMouseCursor_9595Player1Objects2[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MouseCursor_Player1"), gdjs.GameSceneCode.GDMouseCursor_9595Player1Objects2);
{for(var i = 0, len = gdjs.GameSceneCode.GDMouseCursor_9595Player1Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDMouseCursor_9595Player1Objects2[i].getBehavior("Animation").setAnimationIndex(gdjs.GameSceneCode.GDMouseCursor_9595Player1Objects2[i].getVariables().getFromIndex(0).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MouseCursor_Player1"), gdjs.GameSceneCode.GDMouseCursor_9595Player1Objects2);
{for(var i = 0, len = gdjs.GameSceneCode.GDMouseCursor_9595Player1Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDMouseCursor_9595Player1Objects2[i].getBehavior("Animation").setAnimationIndex(gdjs.GameSceneCode.GDMouseCursor_9595Player1Objects2[i].getVariables().getFromIndex(0).getAsNumber() + 1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9966540);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerColor"), gdjs.GameSceneCode.GDPlayerColorObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDPlayerColorObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayerColorObjects1[i].setColor("126;211;33");
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDPlayerColorObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayerColorObjects1[i].getBehavior("Text").setText("You are GREEN");
}
}}

}


};gdjs.GameSceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MouseCursor_Player2"), gdjs.GameSceneCode.GDMouseCursor_9595Player2Objects2);
{for(var i = 0, len = gdjs.GameSceneCode.GDMouseCursor_9595Player2Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDMouseCursor_9595Player2Objects2[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MouseCursor_Player2"), gdjs.GameSceneCode.GDMouseCursor_9595Player2Objects2);
{for(var i = 0, len = gdjs.GameSceneCode.GDMouseCursor_9595Player2Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDMouseCursor_9595Player2Objects2[i].getBehavior("Animation").setAnimationIndex(gdjs.GameSceneCode.GDMouseCursor_9595Player2Objects2[i].getVariables().getFromIndex(0).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MouseCursor_Player2"), gdjs.GameSceneCode.GDMouseCursor_9595Player2Objects2);
{for(var i = 0, len = gdjs.GameSceneCode.GDMouseCursor_9595Player2Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDMouseCursor_9595Player2Objects2[i].getBehavior("Animation").setAnimationIndex(gdjs.GameSceneCode.GDMouseCursor_9595Player2Objects2[i].getVariables().getFromIndex(0).getAsNumber() + 1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9973020);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerColor"), gdjs.GameSceneCode.GDPlayerColorObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDPlayerColorObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayerColorObjects1[i].setColor("208;2;27");
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDPlayerColorObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayerColorObjects1[i].getBehavior("Text").setText("You are RED");
}
}}

}


};gdjs.GameSceneCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.GameSceneCode.GDBlock_9595GreenObjects1 */
/* Reuse gdjs.GameSceneCode.GDBlock_9595RedObjects1 */
/* Reuse gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects1 */
/* Reuse gdjs.GameSceneCode.GDRightTriangle_9595RedObjects1 */
/* Reuse gdjs.GameSceneCode.GDSpring_9595GreenObjects1 */
/* Reuse gdjs.GameSceneCode.GDSpring_9595RedObjects1 */
/* Reuse gdjs.GameSceneCode.GDTriangle_9595GreenObjects1 */
/* Reuse gdjs.GameSceneCode.GDTriangle_9595RedObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDTriangle_9595RedObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDTriangle_9595RedObjects1[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDTriangle_9595RedObjects1[k] = gdjs.GameSceneCode.GDTriangle_9595RedObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDTriangle_9595RedObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects1[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects1[k] = gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDTriangle_9595GreenObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDTriangle_9595GreenObjects1[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDTriangle_9595GreenObjects1[k] = gdjs.GameSceneCode.GDTriangle_9595GreenObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDTriangle_9595GreenObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDRightTriangle_9595RedObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDRightTriangle_9595RedObjects1[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDRightTriangle_9595RedObjects1[k] = gdjs.GameSceneCode.GDRightTriangle_9595RedObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDRightTriangle_9595RedObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDSpring_9595RedObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDSpring_9595RedObjects1[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDSpring_9595RedObjects1[k] = gdjs.GameSceneCode.GDSpring_9595RedObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDSpring_9595RedObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDSpring_9595GreenObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDSpring_9595GreenObjects1[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDSpring_9595GreenObjects1[k] = gdjs.GameSceneCode.GDSpring_9595GreenObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDSpring_9595GreenObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDBlock_9595RedObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDBlock_9595RedObjects1[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDBlock_9595RedObjects1[k] = gdjs.GameSceneCode.GDBlock_9595RedObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDBlock_9595RedObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDBlock_9595GreenObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDBlock_9595GreenObjects1[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDBlock_9595GreenObjects1[k] = gdjs.GameSceneCode.GDBlock_9595GreenObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDBlock_9595GreenObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDBlock_9595GreenObjects1 */
/* Reuse gdjs.GameSceneCode.GDBlock_9595RedObjects1 */
/* Reuse gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects1 */
/* Reuse gdjs.GameSceneCode.GDRightTriangle_9595RedObjects1 */
/* Reuse gdjs.GameSceneCode.GDSpring_9595GreenObjects1 */
/* Reuse gdjs.GameSceneCode.GDSpring_9595RedObjects1 */
/* Reuse gdjs.GameSceneCode.GDTriangle_9595GreenObjects1 */
/* Reuse gdjs.GameSceneCode.GDTriangle_9595RedObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDTriangle_9595RedObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTriangle_9595RedObjects1[i].activateBehavior("Draggable", true);
}
for(var i = 0, len = gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects1[i].activateBehavior("Draggable", true);
}
for(var i = 0, len = gdjs.GameSceneCode.GDTriangle_9595GreenObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTriangle_9595GreenObjects1[i].activateBehavior("Draggable", true);
}
for(var i = 0, len = gdjs.GameSceneCode.GDRightTriangle_9595RedObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDRightTriangle_9595RedObjects1[i].activateBehavior("Draggable", true);
}
for(var i = 0, len = gdjs.GameSceneCode.GDSpring_9595RedObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDSpring_9595RedObjects1[i].activateBehavior("Draggable", true);
}
for(var i = 0, len = gdjs.GameSceneCode.GDSpring_9595GreenObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDSpring_9595GreenObjects1[i].activateBehavior("Draggable", true);
}
for(var i = 0, len = gdjs.GameSceneCode.GDBlock_9595RedObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBlock_9595RedObjects1[i].activateBehavior("Draggable", true);
}
for(var i = 0, len = gdjs.GameSceneCode.GDBlock_9595GreenObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBlock_9595GreenObjects1[i].activateBehavior("Draggable", true);
}
}}

}


};gdjs.GameSceneCode.eventsList4 = function(runtimeScene) {

{

/* Reuse gdjs.GameSceneCode.GDBlock_9595GreenObjects1 */
/* Reuse gdjs.GameSceneCode.GDBlock_9595RedObjects1 */
/* Reuse gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects1 */
/* Reuse gdjs.GameSceneCode.GDRightTriangle_9595RedObjects1 */
/* Reuse gdjs.GameSceneCode.GDSpring_9595GreenObjects1 */
/* Reuse gdjs.GameSceneCode.GDSpring_9595RedObjects1 */
/* Reuse gdjs.GameSceneCode.GDTriangle_9595GreenObjects1 */
/* Reuse gdjs.GameSceneCode.GDTriangle_9595RedObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDTriangle_9595RedObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDTriangle_9595RedObjects1[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDTriangle_9595RedObjects1[k] = gdjs.GameSceneCode.GDTriangle_9595RedObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDTriangle_9595RedObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects1[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects1[k] = gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDTriangle_9595GreenObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDTriangle_9595GreenObjects1[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDTriangle_9595GreenObjects1[k] = gdjs.GameSceneCode.GDTriangle_9595GreenObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDTriangle_9595GreenObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDRightTriangle_9595RedObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDRightTriangle_9595RedObjects1[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDRightTriangle_9595RedObjects1[k] = gdjs.GameSceneCode.GDRightTriangle_9595RedObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDRightTriangle_9595RedObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDSpring_9595RedObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDSpring_9595RedObjects1[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDSpring_9595RedObjects1[k] = gdjs.GameSceneCode.GDSpring_9595RedObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDSpring_9595RedObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDSpring_9595GreenObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDSpring_9595GreenObjects1[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDSpring_9595GreenObjects1[k] = gdjs.GameSceneCode.GDSpring_9595GreenObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDSpring_9595GreenObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDBlock_9595RedObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDBlock_9595RedObjects1[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDBlock_9595RedObjects1[k] = gdjs.GameSceneCode.GDBlock_9595RedObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDBlock_9595RedObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDBlock_9595GreenObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDBlock_9595GreenObjects1[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDBlock_9595GreenObjects1[k] = gdjs.GameSceneCode.GDBlock_9595GreenObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDBlock_9595GreenObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDBlock_9595GreenObjects1 */
/* Reuse gdjs.GameSceneCode.GDBlock_9595RedObjects1 */
/* Reuse gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects1 */
/* Reuse gdjs.GameSceneCode.GDRightTriangle_9595RedObjects1 */
/* Reuse gdjs.GameSceneCode.GDSpring_9595GreenObjects1 */
/* Reuse gdjs.GameSceneCode.GDSpring_9595RedObjects1 */
/* Reuse gdjs.GameSceneCode.GDTriangle_9595GreenObjects1 */
/* Reuse gdjs.GameSceneCode.GDTriangle_9595RedObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDTriangle_9595RedObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTriangle_9595RedObjects1[i].activateBehavior("Draggable", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects1[i].activateBehavior("Draggable", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDTriangle_9595GreenObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTriangle_9595GreenObjects1[i].activateBehavior("Draggable", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDRightTriangle_9595RedObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDRightTriangle_9595RedObjects1[i].activateBehavior("Draggable", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDSpring_9595RedObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDSpring_9595RedObjects1[i].activateBehavior("Draggable", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDSpring_9595GreenObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDSpring_9595GreenObjects1[i].activateBehavior("Draggable", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDBlock_9595RedObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBlock_9595RedObjects1[i].activateBehavior("Draggable", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDBlock_9595GreenObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBlock_9595GreenObjects1[i].activateBehavior("Draggable", false);
}
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.GameSceneCode.GDBallObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDSpring_95959595RedObjects1ObjectsGDgdjs_9546GameSceneCode_9546GDSpring_95959595GreenObjects1Objects = Hashtable.newFrom({"Spring_Red": gdjs.GameSceneCode.GDSpring_9595RedObjects1, "Spring_Green": gdjs.GameSceneCode.GDSpring_9595GreenObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.GameSceneCode.GDBallObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDLargeHoleObjects1Objects = Hashtable.newFrom({"LargeHole": gdjs.GameSceneCode.GDLargeHoleObjects1});
gdjs.GameSceneCode.asyncCallback9988460 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameSceneCode.localVariables);
{gdjs.evtTools.sound.playSound(runtimeScene, "WinEffect", false, 100, 1);
}gdjs.GameSceneCode.localVariables.length = 0;
}
gdjs.GameSceneCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameSceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.GameSceneCode.asyncCallback9988460(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameSceneCode.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > 3;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameEnd", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) <= 3;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}}

}


};gdjs.GameSceneCode.asyncCallback9990236 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameSceneCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{ //Subevents
gdjs.GameSceneCode.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GameSceneCode.localVariables.length = 0;
}
gdjs.GameSceneCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameSceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.GameSceneCode.asyncCallback9990236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameSceneCode.eventsList8 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Level"), gdjs.GameSceneCode.GDLevelObjects1);
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Level" + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()), 0, 0, 0);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.multiplayer.getPlayersInLobbyCount());
}{for(var i = 0, len = gdjs.GameSceneCode.GDLevelObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDLevelObjects1[i].getBehavior("Text").setText("Level: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}
{ //Subevents
gdjs.GameSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameSceneCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Block_Green"), gdjs.GameSceneCode.GDBlock_9595GreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Block_Red"), gdjs.GameSceneCode.GDBlock_9595RedObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightTriangle_Green"), gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightTriangle_Red"), gdjs.GameSceneCode.GDRightTriangle_9595RedObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spring_Green"), gdjs.GameSceneCode.GDSpring_9595GreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spring_Red"), gdjs.GameSceneCode.GDSpring_9595RedObjects1);
gdjs.copyArray(runtimeScene.getObjects("Triangle_Green"), gdjs.GameSceneCode.GDTriangle_9595GreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Triangle_Red"), gdjs.GameSceneCode.GDTriangle_9595RedObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBallObjects1[i].returnVariable(gdjs.GameSceneCode.GDBallObjects1[i].getVariables().getFromIndex(0)).setNumber((gdjs.GameSceneCode.GDBallObjects1[i].getCenterXInScene()));
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBallObjects1[i].returnVariable(gdjs.GameSceneCode.GDBallObjects1[i].getVariables().getFromIndex(1)).setNumber((gdjs.GameSceneCode.GDBallObjects1[i].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDTriangle_9595RedObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTriangle_9595RedObjects1[i].activateBehavior("Draggable", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects1[i].activateBehavior("Draggable", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDTriangle_9595GreenObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTriangle_9595GreenObjects1[i].activateBehavior("Draggable", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDRightTriangle_9595RedObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDRightTriangle_9595RedObjects1[i].activateBehavior("Draggable", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDSpring_9595RedObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDSpring_9595RedObjects1[i].activateBehavior("Draggable", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDSpring_9595GreenObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDSpring_9595GreenObjects1[i].activateBehavior("Draggable", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDBlock_9595RedObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBlock_9595RedObjects1[i].activateBehavior("Draggable", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDBlock_9595GreenObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBlock_9595GreenObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDTriangle_9595RedObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTriangle_9595RedObjects1[i].getBehavior("MultiplayerObject").enableBehaviorSynchronization("Draggable", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects1[i].getBehavior("MultiplayerObject").enableBehaviorSynchronization("Draggable", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDTriangle_9595GreenObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTriangle_9595GreenObjects1[i].getBehavior("MultiplayerObject").enableBehaviorSynchronization("Draggable", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDRightTriangle_9595RedObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDRightTriangle_9595RedObjects1[i].getBehavior("MultiplayerObject").enableBehaviorSynchronization("Draggable", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDSpring_9595RedObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDSpring_9595RedObjects1[i].getBehavior("MultiplayerObject").enableBehaviorSynchronization("Draggable", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDSpring_9595GreenObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDSpring_9595GreenObjects1[i].getBehavior("MultiplayerObject").enableBehaviorSynchronization("Draggable", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDBlock_9595RedObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBlock_9595RedObjects1[i].getBehavior("MultiplayerObject").enableBehaviorSynchronization("Draggable", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDBlock_9595GreenObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBlock_9595GreenObjects1[i].getBehavior("MultiplayerObject").enableBehaviorSynchronization("Draggable", false);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.getPlayersInLobbyCount() < runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber();
if (isConditionTrue_0) {
{gdjs.multiplayer.endLobbyGame();
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.hasLobbyGameJustEnded();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lobby", false);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.getCurrentPlayerNumber() == 1;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.getCurrentPlayerNumber() == 2;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.GameSceneCode.GDStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDStartObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDStartObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDStartObjects1[k] = gdjs.GameSceneCode.GDStartObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDStartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DirectionalArrowFullCircle"), gdjs.GameSceneCode.GDDirectionalArrowFullCircleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDDirectionalArrowFullCircleObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDDirectionalArrowFullCircleObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDDirectionalArrowFullCircleObjects1[k] = gdjs.GameSceneCode.GDDirectionalArrowFullCircleObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDDirectionalArrowFullCircleObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9979156);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameSceneCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Block_Green"), gdjs.GameSceneCode.GDBlock_9595GreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Block_Red"), gdjs.GameSceneCode.GDBlock_9595RedObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightTriangle_Green"), gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightTriangle_Red"), gdjs.GameSceneCode.GDRightTriangle_9595RedObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spring_Green"), gdjs.GameSceneCode.GDSpring_9595GreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spring_Red"), gdjs.GameSceneCode.GDSpring_9595RedObjects1);
gdjs.copyArray(runtimeScene.getObjects("Triangle_Green"), gdjs.GameSceneCode.GDTriangle_9595GreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Triangle_Red"), gdjs.GameSceneCode.GDTriangle_9595RedObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBallObjects1[i].setPosition(gdjs.GameSceneCode.GDBallObjects1[i].getVariables().getFromIndex(0).getAsNumber(),gdjs.GameSceneCode.GDBallObjects1[i].getVariables().getFromIndex(1).getAsNumber());
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBallObjects1[i].activateBehavior("Physics2", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDTriangle_9595RedObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTriangle_9595RedObjects1[i].activateBehavior("Physics2", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDRightTriangle_9595RedObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDRightTriangle_9595RedObjects1[i].activateBehavior("Physics2", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects1[i].activateBehavior("Physics2", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDTriangle_9595GreenObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTriangle_9595GreenObjects1[i].activateBehavior("Physics2", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDBlock_9595GreenObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBlock_9595GreenObjects1[i].activateBehavior("Physics2", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDBlock_9595RedObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBlock_9595RedObjects1[i].activateBehavior("Physics2", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDSpring_9595GreenObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDSpring_9595GreenObjects1[i].activateBehavior("Physics2", false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDSpring_9595RedObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDSpring_9595RedObjects1[i].activateBehavior("Physics2", false);
}
}
{ //Subevents
gdjs.GameSceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9982940);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameSceneCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Block_Green"), gdjs.GameSceneCode.GDBlock_9595GreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Block_Red"), gdjs.GameSceneCode.GDBlock_9595RedObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightTriangle_Green"), gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightTriangle_Red"), gdjs.GameSceneCode.GDRightTriangle_9595RedObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spring_Green"), gdjs.GameSceneCode.GDSpring_9595GreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spring_Red"), gdjs.GameSceneCode.GDSpring_9595RedObjects1);
gdjs.copyArray(runtimeScene.getObjects("Triangle_Green"), gdjs.GameSceneCode.GDTriangle_9595GreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Triangle_Red"), gdjs.GameSceneCode.GDTriangle_9595RedObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBallObjects1[i].activateBehavior("Physics2", true);
}
for(var i = 0, len = gdjs.GameSceneCode.GDTriangle_9595RedObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTriangle_9595RedObjects1[i].activateBehavior("Physics2", true);
}
for(var i = 0, len = gdjs.GameSceneCode.GDRightTriangle_9595RedObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDRightTriangle_9595RedObjects1[i].activateBehavior("Physics2", true);
}
for(var i = 0, len = gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects1[i].activateBehavior("Physics2", true);
}
for(var i = 0, len = gdjs.GameSceneCode.GDTriangle_9595GreenObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTriangle_9595GreenObjects1[i].activateBehavior("Physics2", true);
}
for(var i = 0, len = gdjs.GameSceneCode.GDBlock_9595GreenObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBlock_9595GreenObjects1[i].activateBehavior("Physics2", true);
}
for(var i = 0, len = gdjs.GameSceneCode.GDBlock_9595RedObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBlock_9595RedObjects1[i].activateBehavior("Physics2", true);
}
for(var i = 0, len = gdjs.GameSceneCode.GDSpring_9595GreenObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDSpring_9595GreenObjects1[i].activateBehavior("Physics2", true);
}
for(var i = 0, len = gdjs.GameSceneCode.GDSpring_9595RedObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDSpring_9595RedObjects1[i].activateBehavior("Physics2", true);
}
}
{ //Subevents
gdjs.GameSceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameSceneCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spring_Green"), gdjs.GameSceneCode.GDSpring_9595GreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spring_Red"), gdjs.GameSceneCode.GDSpring_9595RedObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBallObjects1Objects, "Physics2", gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDSpring_95959595RedObjects1ObjectsGDgdjs_9546GameSceneCode_9546GDSpring_95959595GreenObjects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9986492);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDBallObjects1 */
/* Reuse gdjs.GameSceneCode.GDSpring_9595GreenObjects1 */
/* Reuse gdjs.GameSceneCode.GDSpring_9595RedObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBallObjects1[i].getBehavior("Physics2").applyPolarForce((gdjs.GameSceneCode.GDBallObjects1[i].getAngleToObject((gdjs.GameSceneCode.GDSpring_9595RedObjects1.length !== 0 ? gdjs.GameSceneCode.GDSpring_9595RedObjects1[0] : (gdjs.GameSceneCode.GDSpring_9595GreenObjects1.length !== 0 ? gdjs.GameSceneCode.GDSpring_9595GreenObjects1[0] : null)))) - 180, 50, (gdjs.GameSceneCode.GDBallObjects1[i].getCenterXInScene()), (gdjs.GameSceneCode.GDBallObjects1[i].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDSpring_9595RedObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDSpring_9595RedObjects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.25, 0, 0, 0, 25, 0.125, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.GameSceneCode.GDSpring_9595GreenObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDSpring_9595GreenObjects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.25, 0, 0, 0, 25, 0.125, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Explosion", false, 100, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameSceneCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("LargeHole"), gdjs.GameSceneCode.GDLargeHoleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBallObjects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDLargeHoleObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9988540);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDBallObjects1 */
/* Reuse gdjs.GameSceneCode.GDLargeHoleObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBallObjects1[i].activateBehavior("Physics2", false);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBallObjects1[i].getBehavior("Tween").addObjectPositionTween2("Center", (( gdjs.GameSceneCode.GDLargeHoleObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDLargeHoleObjects1[0].getCenterXInScene()), (( gdjs.GameSceneCode.GDLargeHoleObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDLargeHoleObjects1[0].getCenterYInScene()), "easeOutQuad", 0.5, false);
}
}
{ //Subevents
gdjs.GameSceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameSceneCode.GDBallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDBallObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDBallObjects1[i].getBehavior("Tween").exists("Center") ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDBallObjects1[k] = gdjs.GameSceneCode.GDBallObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDBallObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9990316);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList7(runtimeScene);} //End of subevents
}

}


};

gdjs.GameSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameSceneCode.GDBallObjects1.length = 0;
gdjs.GameSceneCode.GDBallObjects2.length = 0;
gdjs.GameSceneCode.GDBallObjects3.length = 0;
gdjs.GameSceneCode.GDBallObjects4.length = 0;
gdjs.GameSceneCode.GDLargeHoleObjects1.length = 0;
gdjs.GameSceneCode.GDLargeHoleObjects2.length = 0;
gdjs.GameSceneCode.GDLargeHoleObjects3.length = 0;
gdjs.GameSceneCode.GDLargeHoleObjects4.length = 0;
gdjs.GameSceneCode.GDDirectionalArrowFullCircleObjects1.length = 0;
gdjs.GameSceneCode.GDDirectionalArrowFullCircleObjects2.length = 0;
gdjs.GameSceneCode.GDDirectionalArrowFullCircleObjects3.length = 0;
gdjs.GameSceneCode.GDDirectionalArrowFullCircleObjects4.length = 0;
gdjs.GameSceneCode.GDStartObjects1.length = 0;
gdjs.GameSceneCode.GDStartObjects2.length = 0;
gdjs.GameSceneCode.GDStartObjects3.length = 0;
gdjs.GameSceneCode.GDStartObjects4.length = 0;
gdjs.GameSceneCode.GDMouseCursor_9595Player1Objects1.length = 0;
gdjs.GameSceneCode.GDMouseCursor_9595Player1Objects2.length = 0;
gdjs.GameSceneCode.GDMouseCursor_9595Player1Objects3.length = 0;
gdjs.GameSceneCode.GDMouseCursor_9595Player1Objects4.length = 0;
gdjs.GameSceneCode.GDMouseCursor_9595Player2Objects1.length = 0;
gdjs.GameSceneCode.GDMouseCursor_9595Player2Objects2.length = 0;
gdjs.GameSceneCode.GDMouseCursor_9595Player2Objects3.length = 0;
gdjs.GameSceneCode.GDMouseCursor_9595Player2Objects4.length = 0;
gdjs.GameSceneCode.GDSpring_9595RedObjects1.length = 0;
gdjs.GameSceneCode.GDSpring_9595RedObjects2.length = 0;
gdjs.GameSceneCode.GDSpring_9595RedObjects3.length = 0;
gdjs.GameSceneCode.GDSpring_9595RedObjects4.length = 0;
gdjs.GameSceneCode.GDSpring_9595GreenObjects1.length = 0;
gdjs.GameSceneCode.GDSpring_9595GreenObjects2.length = 0;
gdjs.GameSceneCode.GDSpring_9595GreenObjects3.length = 0;
gdjs.GameSceneCode.GDSpring_9595GreenObjects4.length = 0;
gdjs.GameSceneCode.GDBlock_9595RedObjects1.length = 0;
gdjs.GameSceneCode.GDBlock_9595RedObjects2.length = 0;
gdjs.GameSceneCode.GDBlock_9595RedObjects3.length = 0;
gdjs.GameSceneCode.GDBlock_9595RedObjects4.length = 0;
gdjs.GameSceneCode.GDBlock_9595GreenObjects1.length = 0;
gdjs.GameSceneCode.GDBlock_9595GreenObjects2.length = 0;
gdjs.GameSceneCode.GDBlock_9595GreenObjects3.length = 0;
gdjs.GameSceneCode.GDBlock_9595GreenObjects4.length = 0;
gdjs.GameSceneCode.GDTriangle_9595GreenObjects1.length = 0;
gdjs.GameSceneCode.GDTriangle_9595GreenObjects2.length = 0;
gdjs.GameSceneCode.GDTriangle_9595GreenObjects3.length = 0;
gdjs.GameSceneCode.GDTriangle_9595GreenObjects4.length = 0;
gdjs.GameSceneCode.GDRightTriangle_9595RedObjects1.length = 0;
gdjs.GameSceneCode.GDRightTriangle_9595RedObjects2.length = 0;
gdjs.GameSceneCode.GDRightTriangle_9595RedObjects3.length = 0;
gdjs.GameSceneCode.GDRightTriangle_9595RedObjects4.length = 0;
gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects1.length = 0;
gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects2.length = 0;
gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects3.length = 0;
gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects4.length = 0;
gdjs.GameSceneCode.GDTriangle_9595RedObjects1.length = 0;
gdjs.GameSceneCode.GDTriangle_9595RedObjects2.length = 0;
gdjs.GameSceneCode.GDTriangle_9595RedObjects3.length = 0;
gdjs.GameSceneCode.GDTriangle_9595RedObjects4.length = 0;
gdjs.GameSceneCode.GDBlock_9595BlackObjects1.length = 0;
gdjs.GameSceneCode.GDBlock_9595BlackObjects2.length = 0;
gdjs.GameSceneCode.GDBlock_9595BlackObjects3.length = 0;
gdjs.GameSceneCode.GDBlock_9595BlackObjects4.length = 0;
gdjs.GameSceneCode.GDLevelObjects1.length = 0;
gdjs.GameSceneCode.GDLevelObjects2.length = 0;
gdjs.GameSceneCode.GDLevelObjects3.length = 0;
gdjs.GameSceneCode.GDLevelObjects4.length = 0;
gdjs.GameSceneCode.GDBrownBackgroundObjects1.length = 0;
gdjs.GameSceneCode.GDBrownBackgroundObjects2.length = 0;
gdjs.GameSceneCode.GDBrownBackgroundObjects3.length = 0;
gdjs.GameSceneCode.GDBrownBackgroundObjects4.length = 0;
gdjs.GameSceneCode.GDBlueBackgroundObjects1.length = 0;
gdjs.GameSceneCode.GDBlueBackgroundObjects2.length = 0;
gdjs.GameSceneCode.GDBlueBackgroundObjects3.length = 0;
gdjs.GameSceneCode.GDBlueBackgroundObjects4.length = 0;
gdjs.GameSceneCode.GDGreenBackgroundObjects1.length = 0;
gdjs.GameSceneCode.GDGreenBackgroundObjects2.length = 0;
gdjs.GameSceneCode.GDGreenBackgroundObjects3.length = 0;
gdjs.GameSceneCode.GDGreenBackgroundObjects4.length = 0;
gdjs.GameSceneCode.GDPlayerColorObjects1.length = 0;
gdjs.GameSceneCode.GDPlayerColorObjects2.length = 0;
gdjs.GameSceneCode.GDPlayerColorObjects3.length = 0;
gdjs.GameSceneCode.GDPlayerColorObjects4.length = 0;

gdjs.GameSceneCode.eventsList8(runtimeScene);
gdjs.GameSceneCode.GDBallObjects1.length = 0;
gdjs.GameSceneCode.GDBallObjects2.length = 0;
gdjs.GameSceneCode.GDBallObjects3.length = 0;
gdjs.GameSceneCode.GDBallObjects4.length = 0;
gdjs.GameSceneCode.GDLargeHoleObjects1.length = 0;
gdjs.GameSceneCode.GDLargeHoleObjects2.length = 0;
gdjs.GameSceneCode.GDLargeHoleObjects3.length = 0;
gdjs.GameSceneCode.GDLargeHoleObjects4.length = 0;
gdjs.GameSceneCode.GDDirectionalArrowFullCircleObjects1.length = 0;
gdjs.GameSceneCode.GDDirectionalArrowFullCircleObjects2.length = 0;
gdjs.GameSceneCode.GDDirectionalArrowFullCircleObjects3.length = 0;
gdjs.GameSceneCode.GDDirectionalArrowFullCircleObjects4.length = 0;
gdjs.GameSceneCode.GDStartObjects1.length = 0;
gdjs.GameSceneCode.GDStartObjects2.length = 0;
gdjs.GameSceneCode.GDStartObjects3.length = 0;
gdjs.GameSceneCode.GDStartObjects4.length = 0;
gdjs.GameSceneCode.GDMouseCursor_9595Player1Objects1.length = 0;
gdjs.GameSceneCode.GDMouseCursor_9595Player1Objects2.length = 0;
gdjs.GameSceneCode.GDMouseCursor_9595Player1Objects3.length = 0;
gdjs.GameSceneCode.GDMouseCursor_9595Player1Objects4.length = 0;
gdjs.GameSceneCode.GDMouseCursor_9595Player2Objects1.length = 0;
gdjs.GameSceneCode.GDMouseCursor_9595Player2Objects2.length = 0;
gdjs.GameSceneCode.GDMouseCursor_9595Player2Objects3.length = 0;
gdjs.GameSceneCode.GDMouseCursor_9595Player2Objects4.length = 0;
gdjs.GameSceneCode.GDSpring_9595RedObjects1.length = 0;
gdjs.GameSceneCode.GDSpring_9595RedObjects2.length = 0;
gdjs.GameSceneCode.GDSpring_9595RedObjects3.length = 0;
gdjs.GameSceneCode.GDSpring_9595RedObjects4.length = 0;
gdjs.GameSceneCode.GDSpring_9595GreenObjects1.length = 0;
gdjs.GameSceneCode.GDSpring_9595GreenObjects2.length = 0;
gdjs.GameSceneCode.GDSpring_9595GreenObjects3.length = 0;
gdjs.GameSceneCode.GDSpring_9595GreenObjects4.length = 0;
gdjs.GameSceneCode.GDBlock_9595RedObjects1.length = 0;
gdjs.GameSceneCode.GDBlock_9595RedObjects2.length = 0;
gdjs.GameSceneCode.GDBlock_9595RedObjects3.length = 0;
gdjs.GameSceneCode.GDBlock_9595RedObjects4.length = 0;
gdjs.GameSceneCode.GDBlock_9595GreenObjects1.length = 0;
gdjs.GameSceneCode.GDBlock_9595GreenObjects2.length = 0;
gdjs.GameSceneCode.GDBlock_9595GreenObjects3.length = 0;
gdjs.GameSceneCode.GDBlock_9595GreenObjects4.length = 0;
gdjs.GameSceneCode.GDTriangle_9595GreenObjects1.length = 0;
gdjs.GameSceneCode.GDTriangle_9595GreenObjects2.length = 0;
gdjs.GameSceneCode.GDTriangle_9595GreenObjects3.length = 0;
gdjs.GameSceneCode.GDTriangle_9595GreenObjects4.length = 0;
gdjs.GameSceneCode.GDRightTriangle_9595RedObjects1.length = 0;
gdjs.GameSceneCode.GDRightTriangle_9595RedObjects2.length = 0;
gdjs.GameSceneCode.GDRightTriangle_9595RedObjects3.length = 0;
gdjs.GameSceneCode.GDRightTriangle_9595RedObjects4.length = 0;
gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects1.length = 0;
gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects2.length = 0;
gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects3.length = 0;
gdjs.GameSceneCode.GDRightTriangle_9595GreenObjects4.length = 0;
gdjs.GameSceneCode.GDTriangle_9595RedObjects1.length = 0;
gdjs.GameSceneCode.GDTriangle_9595RedObjects2.length = 0;
gdjs.GameSceneCode.GDTriangle_9595RedObjects3.length = 0;
gdjs.GameSceneCode.GDTriangle_9595RedObjects4.length = 0;
gdjs.GameSceneCode.GDBlock_9595BlackObjects1.length = 0;
gdjs.GameSceneCode.GDBlock_9595BlackObjects2.length = 0;
gdjs.GameSceneCode.GDBlock_9595BlackObjects3.length = 0;
gdjs.GameSceneCode.GDBlock_9595BlackObjects4.length = 0;
gdjs.GameSceneCode.GDLevelObjects1.length = 0;
gdjs.GameSceneCode.GDLevelObjects2.length = 0;
gdjs.GameSceneCode.GDLevelObjects3.length = 0;
gdjs.GameSceneCode.GDLevelObjects4.length = 0;
gdjs.GameSceneCode.GDBrownBackgroundObjects1.length = 0;
gdjs.GameSceneCode.GDBrownBackgroundObjects2.length = 0;
gdjs.GameSceneCode.GDBrownBackgroundObjects3.length = 0;
gdjs.GameSceneCode.GDBrownBackgroundObjects4.length = 0;
gdjs.GameSceneCode.GDBlueBackgroundObjects1.length = 0;
gdjs.GameSceneCode.GDBlueBackgroundObjects2.length = 0;
gdjs.GameSceneCode.GDBlueBackgroundObjects3.length = 0;
gdjs.GameSceneCode.GDBlueBackgroundObjects4.length = 0;
gdjs.GameSceneCode.GDGreenBackgroundObjects1.length = 0;
gdjs.GameSceneCode.GDGreenBackgroundObjects2.length = 0;
gdjs.GameSceneCode.GDGreenBackgroundObjects3.length = 0;
gdjs.GameSceneCode.GDGreenBackgroundObjects4.length = 0;
gdjs.GameSceneCode.GDPlayerColorObjects1.length = 0;
gdjs.GameSceneCode.GDPlayerColorObjects2.length = 0;
gdjs.GameSceneCode.GDPlayerColorObjects3.length = 0;
gdjs.GameSceneCode.GDPlayerColorObjects4.length = 0;


return;

}

gdjs['GameSceneCode'] = gdjs.GameSceneCode;
