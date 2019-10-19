/**
 * @author Sven Ackermann (svenrecknagel@gmail.com)
 * @license BSD license
 */
chrome.runtime.getBackgroundPage(function(e){$(function(){var t=chrome.i18n.getMessage,i=location.hash.substr(1);$("h1").text(t(i+"NotifierTitle")).after(t(i+"NotifierText")),$("body").click(e.openOptions).click(window.close),e.updateNotifierDone()})});