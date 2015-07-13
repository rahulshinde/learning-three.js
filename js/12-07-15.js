var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, 300 / 400, 0.1, 1000);

var container = document.getElementById( 'environment-container' );

var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( 300, 400 );
container.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 3, 3, 3 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 10;

function render() {
	requestAnimationFrame( render );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	// cube.rotation.z += 0.01;

	renderer.render( scene, camera );
}
render();