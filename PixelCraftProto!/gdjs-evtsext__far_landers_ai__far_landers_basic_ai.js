
gdjs.evtsExt__Far_Landers_AI__Far_Landers_Basic_AI = gdjs.evtsExt__Far_Landers_AI__Far_Landers_Basic_AI || {};

/**
 * Behavior generated from Ai
 */
gdjs.evtsExt__Far_Landers_AI__Far_Landers_Basic_AI.Far_Landers_Basic_AI = class Far_Landers_Basic_AI extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Far_Landers_AI__Far_Landers_Basic_AI.Far_Landers_Basic_AI.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
  }

  // Properties:
  
}

/**
 * Shared data generated from Ai
 */
gdjs.evtsExt__Far_Landers_AI__Far_Landers_Basic_AI.Far_Landers_Basic_AI.SharedData = class Far_Landers_Basic_AISharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Far_Landers_AI__Far_Landers_Basic_AI.Far_Landers_Basic_AI.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Far_Landers_AI_Far_Landers_Basic_AISharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Far_Landers_AI_Far_Landers_Basic_AISharedData = new gdjs.evtsExt__Far_Landers_AI__Far_Landers_Basic_AI.Far_Landers_Basic_AI.SharedData(
      initialData
    );
  }
  return instanceContainer._Far_Landers_AI_Far_Landers_Basic_AISharedData;
}

// Methods:

gdjs.evtsExt__Far_Landers_AI__Far_Landers_Basic_AI.Far_Landers_Basic_AI.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("Far_Landers_AI::Far_Landers_Basic_AI", gdjs.evtsExt__Far_Landers_AI__Far_Landers_Basic_AI.Far_Landers_Basic_AI);
