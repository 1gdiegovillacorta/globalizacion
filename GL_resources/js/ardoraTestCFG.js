//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#C4ECEE"; colorButton="#D6DC61"; colorText="#000000"; colorSele="#3FD728";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="'Arial Black', Gadget, sans-serif";
var timeOnMessage=5; messageOk="Felicidades!!!"; messageTime="Se acabo el tiempo, lo siento"; messageError="error"; messageErrorG="error"; messageAttempts="No tienes mas intentos, lo siento"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="R0w="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["¿Que es la globalizacion?","¿Como puede afectar la globalizacion?","¿Que impacto a causado la globalizacion?","¿Cuál es el futuro de la globalización?","¿Qué ha conducido a una mayor globalización?"];
var answers1=["MUVzIHVuIGZlbsOzbWVubyBiYXNhZG8gZW4gZWwgYXVtZW50byBjb250aW51byBkZSBsYSBpbnRlcmNvbmV4acOzbiBlbnRyZSBsYXMgZGlmZXJlbnRlcyBuYWNpb25lcyBkZWwgbXVuZG8gZW4gZWwgcGxhbm8gZWNvbsOzbWljbywgcG9sw610aWNvLCBzb2NpYWwgeSB0ZWNub2zDs2dpY28u","MENpZW5jaWEgcXVlIGVzdHVkaWEgbG9zIHJlY3Vyc29zLCBsYSBjcmVhY2nDs24gZGUgcmlxdWV6YSB5IGxhIHByb2R1Y2Npw7NuLCBkaXN0cmlidWNpw7NuIHkgY29uc3VtbyBkZSBiaWVuZXMgeSBzZXJ2aWNpb3MsIHBhcmEgc2F0aXNmYWNlciBsYXMgbmVjZXNpZGFkZXMgaHVtYW5hcw=="];
var answers2=["MUxhIGV4cGxvdGFjacOzbiBkZSBhbGd1bm9zIHJlY3Vyc29zIGNvbW8gbGEgbWFubyBkZSBvYnJhIGJhcmF0YSB5IGxhcyBtYXRlcmlhcyBwcmltYXMgZGUgcGHDrXNlcyBtw6FzIHBvYnJlcw==","MEludGVncmFjacOzbiB5IGZhY2lsaWRhZCBkZSBsYXMgY29tdW5pY2FjaW9uZXMsIGxpYnJlIG1vdmltaWVudG8gZGUgbWVyY2FuY8OtYXMgbyBleHRlbnNpw7NuIGRlIGxvcyBkZXJlY2hvcyBodW1hbm9zLg==","MExpYnJlIGNvbWVyY2lvIGRlIGJpZW5lcyB5IHNlcnZpY2lvcyBhIG5pdmVsIG11bmRpYWw="];
var answers3=["MUhhIGRlc2Fycm9sbGFkbyBsYSBsaWJlcnRhZCBlY29uw7NtaWNhIHkgc3VwdWVzdGFtZW50ZSBoYSBlbGV2YWRvIGVsIG5pdmVsIGRlIHZpZGEgZGUgdG9kbyBlbCBtdW5kbywgaW5jbHVzbyBlbiBlbCBjYXNvIGRlIHF1ZSwgZW4gdMOpcm1pbm9zIHJlbGF0aXZvcywgbGEgYnJlY2hhIGVudHJlIHJpY29zIHkgcG9icmVzIHNlYSBjYWRhIHZleiBtYXlvci4=","MEF5dWRvIGEgbGFzIHBlcnNvbmFzIHJpY2Fz","MFByb3BvcmNpb25vIG1lbm9zIGRpbmVybw=="];
var answers4=["MUhhIGltcHVsc2FkbyBhIGxhcyBlbXByZXNhcyBhIGRpc2XDsWFyIGUgaW1wbGVtZW50YXIgZXN0cmF0ZWdpYXMgZGUgbmVnb2NpbyBkZXN0aW5hZGFzIGEgYXByb3ZlY2hhciBsYSBjb21wZXRpdGl2aWRhZCBkZSBjYWRhIHJlZ2nDs24sIGFqdXN0YW5kbyB5IGFkYXB0YW5kbyBlbCB2YWxvciBkZSBzdXMgY2FkZW5hcyBkZSBzdW1pbmlzdHJvIGEgbml2ZWwgcHJvZHVjdGl2bywgY29tZXJjaWFsIHkgZGUgaW52ZXJzacOzbi4=","MENhZXI=","MFNlciBkZSBtYXlvciBheXVkYQ=="];
var answers5=["MUVsIGNyZWNpbWllbnRvIGRlbCBjb21lcmNpbyBpbnRlcm5hY2lvbmFsIGRlIGJpZW5lcyB5IHNlcnZpY2lvcyBhIGFsdG8gcml0bW8=","MExhcyBwZXJzb25hcyByaWNhcw==","MExvcyBkZXBvcnRlcw=="];
var ans=[answers1,answers2,answers3,answers4,answers5];
var err=["incorrecto","incorrecto","incorrecto","incorrecto","incorrecto"];
var ima=["","","","",""];
var mp4=["","","","",""];
var ogv=["","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="GL_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
