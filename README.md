# 3G Slick JS

Slick 3G Network Videos for mobile devices with super slow internet.
![3G SlickJS](http://s3.amazonaws.com/mynodebucket/assets/images/slicklogo.png)

## Description

Manage HTML5 Video quality fed across a variety of devices. A few lines of JavaScript solves the problem of video interuption. The problem surfaces for video feeds too big for the 3G Network.

## Background and Motivation

If you need to dynamically adjust video quality for your 3G cellular audience in a manner that provides an uninterupted video experience on their slow device, then I think there's a premilimary step involved. 

Before anything, you'll need to identify the right encoding rate. 

I think 3G needs pretty low audio/video bit rate accumulating in the neighborhood of 230Kb/s or 350kb/s. Of course the figure is relative based on network factors as well as the nature of the video and audio quality you wish to feed.

## Implementation Approaches

Assuming you find that happy number and convert your media, you can now automate mobile device bit rate quality catering to relevant devices using two established approaches.

You can test the bandwidth of the connecting device or your can just straight up test its type. Devices will always reveal their type, so you might want to find out whether the connecting device is among that subset of mobile products that keep our 3G slick video/audio arena alive.

If you're going to run a bandwidth observation to select particular video quality ranges, then I recommend this component because it worked well for me in the past: https://github.com/component/network

If you're going test the device, then take a peek at this file: https://github.com/reqshark/3gslick.js/blob/master/3gslick.js

## Roadmap, or just no Roadmap

Related to this, I recommend checking out [Ilya Grigorik's excellent summary of the mobile latency issue](http://www.igvita.com/2014/04/21/uplink-scheduling-in-4G-networks/).
