# 3G Slick JS ![3G SlickJS](http://s3.amazonaws.com/mynodebucket/assets/images/slicklogo.png)

Slick 3G Network Videos for mobile devices with super slow internet.

## Description

Manage HTML5 Video quality fed across a variety of devices. A few lines of JavaScript efficiently solves the problem of video interuption often experienced while trying watch an overly robust video feed via 3G Cellular Data Network. You know what I mean. It chokes up and this utility performs the heimlic. 

## Demo

[Check out the demo](http://video.kickr.io) and disable wifi on your mobile device.

## Dependencies

[jQuery](http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js) is a dependency the way things are written in the repo js file, but you don't need to use jQuery if you prefer that slight performance advantage of element selection and attribute manipulation in regular JavaScript by itself.

## Requirements & Prerequisite Discussion

Use [Handbrake](http://handbrake.fr/downloads.php).

I use iOS Simulator App outputing console messages in Safari. Refreshing Safari console invokes the performance analytics waterfall regardless on each http transaction despite my complete disinterest in anythign but the console. That shit is out of control when each time I'm having to sift through bullshit to find the console messages area again. But it's what I end up using. For more on setting up iOS Simulator consult the horse's mouth over here: [Apple Dev Docs, Debugging Web Content on iOS](http://goo.gl/8A7BN)

Also need to check out [jsconsole](http://jsconsole.com/remote-debugging.html) too.

## Usage

[Review the code and comments](http://github.com/bcardan/3gslick.js/blob/master/3gslick.js)

## Roadmap 

Stop checking mobile devices with the assumption they don't use wifi. Instead check for the network type associated with the request in order to respond precisely to the user's internet connection speed and browsing experience, rather than a blind device check. 

http://stackoverflow.com/questions/8598065/how-do-you-detect-3g-vs-wifi-connection-on-mobile-safari

With polite aknowledgement and respect for the gentleman's response to inquiry above on StackOverflow, I doubt his answer. There's gotta be a way to do it... Node or an npm package might help figure it out on the server side. But before going there I feel certain this network information is available upon TCP handshake. The Network Access layer controls the communication between the hardware in the network.. That's pretty deep stuff and I want to avoid getting phone gap involved to simply check for a 3G network if possible. 

That is what they call a long run for a short slide. 

Forgive my ramblings. If you stumble on this repo and happen to know or think of something please submit a pull request or issue. The JS community should be able to accomplish this with a little front-end JavaScript. Why not? 

If it is not possible in JavaScript the esteemed members of our ECMAScript committee need to be notified. The issue is worth raising unless they already deemed it outside their scope. As I understand the Network Layer and JavaScript Interpreter are in the same proximity to one another in the browser. 

Also I haven't found much here: http://www.ecma-international.org/ecma-262/5.1/#sec-4.3.6

btw, firefox is apparently killing it with the ECMAScript 6 coverage: http://kangax.github.com/es5-compat-table/es6/

## ShoutOut
The work being done by TJ Halowaychuk and everyone on components right now is independently awesome and deserves a shoutout: [The Official Components Index](https://github.com/component/component/wiki/Components).

## License 

The purpose of the following software license is to present the true context of this repository and, in particular, to resolve any doubt as to its open-source, freely contributed, and freely obtainable nature without condition or limitation whatsoever.

(The MIT License Modified Cloudkickr Augmentation)

Copyright (c) 2013 Bent Cardan &lt;bent@kickr.io&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
no imaginable conditions whatsoever at the time of this commit or in the future record of this repository or fork thereof.

The above copyright notice and this permission notice memorializes the unique purpose, understanding and nature of open-source software, namely that it be free as the very air we breath, nothing more and nothing less than the luck and reward of gratuitous efforts made here in name of improvement and contribution to any and to all who shall pass.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
