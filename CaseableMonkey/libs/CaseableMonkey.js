/***** DO NOT EDIT THIS FILE *****/
// CaseableMonkey.js generated by MonkeyTalk

load("libs/MonkeyTalkAPI.js");


var CaseableMonkey = {};

/*** script -- CaseableScript1 ***/
CaseableMonkey.CaseableScript1 = function(app) {
	MT.Script.call(this, app, "CaseableScript1.mt");
};

CaseableMonkey.CaseableScript1.prototype = new MT.Script;

CaseableMonkey.CaseableScript1.prototype.call = function() {
	//run: CaseableScript1.mt
	MT.Script.prototype.call(this);
};

MT.Application.prototype.caseableScript1 = function() {
	return new CaseableMonkey.CaseableScript1(this);
};

/*** script -- MonkeyProjectCaseable ***/
CaseableMonkey.MonkeyProjectCaseable = function(app) {
	MT.Script.call(this, app, "MonkeyProjectCaseable.mt");
};

CaseableMonkey.MonkeyProjectCaseable.prototype = new MT.Script;

CaseableMonkey.MonkeyProjectCaseable.prototype.call = function() {
	//run: MonkeyProjectCaseable.mt
	MT.Script.prototype.call(this);
};

MT.Application.prototype.monkeyProjectCaseable = function() {
	return new CaseableMonkey.MonkeyProjectCaseable(this);
};

