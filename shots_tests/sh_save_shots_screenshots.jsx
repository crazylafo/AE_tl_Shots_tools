﻿//has to be execute from the main compositionvar shotName = "SHOTS";var comp = app.project.activeItem;var fsProjFolder = app.project.file.parent.fsName;function getShotsLayers (comp,shotName){    var shotLayers = [];    for (var i =1; i<comp.numLayers; i++){        if (comp.layer(i).name.indexOf (shotName) !=-1){                shotClass = {};                shotClass.index = comp.layer(i).index;                shotClass.id = comp.layer(i).id;                shotClass.name =comp.layer(i).name;                shotClass.inPoint =comp.layer(i).inPoint;                                shotLayers.push (shotClass)            }        }    return shotLayers    }function saveShotasPng (comp, shotClass){     comp.saveFrameToPng(shotClass.inPoint, File(fsProjFolder +"/"+shotClass.name + ".png"));    }if (comp){    var shotsList = getShotsLayers (comp,shotName);    for (var i =0; i< shotsList.length; i++){         saveShotasPng (comp, shotsList[i]);        }       }