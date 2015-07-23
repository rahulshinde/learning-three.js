//+++ 23.07.15 +++

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

window.addEventListener( 'resize', onWindowResize, false );

var geometry = new THREE.BoxGeometry( 50, 50, 50 );
var material = new THREE.MeshPhongMaterial({ map:THREE.ImageUtils.loadTexture('../textures/no1-01.png') , shininess: 15, side: THREE.DoubleSide});
var cube = new THREE.Mesh( geometry, material );
cube.position.set(50,0,0);
scene.add( cube );

var geometry2 = new THREE.BoxGeometry( 40, 80, 3 );
var material2 = new THREE.MeshPhongMaterial({ map:THREE.ImageUtils.loadTexture('../textures/no1-01.png') , shininess: 15, side: THREE.DoubleSide});
var cube2 = new THREE.Mesh( geometry2, material2 );
cube2
cube2.position.set(-50,0,0);
cube2.rotation.y = 11;
scene.add( cube2 );

var light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

var light1 = new THREE.PointLight( 0xffffff, 1, 4500 );
light1.position.set( 0, 10, 50 );
scene.add( light1 );

camera.position.z = 100;

function onWindowResize() {

	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

function render() {
	requestAnimationFrame( render );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	// cube.rotation.z += 0.01;

	renderer.render( scene, camera );
}
render();