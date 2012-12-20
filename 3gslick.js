/*!	3G Streamer, a.k.a. 3gslick.js - v0.0.1 - 2012-12-20
*	http://cloudkickr.com
*	See documentation, jQuery is a dependency. 
*	Info on iOS mobile console go to 'http://developer.apple.com/library/safari/#documentation/AppleApplications/Reference/SafariWebContent/DebuggingSafarioniPhoneContent/DebuggingSafarioniPhoneContent.html#//apple_ref/doc/uid/TP40006515-SW11'
*	Copyright (c) 2013 Bent Cardan; bent@cloudkickr.com; Licensed MIT */
 

// first select HTML5 'video' element, or its child--the 'source' element.
// the idea is to get the video's src attribute string.
var defaultVideoSrc = $('video').attr('src'); 

// Test if we're picking up the src string in the console. 
// If src is undefined, try selecting the 'source' element to get a path & filename.
console.log('original src path: ' + defaultVideoSrc);

// Concatenate something, 'mobile.mp4' perhaps, at end of our default filename.
// Use this naming convention when exporting 3G network videos around 200kbps.
// For ease, upload lo-fi encoded mobile videos into the same directory.
var mobileSrc = defaultVideoSrc + 'mobile.mp4';	

function detectmob(){

	// Ask if it's a mobile device.
	// Does the navigator property (userAgent) match anything from our targeted device list?
	if(navigator.userAgent.match(/Android/i)
		|| navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)
		|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i)
		|| navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i)) {
			
			// Well if so, then we're dealing with a mobile device. 
			// We know 3G networks lack bandwidth required for our beautiful hi-fi marketing materials.
			// Assume the device is on a 3G network for simplicity (for now) and remove the src attribute.
			$('video').removeAttr('src');
			
			//with the src attribute cleared, we can now set the new mobile path from the mobileSrc variable.
			$('video').attr('src', mobileSrc); 
	}
}

// fire up the JavaScript engine and execute the detectmobile function.
detectmob();

// Check mobile device consoles to confirm the correct video attr. boom! done!
// These last couple lines are a big help,
// esp. when engineering pages rich with other events or late/ongoing DOM activity near the video element.
var capv = $('video').attr('src');
console.log('currrent attribute path value is: ' + capv);