The project allows to replicate an issue with Ionic 2 and media-capture plugin.
When you finish capturing a video the page that called the plugin, does not refresh automatically.
There is a 'preview' HTML5 video component that is enabled (*ngIf) once there is available a captured video.

Ionic version: 2.0.0-beta.10

How to reproduce
Clone the project

Add ionic platform:
#> ionic platform add android

Add the Cordova Media-Capture plugin

#>typings install -SG dt~cordova/plugins/mediacapture
#>ionic plugin add cordova-pluin-media-capture

Build and deploy to device with camera:
#>ionic build android

Once, run capture a video.
When the video is captured, it should be displayed in HTML5 video.
If you click the 'Dummy' button, an dummy alert is displayed. After you close the alert, the page is 'refreshed' and the video is displayed normally.


Update: Can be solved/workaround by using a zone
See https://forum.ionicframework.com/t/page-does-not-refresh-after-cordova-media-capture-plugin-records-video/59043
