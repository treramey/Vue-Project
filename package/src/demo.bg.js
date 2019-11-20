import {
	PerspectiveCamera,
	Scene,
	BufferGeometry,
	ShaderMaterial,
	BufferAttribute,
	Color,
	Points,
	WebGLRenderer
} from 'three'
import VertexShader from './shader/demo.vertex.glsl'
import FragmentShader from './shader/demo.fragment.glsl'

const SEPARATION = 100
const AMOUNTX = 75
const AMOUNTY = 50
let camera
let scene
let particles
let renderer
let count = 0
let $el

function init (el) {
	if (!el) {
		throw new Error('Need DMO mount background')
	}
	$el = el
	// eslint-disable-next-line no-console
	console.log('init')
	camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000)
	camera.position.z = 5000
	camera.position.y = 1000
	camera.position.x = 1000

	
	

	scene = new Scene()
	scene.background = new Color( 0x212121 );
	camera.lookAt(scene.position)
	let numParticles = AMOUNTX * AMOUNTY
	let positions = new Float32Array(numParticles * 3)
	let scales = new Float32Array(numParticles)
	let i = 0
	let j = 0
	for (let ix = 0; ix < AMOUNTX; ix++) {
		for (let iy = 0; iy < AMOUNTY; iy++) {
			positions[i] = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2) // x
			positions[i + 1] = 0 // y
			positions[i + 2] = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2) // z
			scales[j] = 1
			i += 3
			j++
		}
	}
	
	let geometry = new BufferGeometry()
	geometry.addAttribute('position', new BufferAttribute(positions, 3))
	geometry.addAttribute('scale', new BufferAttribute(scales, 1))
	let material = new ShaderMaterial({
		uniforms: {
			color: { value: new Color(0x404040) }
		},
		vertexShader: VertexShader,
		fragmentShader: FragmentShader
	})

	particles = new Points(geometry, material)
	scene.add(particles)
	renderer = new WebGLRenderer({ antialias: true })
	renderer.setPixelRatio(window.devicePixelRatio)
	renderer.setSize(window.innerWidth, window.innerHeight)
	$el.appendChild(renderer.domElement)

	window.addEventListener('resize', onWindowResize, false)
	animate()
}

function onWindowResize () {
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
	renderer.setSize(window.innerWidth, window.innerHeight)
}

function render () {
	let positions = particles.geometry.attributes.position.array
	let scales = particles.geometry.attributes.scale.array
	let i = 0
	let j = 0
	for (let ix = 0; ix < AMOUNTX; ix++) {
		for (let iy = 0; iy < AMOUNTY; iy++) {
			positions[i + 1] = (Math.sin((ix + count) * 0.3) * 50) +
				(Math.sin((iy + count) * 0.5) * 50)
			scales[j] = (Math.sin((ix + count) * 0.3) + 1) * 8 +
				(Math.sin((iy + count) * 0.5) + 1) * 8
			i += 3
			j++
		}
	}
	particles.geometry.attributes.position.needsUpdate = true
	// particles.geometry.attributes.scale.needsUpdate = true
	renderer.render(scene, camera)
	count += 0.1
}

function animate () {
	requestAnimationFrame(animate)
	render()
}

export default {
	init
}
