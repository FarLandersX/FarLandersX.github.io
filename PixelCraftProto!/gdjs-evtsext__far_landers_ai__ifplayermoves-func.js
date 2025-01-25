
if (typeof gdjs.evtsExt__Far_Landers_AI__Ifplayermoves !== "undefined") {
  gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Far_Landers_AI__Ifplayermoves = {};
gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.GDPlayerObjects1= [];
gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.GDPlayerObjects2= [];
gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.GDEmenyObjects1= [];
gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.GDEmenyObjects2= [];


gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.mapOfGDgdjs_9546evtsExt_9595_9595Far_9595Landers_9595AI_9595_9595Ifplayermoves_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.GDPlayerObjects1});
gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.mapOfGDgdjs_9546evtsExt_9595_9595Far_9595Landers_9595AI_9595_9595Ifplayermoves_9546GDEmenyObjects1Objects = Hashtable.newFrom({"Emeny": gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.GDEmenyObjects1});
gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.mapOfGDgdjs_9546evtsExt_9595_9595Far_9595Landers_9595AI_9595_9595Ifplayermoves_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.GDPlayerObjects1});
gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.mapOfGDgdjs_9546evtsExt_9595_9595Far_9595Landers_9595AI_9595_9595Ifplayermoves_9546GDEmenyObjects1Objects = Hashtable.newFrom({"Emeny": gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.GDEmenyObjects1});
gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.GDPlayerObjects1[i].hasNoForces() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.GDPlayerObjects1[k] = gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__PopUp__Alert.func(runtimeScene, "im Gonna get you", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Emeny"), gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.GDEmenyObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.movesTowardTest(gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.mapOfGDgdjs_9546evtsExt_9595_9595Far_9595Landers_9595AI_9595_9595Ifplayermoves_9546GDPlayerObjects1Objects, gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.mapOfGDgdjs_9546evtsExt_9595_9595Far_9595Landers_9595AI_9595_9595Ifplayermoves_9546GDEmenyObjects1Objects, 90, false);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.GDEmenyObjects1 */
/* Reuse gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.GDEmenyObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.GDEmenyObjects1[i].addForceTowardObject((gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.GDPlayerObjects1.length !== 0 ? gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.GDPlayerObjects1[0] : null), 10, 0);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Emeny"), gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.GDEmenyObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.mapOfGDgdjs_9546evtsExt_9595_9595Far_9595Landers_9595AI_9595_9595Ifplayermoves_9546GDPlayerObjects1Objects, gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.mapOfGDgdjs_9546evtsExt_9595_9595Far_9595Landers_9595AI_9595_9595Ifplayermoves_9546GDEmenyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.GDPlayerObjects1[i].hide();
}
}{gdjs.evtsExt__PopUp__Alert.func(runtimeScene, "I got You!", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.func = function(runtimeScene, Player, Emeny, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Player": Player
, "Emeny": Emeny
},
  _objectArraysMap: {
"Player": gdjs.objectsListsToArray(Player)
, "Emeny": gdjs.objectsListsToArray(Emeny)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Far_Landers_AI"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Far_Landers_AI"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.GDPlayerObjects1.length = 0;
gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.GDPlayerObjects2.length = 0;
gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.GDEmenyObjects1.length = 0;
gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.GDEmenyObjects2.length = 0;

gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Far_Landers_AI__Ifplayermoves.registeredGdjsCallbacks = [];