//27.07.15

var keyboard = new KeyboardState();

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.z = 100;

var container = document.getElementById( 'three-container' );

var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
container.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 50, 30, 40 );
var material = new THREE.MeshPhongMaterial({color: 0x696969, emissive: 0x696969, specular:0x696969, shininess: 15, side: THREE.DoubleSide});
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

var light1 = new THREE.PointLight( 0xffffff, 1, 4500 );
light1.position.set( 0, 10, 50 );
scene.add( light1 );

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
		var radians = camera.rotation.y;

		camera.rotation.y += 0.02;

		var degrees = radians * (180/Math.PI);
		console.log(degrees);
	}

	if(keyboard.pressed('down')) {
		camera.position.z += 1;
	}

	if(keyboard.pressed('right')) {
		camera.rotation.y -= 0.02;
	}



	cube.rotation.x += 0.001;
	cube.rotation.y += 0.01;
	// cube.rotation.z += 0.01;

	renderer.render( scene, camera );
}
render();