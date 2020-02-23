//import { write } from "fs";

console.log("Starting Discord.bio Presence");
console.log(document);

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var presence = new Presence({
    clientId: "642728621596999690",
    mediaKeys: false
}), strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});
var browsingStamp = Math.floor(Date.now() / 1000);
var title, views, air, air2, title2;
var iFrameVideo, currentTime, duration, paused;
var video, videoDuration, videoCurrentTime;
var lastPlaybackState = null;
var playback;
var browsingStamp = Math.floor(Date.now() / 1000);
if (lastPlaybackState != playback) {
    lastPlaybackState = playback;
    browsingStamp = Math.floor(Date.now() / 1000);
}

presence.on("iFrameData", data => {
    playback =
        data.iframe_video.duration !== null
            ? true : false;
    if (playback) {
        iFrameVideo = data.iframe_video.iFrameVideo;
        currentTime = data.iframe_video.currTime;
        duration = data.iframe_video.dur;
        paused = data.iframe_video.paused;
    }
});

presence.on("UpdateData", () => __awaiter(this, void 0, void 0, function* () {
    var a = presenceData = '', presenceData = {
        largeImageKey: "logo"            
    };

   if (document.location.pathname == "/"){
      presenceData.details = "Browsing in mainpage...";
      presence.setActivity(presenceData);

   } else if (document.location.pathname =="/profiles"){
    presenceData.details = "Browsing thought";
    presenceData.state = "top upvoted profiles...";
    presence.setActivity(presenceData);
  
   } else if (document.location.pathname == "/plans"){
    presenceData.details = "Browsing thought";
    presenceData.state = "Premium plans";
    presence.setActivity(presenceData);

   } else if (document.location.pathname == "/customise"){  
    presenceData.details = "Edit profile";
    presence.setActivity(presenceData);

   } else if (document.location.pathname.includes("/p/")){
    nameofprofile = document.querySelector("#app > div > div.my-auto > div > div.ProfilePage > div > div > div > div > div > div.bg-notdark.rounded-b-lg.px-6.pt-12.pb-4 > span.text-white.font-bold.text-3xl.mr-1").innerText
    presenceData.details = "Viewing profile";
    presenceData.state = nameofprofile;
    presence.setActivity(presenceData);
   
   }
    presence.setActivity(presenceData);
}));
 
function getTimestamps(videoTime, videoDuration) {
    var startTime = Date.now();
    var endTime = Math.floor(startTime / 1000) - videoTime + videoDuration;
    return [Math.floor(startTime / 1000), endTime];
}
function refresh(presence) {
    refresh.refresh;
}