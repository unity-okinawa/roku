#pragma strict

var point = 0;
var timeObj :GameObject;

function Start () {

	timeObj = gameObject.Find("time_label");
}

function Update() {
var b : int = Time.time;
timeObj.guiText.text = "" + b;
}
