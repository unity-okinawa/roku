#pragma strict
var sokudo = 0.1f;
var maxYscal = 2.0f;
var minYscal = 0.0f;
var normalYscal = 1.0f;
var upFlg = true;
var actionFlg = false;

function Start () {
	transform.localScale.y = normalYscal;
}

function Update () {

	if(Input.GetKeyUp(KeyCode.Space)){
		actionFlg = true;
	}
	
	if (actionFlg) {
	
		if (upFlg) {
			transform.localScale.y = transform.localScale.y + 0.1f * sokudo;
			transform.localPosition.y = transform.localPosition.y + 0.1f * sokudo;
		} else {
			transform.localScale.y = transform.localScale.y + -0.1f * sokudo;
			transform.localPosition.y = transform.localPosition.y - 0.1f * sokudo;
		}
		if (transform.localScale.y >= maxYscal) {
			upFlg = false;
		}
		if (transform.localScale.y <= minYscal) {
			upFlg = true;
			actionFlg = false;
		}
	}

}