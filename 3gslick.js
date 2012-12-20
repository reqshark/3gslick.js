/*!	3G Streamer, a.k.a. 3gslick.js - v0.0.1 - 2012-12-20
*	http://cloudkickr.com
*	documentation and github repo: 
*	Info on iOS mobile console go to 'http://developer.apple.com/library/safari/#documentation/AppleApplications/Reference/SafariWebContent/DebuggingSafarioniPhoneContent/DebuggingSafarioniPhoneContent.html#//apple_ref/doc/uid/TP40006515-SW11'
*	Copyright (c) 2013 Bent Cardan; bent@cloudkickr.com; Licensed MIT */
 
var spn=$("video").attr("src"); //select HTML5 'video' element, or select child--the 'source' element--to get src video attribute string.
 
console.log("original attribute path: "+spn);  //Optional. Test src string in console.log. If src undefined, try source element to get src attr.
 
var mspn=spn+"mobile.mp4";	//concatenate 'mobile.mp4' to end of src string.
 
function detectmob(){if(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)){
 
$("video").removeAttr("src"); //remove src attribute from video element if mobile device.
 
$("video").attr("src",mspn); //once src cleared, now we can set mobile src, stored from mspn variable.
 
}}
 
detectmob(); //execute detectmobile function.
 
var cav=$("video").attr("src");console.log("currrent attribute path value is: "+cav); //test mobile device console to confirm mobile src attr. boom! done!