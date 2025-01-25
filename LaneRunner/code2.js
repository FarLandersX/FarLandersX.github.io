gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.localVariables = [];
gdjs.LeaderboardCode.GDScoreLabelObjects1= [];
gdjs.LeaderboardCode.GDScoreLabelObjects2= [];
gdjs.LeaderboardCode.GDScoreLabelObjects3= [];
gdjs.LeaderboardCode.GDPlayerNameInputObjects1= [];
gdjs.LeaderboardCode.GDPlayerNameInputObjects2= [];
gdjs.LeaderboardCode.GDPlayerNameInputObjects3= [];
gdjs.LeaderboardCode.GDSubmitButtonObjects1= [];
gdjs.LeaderboardCode.GDSubmitButtonObjects2= [];
gdjs.LeaderboardCode.GDSubmitButtonObjects3= [];
gdjs.LeaderboardCode.GDRestartButtonObjects1= [];
gdjs.LeaderboardCode.GDRestartButtonObjects2= [];
gdjs.LeaderboardCode.GDRestartButtonObjects3= [];
gdjs.LeaderboardCode.GDPanelObjects1= [];
gdjs.LeaderboardCode.GDPanelObjects2= [];
gdjs.LeaderboardCode.GDPanelObjects3= [];
gdjs.LeaderboardCode.GDStarObjects1= [];
gdjs.LeaderboardCode.GDStarObjects2= [];
gdjs.LeaderboardCode.GDStarObjects3= [];


gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDPanelObjects1Objects = Hashtable.newFrom({"Panel": gdjs.LeaderboardCode.GDPanelObjects1});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDPanelObjects1Objects = Hashtable.newFrom({"Panel": gdjs.LeaderboardCode.GDPanelObjects1});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDPanelObjects1Objects = Hashtable.newFrom({"Panel": gdjs.LeaderboardCode.GDPanelObjects1});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDPanelObjects1Objects = Hashtable.newFrom({"Panel": gdjs.LeaderboardCode.GDPanelObjects1});
gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.isAuthenticated();
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.LeaderboardCode.GDPlayerNameInputObjects1, gdjs.LeaderboardCode.GDPlayerNameInputObjects2);

{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerNameInputObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerNameInputObjects2[i].getBehavior("Text").setText(gdjs.playerAuthentication.getUsername());
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerNameInputObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerNameInputObjects2[i].setDisabled(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.playerAuthentication.isAuthenticated());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) != "0";
}
if (isConditionTrue_0) {
/* Reuse gdjs.LeaderboardCode.GDPlayerNameInputObjects1 */
{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerNameInputObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


};gdjs.LeaderboardCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.isAuthenticated();
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.saveConnectedPlayerScore(runtimeScene, "2392ae63-5ed6-4d1b-9ca5-157d64602a81", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.playerAuthentication.isAuthenticated());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.LeaderboardCode.GDPlayerNameInputObjects2);
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "2392ae63-5ed6-4d1b-9ca5-157d64602a81", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), (( gdjs.LeaderboardCode.GDPlayerNameInputObjects2.length === 0 ) ? "" :gdjs.LeaderboardCode.GDPlayerNameInputObjects2[0].getText()));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString((( gdjs.LeaderboardCode.GDPlayerNameInputObjects2.length === 0 ) ? "" :gdjs.LeaderboardCode.GDPlayerNameInputObjects2[0].getText()));
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "2392ae63-5ed6-4d1b-9ca5-157d64602a81", true);
}}

}


};gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDStarObjects3Objects = Hashtable.newFrom({"Star": gdjs.LeaderboardCode.GDStarObjects3});
gdjs.LeaderboardCode.eventsList2 = function(runtimeScene) {

};gdjs.LeaderboardCode.eventsList3 = function(runtimeScene) {

{


const repeatCount3 = 100;
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {
gdjs.LeaderboardCode.GDStarObjects3.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDStarObjects3Objects, gdjs.randomInRange(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraBorderRight(runtimeScene, "", 0)), gdjs.randomInRange(-(500) + gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) + 500), "3D");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDStarObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDStarObjects3[i].returnVariable(gdjs.LeaderboardCode.GDStarObjects3[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomFloatInRange(20, 45));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDStarObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDStarObjects3[i].returnVariable(gdjs.LeaderboardCode.GDStarObjects3[i].getVariables().getFromIndex(1)).setNumber(gdjs.randomFloatInRange(20, 45));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDStarObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDStarObjects3[i].returnVariable(gdjs.LeaderboardCode.GDStarObjects3[i].getVariables().getFromIndex(2)).setNumber(gdjs.randomFloatInRange(20, 45));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDStarObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDStarObjects3[i].addForce(0, 200, 1);
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDStarObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDStarObjects3[i].getBehavior("Object3D").setZ(gdjs.randomFloatInRange(-(1000), -(32)));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDStarObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDStarObjects3[i].getBehavior("Object3D").setRotationX(gdjs.randomFloat(360));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDStarObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDStarObjects3[i].getBehavior("Object3D").setRotationY(gdjs.randomFloat(360));
}
}}
}

}


};gdjs.LeaderboardCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs.LeaderboardCode.GDStarObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDStarObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDStarObjects1[i].getBehavior("Object3D").setRotationX(gdjs.LeaderboardCode.GDStarObjects1[i].getBehavior("Object3D").getRotationX() + (gdjs.LeaderboardCode.GDStarObjects1[i].getVariables().getFromIndex(0).getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDStarObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDStarObjects1[i].getBehavior("Object3D").setRotationY(gdjs.LeaderboardCode.GDStarObjects1[i].getBehavior("Object3D").getRotationY() + (gdjs.LeaderboardCode.GDStarObjects1[i].getVariables().getFromIndex(1).getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDStarObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDStarObjects1[i].setAngle(gdjs.LeaderboardCode.GDStarObjects1[i].getAngle() + (gdjs.LeaderboardCode.GDStarObjects1[i].getVariables().getFromIndex(2).getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


};gdjs.LeaderboardCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Panel"), gdjs.LeaderboardCode.GDPanelObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.LeaderboardCode.GDPlayerNameInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.LeaderboardCode.GDRestartButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreLabel"), gdjs.LeaderboardCode.GDScoreLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.LeaderboardCode.GDSubmitButtonObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDScoreLabelObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScoreLabelObjects1[i].getBehavior("Text").setText("Score: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScoreLabelObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScoreLabelObjects1[i].getBehavior("Sticker").Stick(gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDPanelObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerNameInputObjects1[i].getBehavior("Sticker").Stick(gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDPanelObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.LeaderboardCode.GDSubmitButtonObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDSubmitButtonObjects1[i].getBehavior("Sticker").Stick(gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDPanelObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.LeaderboardCode.GDRestartButtonObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDRestartButtonObjects1[i].getBehavior("Sticker").Stick(gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDPanelObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.LeaderboardCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Panel"), gdjs.LeaderboardCode.GDPanelObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDPanelObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPanelObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.hasLoggedIn();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.LeaderboardCode.GDPlayerNameInputObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerNameInputObjects1[i].getBehavior("Text").setText(gdjs.playerAuthentication.getUsername());
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerNameInputObjects1[i].setDisabled(true);
}
}{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.isLeaderboardViewErrored();
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.LeaderboardCode.GDRestartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDRestartButtonObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDRestartButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDRestartButtonObjects1[k] = gdjs.LeaderboardCode.GDRestartButtonObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDRestartButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.LeaderboardCode.GDSubmitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDSubmitButtonObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDSubmitButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDSubmitButtonObjects1[k] = gdjs.LeaderboardCode.GDSubmitButtonObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDSubmitButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasPlayerJustClosedLeaderboardView();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasBeenSaved("2392ae63-5ed6-4d1b-9ca5-157d64602a81");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{


gdjs.LeaderboardCode.eventsList4(runtimeScene);
}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDScoreLabelObjects1.length = 0;
gdjs.LeaderboardCode.GDScoreLabelObjects2.length = 0;
gdjs.LeaderboardCode.GDScoreLabelObjects3.length = 0;
gdjs.LeaderboardCode.GDPlayerNameInputObjects1.length = 0;
gdjs.LeaderboardCode.GDPlayerNameInputObjects2.length = 0;
gdjs.LeaderboardCode.GDPlayerNameInputObjects3.length = 0;
gdjs.LeaderboardCode.GDSubmitButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDSubmitButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDSubmitButtonObjects3.length = 0;
gdjs.LeaderboardCode.GDRestartButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDRestartButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDRestartButtonObjects3.length = 0;
gdjs.LeaderboardCode.GDPanelObjects1.length = 0;
gdjs.LeaderboardCode.GDPanelObjects2.length = 0;
gdjs.LeaderboardCode.GDPanelObjects3.length = 0;
gdjs.LeaderboardCode.GDStarObjects1.length = 0;
gdjs.LeaderboardCode.GDStarObjects2.length = 0;
gdjs.LeaderboardCode.GDStarObjects3.length = 0;

gdjs.LeaderboardCode.eventsList5(runtimeScene);
gdjs.LeaderboardCode.GDScoreLabelObjects1.length = 0;
gdjs.LeaderboardCode.GDScoreLabelObjects2.length = 0;
gdjs.LeaderboardCode.GDScoreLabelObjects3.length = 0;
gdjs.LeaderboardCode.GDPlayerNameInputObjects1.length = 0;
gdjs.LeaderboardCode.GDPlayerNameInputObjects2.length = 0;
gdjs.LeaderboardCode.GDPlayerNameInputObjects3.length = 0;
gdjs.LeaderboardCode.GDSubmitButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDSubmitButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDSubmitButtonObjects3.length = 0;
gdjs.LeaderboardCode.GDRestartButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDRestartButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDRestartButtonObjects3.length = 0;
gdjs.LeaderboardCode.GDPanelObjects1.length = 0;
gdjs.LeaderboardCode.GDPanelObjects2.length = 0;
gdjs.LeaderboardCode.GDPanelObjects3.length = 0;
gdjs.LeaderboardCode.GDStarObjects1.length = 0;
gdjs.LeaderboardCode.GDStarObjects2.length = 0;
gdjs.LeaderboardCode.GDStarObjects3.length = 0;


return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
