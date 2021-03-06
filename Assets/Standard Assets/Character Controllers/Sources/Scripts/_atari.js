#pragma strict
var oyaObj : GameObject;
var cameraObj : GameObject;
var pointObj : GameObject;
var atari = false;


function Start () {

	cameraObj = gameObject.Find("MainCamera");
	pointObj = gameObject.Find("point_label");
}

function Update () {
	if (atari) {
		oyaObj.transform.position.x = this.transform.position.x;
		//キャラ移動
		if (oyaObj.transform.position.y < this.transform.position.y) {
			oyaObj.transform.position.y = oyaObj.transform.position.y + 0.3f;
		} else {
			if (oyaObj.transform.position.y != this.transform.position.y) {
				isTrigger(true);
			}
			oyaObj.transform.position.y = this.transform.position.y;
		}
		//カメラ移動
		if (cameraObj.transform.position.y < this.transform.position.y + 2.5) {
			cameraObj.transform.position.y = cameraObj.transform.position.y +  0.09f;
		} else {
			cameraObj.transform.position.y = this.transform.position.y + 2.5;
		}
	}
}
function OnTriggerEnter(other: Collider )
{
	if (!atari && other.name == "Cylinder-sita") {
		isAtari(false);
		//ポイント
		var point = this.transform.position.y / 4;
		pointObj.GetComponent(_point).point = point;
		pointObj.guiText.text = "point:" + point;

		//舌の親取得
		oyaObj = other.transform.parent.gameObject; 
		oyaObj.GetComponent(CharacterMotor).enabled=false;
		this.collider.isTrigger = false;
		atari = true;
	}
}
function isTrigger(flg) {
	var obj : GameObject;
	for (var i = 1; i < 9; i++) {
		obj = gameObject.Find("obj" + i);
		if (obj.name != this.name) {
			obj.collider.isTrigger = flg;
		}
	}
}
function isAtari(flg) {
	var obj : GameObject;
	for (var i = 1; i < 9; i++) {
		obj = gameObject.Find("obj" + i);
		if (obj.name != this.name) {
			obj.GetComponent(_atari).atari = flg;
		}
	}
}
