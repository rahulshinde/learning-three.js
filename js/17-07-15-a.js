//17.07.15-a

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, 300 / 400, 0.1, 1000);
var color

camera.position.z = 100;

var container = document.getElementById( 'container1' );

var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( 300, 400 );
container.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 50, 30, 40 );
var material = new THREE.MeshPhongMaterial({color: 0x696969, emissive: 0x696969, specular:0x696969, shininess: 15, side: THREE.DoubleSide});
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

var light1 = new THREE.PointLight( 0xffffff, 1, 4500 );
light1.position.set( 0, 10, 50 );
scene.add( light1 );

document.addEventListener( 'mousemove', onDocumentMouseMove, false );

function onDocumentMouseMove( event ) {

	event.preventDefault();

	if ($('#container1:hover').length > 0) {
        color = '0xff0000';
        console.log(color);
    } else {
    	color = '0x696969';
    	console.log(color);
    }

}

function render() {
	requestAnimationFrame( render );

	cube.rotation.x += 0.001;
	cube.rotation.y += 0.01;
	// cube.rotation.z += 0.01;

	cube.material.emissive.setHex(color);

	renderer.render( scene, camera );
}
render();