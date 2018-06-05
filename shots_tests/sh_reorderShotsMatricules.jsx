﻿var comp = app.project.activeItem;var targetName = "SHOT_";var separ = "_";function shotNameNum (shNum){     if (parseInt(shNum)<100) {            shNum= "00"+(shNum);         }     else if (shNum<1000) {         shNum= "0"+(shNum);         }     return shNum    }function extractMatricule (shot){    var mat = shot.substring (0, shot.lastIndexOf("_"));    mat = mat.substring (mat.indexOf("_")+1);    return mat    }function extractVersion (shot){    var vers = shot.substr (shot .lastIndexOf("_")+1);    return vers;    }function renameItemFromLayer (layerIndex, newName){    var id = app.project.activeItem.layer(layerIndex).source.id;    var item = app.project.itemByID (id);    item.name = newName;    app.project.activeItem.layer(layerIndex).name = newName;    }if (comp){    app.beginUndoGroup("shot")    var ShotsArray = [];    for (var i=comp.numLayers; i>= 1; i--){        try{            if (comp.layer(i).source.name.indexOf (targetName) !=-1){                var layerClass= {};                layerClass.version = extractVersion (comp.layer(i).source.name);                layerClass.index = i;                ShotsArray.push (layerClass)                }            }        catch (e){continue}                        }    try{        for (var i=0; i< ShotsArray.length; i++){            var matVal= (i+1)*10            var newMat =shotNameNum(matVal);            comp.layer(ShotsArray[i].index).name =  targetName+ newMat +separ+ ShotsArray[i].version;            }        }    catch(e) {continue}        for (var i=1; i<= comp.numLayers; i++){        if (comp.layer(i).name.indexOf (targetName) !=-1){            var newName = comp.layer(i).name;            renameItemFromLayer (i, newName)            }        }     app.endundoGroup;  }