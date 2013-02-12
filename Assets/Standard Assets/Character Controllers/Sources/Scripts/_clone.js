#pragma strict

var src : GameObject;
var objs:Hashtable = new Hashtable();

var objs1 : GameObject;
var objs2 : GameObject;
var objs3 : GameObject;
var objs4 : GameObject;

var objs5 : GameObject;
var objs6 : GameObject;
var objs7 : GameObject;
var objs8 : GameObject;

function Start () {
	objs1=Instantiate(Resources.Load("haeFab", GameObject), new Vector3(10, 4, 0), Quaternion.identity);
	objs2=Instantiate(Resources.Load("haeFab", GameObject), new Vector3(5, 4, 0), Quaternion.identity);
	objs3=Instantiate(Resources.Load("haeFab", GameObject), new Vector3(0, 4, 0), Quaternion.identity);
	objs4=Instantiate(Resources.Load("haeFab", GameObject), new Vector3(-5, 4, 0), Quaternion.identity);

	objs5=Instantiate(Resources.Load("haeFab", GameObject), new Vector3(10, 8, 0), Quaternion.identity);
	objs6=Instantiate(Resources.Load("haeFab", GameObject), new Vector3(5, 8, 0), Quaternion.identity);
	objs7=Instantiate(Resources.Load("haeFab", GameObject), new Vector3(0, 8, 0), Quaternion.identity);
	objs8=Instantiate(Resources.Load("haeFab", GameObject), new Vector3(-5, 8, 0), Quaternion.identity);
	
	objs1.name = "obj1";
	objs2.name = "obj2";
	objs3.name = "obj3";
	objs4.name = "obj4";
	objs5.name = "obj5";
	objs6.name = "obj6";
	objs7.name = "obj7";
	objs8.name = "obj8";
}

function Update () {
	objs1.transform.localPosition.x = objs1.transform.localPosition.x - 0.1f * 1;
	objs2.transform.localPosition.x = objs2.transform.localPosition.x - 0.1f * 1;
	objs3.transform.localPosition.x = objs3.transform.localPosition.x - 0.1f * 1;
	objs4.transform.localPosition.x = objs4.transform.localPosition.x - 0.1f * 1;

	if (objs1.transform.localPosition.x < -11) {
		objs1.transform.localPosition.x = 11;
	}
	if (objs2.transform.localPosition.x < -11) {
		objs2.transform.localPosition.x = 11;
	}
	if (objs3.transform.localPosition.x < -11) {
		objs3.transform.localPosition.x = 11;
	}
	if (objs4.transform.localPosition.x < -11) {
		objs4.transform.localPosition.x = 11;
	}

	objs5.transform.localPosition.x = objs5.transform.localPosition.x + 0.1f * 1;
	objs6.transform.localPosition.x = objs6.transform.localPosition.x + 0.1f * 1;
	objs7.transform.localPosition.x = objs7.transform.localPosition.x + 0.1f * 1;
	objs8.transform.localPosition.x = objs8.transform.localPosition.x + 0.1f * 1;

	if (objs5.transform.localPosition.x > 11) {
		objs5.transform.localPosition.x = -11;
	}
	if (objs6.transform.localPosition.x > 11) {
		objs6.transform.localPosition.x = -11;
	}
	if (objs7.transform.localPosition.x > 11) {
		objs7.transform.localPosition.x = -11;
	}
	if (objs8.transform.localPosition.x > 11) {
		objs8.transform.localPosition.x = -11;
	}
	
	var cylinder = gameObject.Find("Cylinder");
	if (cylinder != null) {
		if (cylinder.transform.position.y > objs1.transform.position.y + 3) {
			objs1.transform.position.y = objs1.transform.position.y + 8;
			objs2.transform.position.y = objs2.transform.position.y + 8;
			objs3.transform.position.y = objs3.transform.position.y + 8;
			objs4.transform.position.y = objs4.transform.position.y + 8;
		}
		if (cylinder.transform.position.y > objs5.transform.position.y + 3) {
			objs5.transform.position.y = objs5.transform.position.y + 8;
			objs6.transform.position.y = objs6.transform.position.y + 8;
			objs7.transform.position.y = objs7.transform.position.y + 8;
			objs8.transform.position.y = objs8.transform.position.y + 8;
		}
		
	}
	
	
}