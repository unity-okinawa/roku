#pragma strict

var objects : GameObject[] = new GameObject[0];
var objects_count = 0;
var kyoriSt : int;
var powerObj : GameObject;
function Start () {
	powerObj = GameObject.Find("Cylinder_power");
}
function Update () {
	if (kyoriSt > 0) {
		var kyori = Time.time - kyoriSt;
		if (kyori < 4f) {
			powerObj.transform.localScale.y = kyori * 0.1;
			powerObj.transform.localScale.x = powerObj.transform.localScale.y;
		}
	}

	if(Input.GetKeyUp(KeyCode.Space)){
		
		if (objects_count < 20) {
			

			for(var i = 0; i < objects.length; i++) {
				if (objects[i] == null) {
					
					var boll = GameObject.CreatePrimitive(PrimitiveType.Sphere);
					boll.name = this.name + "_boll";
					boll.gameObject.AddComponent("Rigidbody");
					boll.gameObject.AddComponent(_atari2);
					boll.transform.rigidbody.freezeRotation = true;
					boll.transform.localScale = Vector3(1, 1, 0.1);

					var tobasu = powerObj.transform.localScale.y * 1500;
					if (this.transform.position.x > 0 ) {
						boll.transform.position = Vector3(7.9, 1.6, 0); 
						boll.transform.rigidbody.AddForce(Vector3(tobasu * -1, tobasu, 0));
					} else {
						boll.transform.position = Vector3(-7.9, 1.6, 0); 
						boll.transform.rigidbody.AddForce(Vector3(tobasu, tobasu, 0));
					}

					objects[i] = boll;
					objects_count = objects_count + 1;
					break;
				}
			}
		}
		kyoriSt = 0;
		powerObj.transform.localScale.y = 0;
		powerObj.transform.localScale.x = 0;
	}
	if(Input.GetKeyDown(KeyCode.Space)){
		kyoriSt = Time.time;
	}
	for(i = 0; i < objects.length; i++) {
		if (objects[i] != null && objects[i].transform.position.y < 0.6) {
			Destroy(objects[i]);
			objects_count = objects_count -1;
		}
	}
}