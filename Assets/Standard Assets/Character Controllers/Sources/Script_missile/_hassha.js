#pragma strict

var objects : GameObject[] = new GameObject[10];
var objects_count = 0;
function Start () {
}
function Update () {
	if(Input.GetKeyUp(KeyCode.Space)){
		
		if (objects_count < 11) {

			
			for(var i = 0; i < objects.length; i++) {
				if (objects[i] == null) {
					
					var boll = GameObject.CreatePrimitive(PrimitiveType.Sphere);
					boll.gameObject.AddComponent("Rigidbody");
					boll.transform.rigidbody.freezeRotation = true;
					boll.transform.localScale = Vector3(1, 1, 0.1); 
					if (this.transform.position.x > 0 ) {
						boll.transform.position = Vector3(7.9, 1.6, 0); 
						boll.transform.rigidbody.AddForce(Vector3(-400, 400, 0));
					} else {
						boll.transform.position = Vector3(-7.9, 1.6, 0); 
						boll.transform.rigidbody.AddForce(Vector3(400, 400, 0));
					}

					objects[i] = boll;
					objects_count = objects_count + 1;
					break;
				}
			}
		}
	}
	for(i = 0; i < objects.length; i++) {
		if (objects[i] != null && objects[i].transform.position.y < 0) {
			Destroy(objects[i]);
			objects_count = objects_count -1;
		}
	}
}