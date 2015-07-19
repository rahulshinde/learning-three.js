//18.07.15

var color1,
	color2,
	color3

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

var cameraControls;

var renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 100;

cameraControls = new THREE.OrbitControls(camera, renderer.domElement);
cameraControls.target.set( 0, 0, 0);
cameraControls.maxDistance = 400;
cameraControls.minDistance = 30;
cameraControls.update();

var geometry = new THREE.BoxGeometry( 20, 30, 40 );
var material1 = new THREE.MeshPhongMaterial({color: 0x696969, emissive: 0x696969, specular:0x696969, shininess: 15, side: THREE.DoubleSide});

var material2 = new THREE.MeshPhongMaterial({color: 0x696969, emissive: 0x696969, specular:0x696969, shininess: 15, side: THREE.DoubleSide});

var material3 = new THREE.MeshPhongMaterial({color: 0x696969, emissive: 0x696969, specular:0x696969, shininess: 15, side: THREE.DoubleSide});


var cube1 = new THREE.Mesh( geometry, material1 );
scene.add( cube1 );

var cube2 = new THREE.Mesh( geometry, material2 );
cube2.position.set(40, 30, 30);
scene.add( cube2 );


var cube3 = new THREE.Mesh( geometry, material3 );
cube3.position.set(-80, 0, -50);
scene.add( cube3 );

var light1 = new THREE.PointLight( 0xffffff, 0.4, 7500 );
light1.position.set( 0, 10, 100 );
scene.add( light1 );


window.addEventListener( 'resize', onWindowResize, false );
document.addEventListener( 'mousemove', onDocumentMouseMove, false );

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

function onDocumentMouseMove( event ) {

	event.preventDefault();

	if ($('#link-title1:hover').length > 0) {
        color1 = '0x0000ff';
    } else {
    	color1 = '0x696969';
    }

    if ($('#link-title2:hover').length > 0) {
        color2 = '0xff0000';
    } else {
    	color2 = '0x696969';
    }

    if ($('#link-title3:hover').length > 0) {
        color3 = '0x00FF7F';
    } else {
    	color3 = '0x696969';
    }

}

function render() {
	requestAnimationFrame( render );

	cube1.rotation.x += 0.001;
	cube1.rotation.y += 0.01;

	cube2.rotation.y += 0.005;

	cube3.rotation.x += 0.001;
	cube3.rotation.z += 0.02;

	cube1.material.emissive.setHex(color1);
	cube2.material.emissive.setHex(color2);
	cube3.material.emissive.setHex(color3);

	renderer.render( scene, camera );
}


function update() {
	cameraControls.update();
	render();
}


update();