var screenWidth = window.screen.width;
var baseResolutionWidth = 1920;
var scalingFactor = screenWidth / baseResolutionWidth;
document.documentElement.style.setProperty('--scaling-factor', scalingFactor);
