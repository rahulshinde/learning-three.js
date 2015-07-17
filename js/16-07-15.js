// 16.07.15

var container, stats;
var camera, scene, raycaster, renderer;

var cube;

var mouse = new THREE.Vector2(), INTERSECTED;
var radius = 100, theta = 0;

var objects = [];

init();
animate();

function init() {

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );

	camera.position.z = 100;

	scene = new THREE.Scene();

	var geometry = new THREE.BoxGeometry( 50, 30, 40 );
	var material = new THREE.MeshPhongMaterial({color: 0x696969, emissive: 0x696969, specular:0x696969, shininess: 15, side: THREE.DoubleSide});

	cube = new THREE.Mesh( geometry, material );
	cube.userData = {
    	URL: "http://google.com"
    };

    scene.add( cube );
	objects.push( cube );

	cube1 = new THREE.Mesh( geometry, material );
	cube1.userData = {
    	URL: "http://reddit.com"
    };

    cube1.position.set(60,0,0);

    scene.add( cube1 );
	objects.push( cube1 );

	var light1 = new THREE.PointLight( 0xffffff, 1, 4500 );
	light1.position.set( 0, 10, 50 );
	scene.add( light1 );

	raycaster = new THREE.Raycaster();

	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor( 0xf0f0f0 );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.sortObjects = false;
	document.body.appendChild( renderer.domElement );

	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

function onDocumentMouseMove( event ) {

	event.preventDefault();

	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}

			//

function animate() {

	requestAnimationFrame( animate );
	render();

}

function render() {

	cube.rotation.x += 0.005;

	cube1.rotation.x -= 0.005;

	camera.updateMatrixWorld();


	// find intersections

	raycaster.setFromCamera( mouse, camera );

	var intersects = raycaster.intersectObjects( scene.children );

	if ( intersects.length > 0 ) {

		if ( INTERSECTED != intersects[ 0 ].object ) {

			if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

			INTERSECTED = intersects[ 0 ].object;
			INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
			INTERSECTED.material.emissive.setHex( 0xff0000 );

		}

	} else {

		if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

		INTERSECTED = null;

	}

	renderer.render( scene, camera );

}
