#pragma strict

function Start () {

}

function Update () {
	
}

function OnCollisionEnter()
{
	Destroy(this.gameObject);
	gameObject.Find(this.name.Replace("_boll", "")).GetComponent(_hassha).objects_count -= 1;
}