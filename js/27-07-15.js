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

var material = new THREE.MeshPhongMaterial({ map:THREE.ImageUtils.loadTexture('../textures/rudbekia.jpg') , shininess: 15, side: THREE.DoubleSide});
var geometry = new THREE.BoxGeometry( 60, 50, 3 );
var cube = new THREE.Mesh( geometry, material );
cube.position.set(-40, 0, -40)
cube.rotation.y = 1;
scene.add( cube );

///////////////
//Adding Text//
///////////////

var materialFront = new THREE.MeshPhongMaterial({color: 0x696969, emissive: 0x696969, specular:0x696969, shininess: 15, side: THREE.DoubleSide});
var materialSide = new THREE.MeshPhongMaterial({color: 0x0000FF, emissive: 0x696969, specular:0x696969, shininess: 15, side: THREE.DoubleSide});
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

var light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

var light1 = new THREE.PointLight( 0xffffff, 1, 4500 );
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

////////////////////////////////
//Calculating Forward Movement//
////////////////////////////////

function render() {
	requestAnimationFrame( render );
	keyboard.update();

	//WASD
	if(keyboard.pressed('W')) {
		var radians = camera.rotation.y;
		var degrees = radians * (180/Math.PI);
		if (degrees > 90 || degrees < -90) {
			camera.position.z += 1
		}

		else {
			camera.position.z -= 1;
		}
		
	}

	if(keyboard.pressed('A')) {
		camera.rotation.y += 0.02;
	}

	if(keyboard.pressed('S')) {
		var radians = camera.rotation.y;
		var degrees = radians * (180/Math.PI);
		if (degrees > 90 || degrees < -90) {
			camera.position.z -= 1
		}

		else {
			camera.position.z += 1;
		}
		
	}

	if(keyboard.pressed('D')) {
		camera.rotation.y -= 0.02;
	}

	//Arrow Keys
	if(keyboard.pressed('up')) {
		var radians = camera.rotation.y;
		var degrees = radians * (180/Math.PI);
		if (degrees > 90 || degrees < -90) {
			camera.position.z += 1
		}

		else {
			camera.position.z -= 1;
		}
	}

	if(keyboard.pressed('left')) {

		camera.rotation.y += 0.02;
	}

	if(keyboard.pressed('down')) {
		var radians = camera.rotation.y;
		var degrees = radians * (180/Math.PI);
		if (degrees > 90 || degrees < -90) {
			camera.position.z -= 1
		}

		else {
			camera.position.z += 1;
		}
	}

	if(keyboard.pressed('right')) {
		camera.rotation.y -= 0.02;
	}

	textMesh.rotation.x += 0.01;


	renderer.render( scene, camera );
}
render();