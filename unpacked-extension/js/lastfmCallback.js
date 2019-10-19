/**
 * @author Sven Ackermann (svenrecknagel@gmail.com)
 * @license BSD license
 */
chrome.runtime.getBackgroundPage(function(a){var e;null===a.localSettings.lastfmSessionName&&(e=a.extractUrlParam("token",location.search))&&a.getLastfmSession(e)});