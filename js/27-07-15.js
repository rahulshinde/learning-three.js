//27.07.15

var keyboard = new KeyboardState();

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.z = 100;

var container = document.getElementById( 'three-container' );

var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
container.appendChild( renderer.domElement );

//////////////////
//Adding Flowers//
//////////////////

var material = new THREE.MeshPhongMaterial({ map:THREE.ImageUtils.loadTexture('textures/rudbekia.jpg') , shininess: 15, side: THREE.DoubleSide});
var geometry = new THREE.BoxGeometry( 60, 50, 2 );
var cube = new THREE.Mesh( geometry, material );
cube.position.set(-40, 0, -40)
cube.rotation.y = 1;
scene.add( cube );

//////////////////
//Adding Banner///
//////////////////

var material3 = new THREE.MeshPhongMaterial({ map:THREE.ImageUtils.loadTexture('textures/hbd.png') , shininess: 15, side: THREE.DoubleSide});
var geometry3 = new THREE.BoxGeometry( 120, 45, 2 );
var banner = new THREE.Mesh( geometry3, material3 );
banner.position.set(50, 30, -20)
scene.add( banner );

//////////////////
//Adding Sphere///
//////////////////
var geometry2 = new THREE.SphereGeometry( 15, 32, 32 );
var material2 = new THREE.MeshPhongMaterial({ map:THREE.ImageUtils.loadTexture('textures/cs-back.gif') , specular:0x696969, shininess: 15, side: THREE.DoubleSide});

var sphere = new THREE.Mesh( geometry2, material2 );
sphere.position.set(20, -40, 40);
scene.add( sphere );

//////////////////
//Adding Grass////
//////////////////

var material4 = new THREE.MeshPhongMaterial({ map:THREE.ImageUtils.loadTexture('textures/grass.jpg') , shininess: 15, side: THREE.DoubleSide});
var geometry4 = new THREE.BoxGeometry( 350, 466, 2 );
var grass = new THREE.Mesh( geometry4, material4 );
grass.position.set(-80, -100, -60)
grass.rotation.x = -0.7;
grass.rotation.y = 0.1;
grass.rotation.z = -0.2;
scene.add( grass );

///////////////
//Adding Text//
///////////////

var materialFront = new THREE.MeshPhongMaterial({color: 0x696969, emissive: 0x696969, specular:0x696969, shininess: 15, side: THREE.DoubleSide});
var materialSide = new THREE.MeshPhongMaterial({color: 0xff9933, emissive: 0xff9933, specular:0x696969, shininess: 15, side: THREE.DoubleSide});
var materialArray = [ materialFront, materialSide ];
var textGeom = new THREE.TextGeometry( "Happy Birthday", 
{
	size: 20, height: 4, curveSegments: 5,
	font: "gentilis",
	bevelThickness: 0.5, bevelSize: 0.5, bevelEnabled: true,
	material: 0, extrudeMaterial: 1
});
	
var textMaterial = new THREE.MeshFaceMaterial(materialArray);
var textMesh = new THREE.Mesh(textGeom, textMaterial );

textGeom.computeBoundingBox();

var textWidth = textGeom.boundingBox.max.x - textGeom.boundingBox.min.x;

textMesh.position.set( -0.5 * textWidth, 0, 0 );
scene.add( textMesh );

/////////////////
//Adding Lights//
/////////////////

var light = new THREE.AmbientLight( 0x565656 ); // soft white light
scene.add( light );

var light1 = new THREE.PointLight( 0xffffff, 1, 5500 );
light1.position.set( 0, 10, 50 );
scene.add( light1 );

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize() {

	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

function render() {
	requestAnimationFrame( render );
	keyboard.update();

	//WASD
	if(keyboard.pressed('W')) {
		camera.position.z -= 1;
		
	}

	if(keyboard.pressed('A')) {
		camera.rotation.y += 0.02;
	}

	if(keyboard.pressed('S')) {
		camera.position.z += 1;
		
	}

	if(keyboard.pressed('D')) {
		camera.rotation.y -= 0.02;
	}

	//Arrow Keys
	if(keyboard.pressed('up')) {
		camera.position.z -= 1;
	}

	if(keyboard.pressed('left')) {

		camera.rotation.y += 0.02;
	}

	if(keyboard.pressed('down')) {
		camera.position.z += 1;	}

	if(keyboard.pressed('right')) {
		camera.rotation.y -= 0.02;
	}

	textMesh.rotation.x += 0.01;

	sphere.rotation.x += 0.002;
	sphere.rotation.y += 0.01;

	banner.rotation.y += 0.004;


	renderer.render( scene, camera );
}
render();