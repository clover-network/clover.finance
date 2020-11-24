
	const CITY_RADIUS = 100,
    CITY_MARGIN = 0.5,
    BLINT_SPEED = 0.05,
    HEXAGON_RADIUS = 2,
    radius = 150
let scene, camera, renderer, clock, control
let earthImg, earthData, earthParticles = new THREE.Object3D(),
    cloud = new THREE.Object3D(),
    hexagon = new THREE.Object3D(),
    dotTexture = new THREE.TextureLoader().load('./image/global/dot.png'),
    hexagonColor = [0xFBB47B, 0xFA6400]

main()

function main() {
    earthImg = document.createElement('img')
    earthImg.src = './image/global/earth.jpg'
    earthImg.onload = () => {
        let earthCanvas = document.createElement('canvas')
        earthCtx = earthCanvas.getContext('2d')
        earthCanvas.width = earthImg.width
        earthCanvas.height = earthImg.height
        earthCtx.drawImage(earthImg, 0, 0, earthImg.width, earthImg.height)
        earthImgData = earthCtx.getImageData(0, 0, earthImg.width, earthImg.height)
            // basic scene
        createBasicScene()
            // 光锥
        createObjects()
            // 球面打点
        createEarthParticles()
            // 云层
        createCloudGrid()
        animate()
    }
}

function createBasicScene() {
    let width = window.innerWidth,
        height = window.innerHeight
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000)
    camera.position.z = 500
    renderer = new THREE.WebGLRenderer()
    renderer.setSize(width, height)
    renderer.autoClearColor = new THREE.Color(1, 0, 0, 0)
	document.getElementById('global').appendChild(renderer.domElement)
    clock = new THREE.Clock()
    control = new THREE.TrackballControls(camera)
    control.rotateSpeed = 1.0
    control.zoomSpeed = 1.0
    control.panSpeed = 1.0
    window.addEventListener('resize', resize)
}

function createObjects() {
    // 球面
    let sphereGeom = new THREE.SphereGeometry(CITY_RADIUS, 20, 20),
        sphereMat = new THREE.MeshBasicMaterial({
            color: 0xF7B500,
            wireframe: true
        })
    sphere = new THREE.Mesh(sphereGeom, sphereMat)
        //scene.add(sphere)
        // 地标及光锥
    for (let i = 0, length = countries.length; i < length; i++) {
        const position = createPosition(countries[i].position)
        const index = Math.floor(Math.random() * 2)
        createHexagon(position, index) // 地标
    }
}

function createHexagon(position, index) {
    const color = hexagonColor[index]
    let hexagonLine = new THREE.CircleGeometry(HEXAGON_RADIUS, 6)
    let hexagonPlane = new THREE.CircleGeometry(HEXAGON_RADIUS - CITY_MARGIN, 6)
    let vertices = hexagonLine.vertices
    vertices.shift() // 第一个节点是中心点
    let circleLineGeom = new THREE.Geometry()
    circleLineGeom.vertices = vertices
    let materialLine = new THREE.MeshBasicMaterial({
        color: color,
        side: THREE.DoubleSide
    })
    let materialPlane = new THREE.MeshBasicMaterial({
        color: color,
        side: THREE.DoubleSide,
        opacity: 0.5
    })
    let circleLine = new THREE.LineLoop(circleLineGeom, materialLine)
    let circlePlane = new THREE.Mesh(hexagonPlane, materialPlane)
    circleLine.position.copy(position)
    circlePlane.position.copy(position)
    circlePlane.lookAt(new THREE.Vector3(0, 0, 0))
    circleLine.lookAt(new THREE.Vector3(0, 0, 0))

    hexagon.add(circleLine)
    hexagon.add(circlePlane)
    scene.add(hexagon)
}

function createEarthParticles() {
    let positions = []
    let materials = []
    let sizes = []
    for (var i = 0; i < 2; i++) {
        positions[i] = {
            positions: []
        }
        sizes[i] = {
            sizes: []
        }
        mat = new THREE.PointsMaterial()
        mat.size = 5
        mat.color = new THREE.Color(0xF7B500)
        mat.map = dotTexture
        mat.depthWrite = false
        mat.transparent = true
        mat.opacity = 0
        mat.side = THREE.FrontSide
        mat.blending = THREE.AdditiveBlending
        let n = i / 2
        mat.t_ = n * Math.PI * 2
        mat.speed_ = BLINT_SPEED
        mat.min_ = .2 * Math.random() + .5
        mat.delta_ = .1 * Math.random() + .1
        mat.opacity_coef_ = 1
        materials.push(mat)
    }
    var spherical = new THREE.Spherical
    spherical.radius = radius
    const step = 250
    for (let i = 0; i < step; i++) {
        let vec = new THREE.Vector3
        let radians = step * (1 - Math.sin(i / step * Math.PI)) / step + .5 // 每个纬线圈内的角度均分
        for (let j = 0; j < step; j += radians) {
            let c = j / step, // 底图上的横向百分比
                f = i / step, // 底图上的纵向百分比
                index = Math.floor(2 * Math.random())
            pos = positions[index]
            size = sizes[index]
            if (isLandByUV(c, f)) { // 根据横纵百分比判断在底图中的像素值
                spherical.theta = c * Math.PI * 2 - Math.PI / 2 // 横纵百分比转换为theta和phi夹角
                spherical.phi = f * Math.PI // 横纵百分比转换为theta和phi夹角
                vec.setFromSpherical(spherical) // 夹角转换为世界坐标
                pos.positions.push(vec.x)
                pos.positions.push(vec.y)
                pos.positions.push(vec.z)
                if (j % 3 === 0) {
                    size.sizes.push(6.0)
                }
            }
        }
    }
    for (let i = 0; i < positions.length; i++) {
        let pos = positions[i],
            size = sizes[i],
            bufferGeom = new THREE.BufferGeometry,
            typedArr1 = new Float32Array(pos.positions.length),
            typedArr2 = new Float32Array(size.sizes.length)
        for (let j = 0; j < pos.positions.length; j++) {
            typedArr1[j] = pos.positions[j]
        }
        for (let j = 0; j < size.sizes.length; j++) {
            typedArr2[j] = size.sizes[j]
        }
        bufferGeom.addAttribute("position", new THREE.BufferAttribute(typedArr1, 3))
        bufferGeom.addAttribute('size', new THREE.BufferAttribute(typedArr2, 1))
        bufferGeom.computeBoundingSphere()
        let particle = new THREE.Points(bufferGeom, materials[i])
        earthParticles.add(particle)
    }
    scene.add(earthParticles)
}

function createCloudGrid() {
    THREE.XRayMaterial = function(options) {
        let uniforms = {
            uTex: {
                type: "t",
                value: options.map || new THREE.Texture
            },
            offsetRepeat: {
                value: new THREE.Vector4(0, 0, 1, 1)
            },
            alphaProportion: {
                type: "1f",
                value: options.alphaProportion || .5
            },
            diffuse: {
                value: options.color || new THREE.Color(10123215)
            },
            opacity: {
                value: options.opacity || 1
            },
            gridOffset: {
                value: 0
            }
        }
        return new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: ` 
varying float _alpha;
varying vec2 vUv;
uniform vec4 offsetRepeat;
uniform float alphaProportion;
void main() {
gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
vUv = uv * offsetRepeat.zw + offsetRepeat.xy;
vec4 worldPosition = modelMatrix * vec4( vec3( position ), 1.0 );
vec3 cameraToVertex = normalize( cameraPosition - worldPosition.xyz);
_alpha = 1.0 - max( 0.0, dot( normal, cameraToVertex ) );
_alpha = max( 0.0, (_alpha - alphaProportion) / (1.0 - alphaProportion) );
}`,
            fragmentShader: `
uniform sampler2D uTex;
uniform vec3 diffuse;
uniform float opacity;
uniform float gridOffset;
varying float _alpha;
varying vec2 vUv;
void main() {
vec4 texColor = texture2D( uTex, vUv );
float _a = _alpha * opacity;
if( _a <= 0.0 ) discard;
_a = _a * ( sin( vUv.y * 2000.0 + gridOffset ) * .5 + .5 );
gl_FragColor = vec4( texColor.rgb * diffuse, _a );
}`,
            transparent: !0,
            blending: THREE.AdditiveBlending,
            depthTest: !1
        })
    }
    let geometry = new THREE.SphereGeometry(1.3 * radius, 66, 44),
        map = new THREE.TextureLoader().load('./image/global/clouds.jpg')
    map.wrapT = THREE.ClampToEdgeWrapping
    map.wrapS = THREE.ClampToEdgeWrapping
    let material = new THREE.XRayMaterial({
            map: map,
            alphaProportion: 0.25,
            color: new THREE.Color(0xF7B500),
            opacity: 0,
            gridOffsetSpeed: .6
        }),
        mesh = new THREE.Mesh(geometry, material)
    mesh.matrixAutoUpdate = !1
    cloud.add(mesh)
    scene.add(cloud)
}

function resize() {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
}

function render() {
    let delta = clock.getDelta()
    control.update(delta)
    renderer.render(scene, camera)
}

function animate() {
    earthParticles.rotateY(0.0008)
    cloud.rotateY(0.0002)
    cloud.rotateX(0.0002)
    hexagon.rotateY(0.0008)
    requestAnimationFrame(animate)
        // 球面粒子闪烁
    let objects = earthParticles.children
    objects.forEach(obj => {
        let material = obj.material
        material.t_ += material.speed_
        material.opacity = (Math.sin(material.t_) * material.delta_ + material.min_) * material.opacity_coef_
        material.needsUpdate = true
    })
    render()
}

function createPosition(lnglat) {
    let spherical = new THREE.Spherical
    spherical.radius = radius
    const lng = lnglat[0]
    const lat = lnglat[1]
        // const phi = (180 - lng) * (Math.PI / 180)
        // const theta = (90 + lat) * (Math.PI / 180)
    const theta = (lng + 90) * (Math.PI / 180)
    const phi = (90 - lat) * (Math.PI / 180)
    spherical.phi = phi
    spherical.theta = theta
    let position = new THREE.Vector3()
    position.setFromSpherical(spherical)
    return position
}

function isLandByUV(c, f) {
    if (!earthImgData) { // 底图数据
        console.error('data error!')
    }
    let n = parseInt(earthImg.width * c) // 根据横纵百分比计算图象坐标系中的坐标
    o = parseInt(earthImg.height * f) // 根据横纵百分比计算图象坐标系中的坐标
    return 0 === earthImgData.data[4 * (o * earthImgData.width + n)] // 查找底图中对应像素点的rgba值并判断
}

var countries = [{
    name: "中国",
    position: [116.20, 39.55]
}, {
    name: "中非共和国",
    position: [18.35, 4.23]
}, {
    name: "智利",
    position: [-70.40, -33.24]
}, {
    name: "乍得",
    position: [14.59, 12.10]
}, {
    name: "赞比亚",
    position: [28.16, -15.28]
}, {
    name: "越南",
    position: [105.55, 21.05]
}, {
    name: "约旦",
    position: [35.52, 31.57]
}, {
    name: "英属维尔京群岛",
    position: [-64.37, 18.27]
}, {
    name: "英国",
    position: [-0.05, 51.36]
}, {
    name: "印度尼西亚",
    position: [106.49, -6.09]
}, {
    name: "印度",
    position: [77.13, 28.37]
}, {
    name: "意大利",
    position: [12.29, 41.54]
}, {
    name: "以色列",
    position: [35.12, 31.47]
}, {
    name: "伊朗",
    position: [51.30, 35.44]
}, {
    name: "伊拉克",
    position: [44.30, 33.20]
}, {
    name: "亚美尼亚",
    position: [44.31, 40.10]
}, {
    name: "牙买加",
    position: [-76.50, 18.00]
}, {
    name: "匈牙利",
    position: [19.05, 47.29]
}, {
    name: "新西兰",
    position: [174.46, -41.19]
}, {
    name: "新喀里多尼亚",
    position: [166.30, -22.17]
}, {
    name: "希腊",
    position: [23.46, 37.58]
}, {
    name: "西班牙",
    position: [-3.45, 40.25]
}, {
    name: "乌兹别克斯坦",
    position: [69.10, 41.20]
}, {
    name: "乌拉圭",
    position: [-56.11, -34.50]
}, {
    name: "乌克兰",
    position: [30.28, 50.30]
}, {
    name: "乌干达",
    position: [32.30, 0.20]
}, {
    name: "文莱",
    position: [115.00, 4.52]
}, {
    name: "委内瑞拉",
    position: [-66.55, 10.30]
}, {
    name: "危地马拉",
    position: [-90.22, 14.40]
}, {
    name: "瓦努阿图",
    position: [168.18, -17.45]
}, {
    name: "土库曼斯坦",
    position: [57.50, 38.00]
}, {
    name: "土耳其",
    position: [32.54, 39.57]
}, {
    name: "图瓦卢",
    position: [179.13, -8.31]
}, {
    name: "突尼斯",
    position: [10.11, 36.50]
}, {
    name: "汤加",
    position: [-174.00, -21.10]
}, {
    name: "坦桑尼亚",
    position: [35.45, -6.08]
}, {
    name: "泰国",
    position: [100.35, 13.45]
}, {
    name: "塔吉克斯坦",
    position: [68.48, 38.33]
}, {
    name: "索马里",
    position: [45.25, 2.02]
}, {
    name: "所罗门群岛",
    position: [159.57, -9.27]
}, {
    name: "苏里南",
    position: [-55.10, 5.50]
}, {
    name: "苏丹",
    position: [32.35, 15.31]
}, {
    name: "斯威士兰",
    position: [31.06, -26.18]
}, {
    name: "斯洛文尼亚",
    position: [14.33, 46.04]
}, {
    name: "斯洛伐克",
    position: [17.07, 48.10]
}, {
    name: "圣文森特和格林纳丁斯",
    position: [-61.10, 13.10]
}, {
    name: "圣皮埃尔和密克隆",
    position: [-56.12, 46.46]
}, {
    name: "圣马力诺",
    position: [12.30, 43.55]
}, {
    name: "圣卢西亚",
    position: [-60.58, 14.02]
}, {
    name: "圣基茨和尼维斯",
    position: [-62.43, 17.17]
}, {
    name: "圣多美和普林西比",
    position: [6.39, 0.10]
}, {
    name: "沙特阿拉伯",
    position: [46.42, 24.41]
}, {
    name: "塞浦路斯",
    position: [33.25, 35.10]
}, {
    name: "塞内加尔",
    position: [-17.29, 14.34]
}, {
    name: "塞拉利昂",
    position: [-13.17, 8.30]
}, {
    name: "萨摩亚",
    position: [-171.50, -13.50]
}, {
    name: "萨尔瓦多",
    position: [-89.10, 13.40]
}, {
    name: "瑞士",
    position: [7.28, 46.57]
}, {
    name: "瑞典",
    position: [18.03, 59.20]
}, {
    name: "葡萄牙",
    position: [-9.10, 38.42]
}, {
    name: "帕劳",
    position: [134.28, 7.20]
}, {
    name: "诺福克岛",
    position: [168.43, -45.20]
}, {
    name: "挪威",
    position: [10.45, 59.55]
}, {
    name: "尼日利亚",
    position: [7.32, 9.05]
}, {
    name: "尼日尔",
    position: [2.06, 13.27]
}, {
    name: "尼加拉瓜",
    position: [-86.20, 12.06]
}, {
    name: "尼泊尔",
    position: [85.20, 27.45]
}, {
    name: "南斯拉夫",
    position: [20.37, 44.50]
}, {
    name: "纳米比亚",
    position: [17.04, -22.35]
}, {
    name: "墨西哥",
    position: [-99.10, 19.20]
}, {
    name: "莫桑比克",
    position: [32.32, -25.58]
}, {
    name: "摩尔多瓦共和国",
    position: [28.50, 47.02]
}, {
    name: "缅甸",
    position: [96.20, 16.45]
}, {
    name: "秘鲁",
    position: [-77.00, -12.00]
}, {
    name: "孟加拉国",
    position: [90.26, 23.43]
}, {
    name: "美属维尔京群岛",
    position: [-64.56, 18.21]
}, {
    name: "美属萨摩亚",
    position: [-170.43, -14.16]
}, {
    name: "美国",
    position: [-77.02, 39.91]
}, {
    name: "毛里塔尼亚",
    position: [57.30, -20.10]
}, {
    name: "马约特岛",
    position: [45.14, -12.48]
}, {
    name: "马提尼克岛",
    position: [-61.02, 14.36]
}, {
    name: "马其顿",
    position: [21.26, 42.01]
}, {
    name: "马里",
    position: [-7.55, 12.34]
}, {
    name: "马来西亚",
    position: [101.41, 3.09]
}, {
    name: "马拉维",
    position: [33.48, -14.00]
}, {
    name: "马耳他",
    position: [14.31, 35.54]
}, {
    name: "马尔代夫",
    position: [73.28, 4.00]
}, {
    name: "马达加斯加",
    position: [47.31, -18.55]
}, {
    name: "罗马尼亚",
    position: [26.10, 44.27]
}, {
    name: "卢旺达",
    position: [30.04, -1.59]
}, {
    name: "卢森堡",
    position: [6.09, 49.37]
}, {
    name: "列支敦士登",
    position: [9.31, 47.08]
}, {
    name: "利比里亚",
    position: [-10.47, 6.18]
}, {
    name: "立陶宛",
    position: [25.19, 54.38]
}, {
    name: "黎巴嫩",
    position: [35.31, 33.53]
}, {
    name: "老挝",
    position: [102.36, 17.58]
}, {
    name: "莱索托",
    position: [27.30, -29.18]
}, {
    name: "拉脱维亚",
    position: [24.08, 56.53]
}, {
    name: "肯尼亚",
    position: [36.48, -1.17]
}, {
    name: "克罗地亚",
    position: [15.58, 45.50]
}, {
    name: "科威特",
    position: [48.00, 29.30]
}, {
    name: "科特迪瓦",
    position: [-5.17, 6.49]
}, {
    name: "科摩罗",
    position: [43.16, -11.40]
}, {
    name: "开曼群岛",
    position: [-81.24, 19.20]
}, {
    name: "卡塔尔",
    position: [51.35, 25.15]
}, {
    name: "喀麦隆",
    position: [11.35, 3.50]
}, {
    name: "津巴布韦",
    position: [31.02, -17.43]
}, {
    name: "捷克共和国",
    position: [14.22, 50.05]
}, {
    name: "柬埔寨",
    position: [104.55, 11.33]
}, {
    name: "加蓬",
    position: [9.26, 0.25]
}, {
    name: "加纳",
    position: [-0.06, 5.35]
}, {
    name: "加拿大",
    position: [-75.42, 45.27]
}, {
    name: "几内亚比绍",
    position: [-15.45, 11.45]
}, {
    name: "几内亚",
    position: [-13.49, 9.29]
}, {
    name: "吉尔吉斯斯坦",
    position: [74.46, 42.54]
}, {
    name: "吉布提",
    position: [42.20, 11.08]
}, {
    name: "基里巴斯",
    position: [173.00, 1.30]
}, {
    name: "洪都拉斯",
    position: [-87.14, 14.05]
}, {
    name: "赫德岛和麦当劳群岛",
    position: [74.00, -53.00]
}, {
    name: "荷属安的列斯",
    position: [-69.00, 12.05]
}, {
    name: "荷兰",
    position: [4.54, 52.23]
}, {
    name: "韩国",
    position: [126.58, 37.31]
}, {
    name: "海地",
    position: [-72.20, 18.40]
}, {
    name: "哈萨克斯坦",
    position: [71.30, 51.10]
}, {
    name: "圭亚那",
    position: [-58.12, 6.50]
}, {
    name: "瓜德罗普岛",
    position: [-61.44, 16.00]
}, {
    name: "古巴",
    position: [-82.22, 23.08]
}, {
    name: "根西岛",
    position: [-2.33, 49.26]
}, {
    name: "格鲁吉亚",
    position: [44.50, 41.43]
}, {
    name: "格陵兰",
    position: [-51.35, 64.10]
}, {
    name: "哥斯达黎加",
    position: [-84.02, 9.55]
}, {
    name: "哥伦比亚",
    position: [-74.00, 4.34]
}, {
    name: "刚果",
    position: [15.12, -4.09]
}, {
    name: "刚果(扎伊尔)",
    position: [15.15, -4.20]
}, {
    name: "冈比亚",
    position: [-16.40, 13.28]
}, {
    name: "福克兰群岛(马尔维纳斯群岛)",
    position: [-59.51, -51.40]
}, {
    name: "佛得角",
    position: [-23.34, 15.02]
}, {
    name: "芬兰",
    position: [25.03, 60.15]
}, {
    name: "斐济",
    position: [178.30, -18.06]
}, {
    name: "菲律宾",
    position: [121.03, 14.40]
}, {
    name: "法属圭亚那",
    position: [-52.18, 5.05]
}, {
    name: "法属波利尼西亚",
    position: [-149.34, -17.32]
}, {
    name: "法罗群岛",
    position: [-6.56, 62.05]
}, {
    name: "法国",
    position: [2.20, 48.50]
}, {
    name: "厄立特里亚",
    position: [38.55, 15.19]
}, {
    name: "厄瓜多尔",
    position: [-78.35, -0.15]
}, {
    name: "俄罗斯",
    position: [37.35, 55.45]
}, {
    name: "多米尼加共和国",
    position: [-69.59, 18.30]
}, {
    name: "多米尼加",
    position: [-61.24, 15.20]
}, {
    name: "多哥",
    position: [1.20, 6.09]
}, {
    name: "东帝汶",
    position: [125.34, -8.29]
}, {
    name: "德国",
    position: [13.25, 52.30]
}, {
    name: "丹麦",
    position: [12.34, 55.41]
}, {
    name: "赤道几内亚",
    position: [8.50, 3.45]
}, {
    name: "朝鲜",
    position: [125.30, 39.09]
}, {
    name: "布隆迪",
    position: [29.18, -3.16]
}, {
    name: "布基纳法索",
    position: [-1.30, 12.15]
}, {
    name: "不丹",
    position: [89.45, 27.31]
}, {
    name: "博茨瓦纳",
    position: [25.57, -24.45]
}, {
    name: "伯利兹",
    position: [-88.30, 17.18]
}, {
    name: "玻利维亚",
    position: [-68.10, -16.20]
}, {
    name: "波斯尼亚和黑塞哥维那",
    position: [18.26, 43.52]
}, {
    name: "波兰",
    position: [21.00, 52.13]
}, {
    name: "波多黎各",
    position: [-66.07, 18.28]
}, {
    name: "冰岛",
    position: [-21.57, 64.10]
}, {
    name: "比利时",
    position: [4.21, 50.51]
}, {
    name: "比勒陀利亚",
    position: [28.12, -25.44]
}, {
    name: "贝宁",
    position: [2.42, 6.23]
}, {
    name: "北马里亚纳群岛",
    position: [145.45, 15.12]
}, {
    name: "保加利亚",
    position: [23.20, 42.45]
}, {
    name: "白俄罗斯",
    position: [27.30, 53.52]
}, {
    name: "巴西",
    position: [-47.55, -15.47]
}, {
    name: "巴拿马",
    position: [-79.25, 9.00]
}, {
    name: "巴林",
    position: [50.30, 26.10]
}, {
    name: "巴拉圭",
    position: [-57.30, -25.10]
}, {
    name: "巴基斯坦",
    position: [73.10, 33.40]
}, {
    name: "巴哈马",
    position: [-77.20, 25.05]
}, {
    name: "巴布亚新几内亚",
    position: [147.08, -9.24]
}, {
    name: "巴巴多斯",
    position: [-59.30, 13.05]
}, {
    name: "澳大利亚",
    position: [149.08, -35.15]
}, {
    name: "奥地利",
    position: [16.22, 48.12]
}, {
    name: "安提瓜和巴布达",
    position: [-61.48, 17.20]
}, {
    name: "安哥拉",
    position: [13.15, -8.50]
}, {
    name: "安道尔",
    position: [1.32, 42.31]
}, {
    name: "爱沙尼亚",
    position: [24.48, 59.22]
}, {
    name: "爱尔兰",
    position: [-6.15, 53.21]
}, {
    name: "埃塞俄比亚",
    position: [38.42, 9.02]
}, {
    name: "埃及",
    position: [31.14, 30.01]
}, {
    name: "阿塞拜疆",
    position: [49.56, 40.29]
}, {
    name: "阿曼",
    position: [58.36, 23.37]
}, {
    name: "阿鲁巴",
    position: [-70.02, 12.32]
}, {
    name: "阿联酋",
    position: [54.22, 24.28]
}, {
    name: "阿拉伯叙利亚共和国",
    position: [36.18, 33.30]
}, {
    name: "阿拉伯利比亚民众国",
    position: [13.07, 32.49]
}, {
    name: "阿根廷",
    position: [-60.00, -36.30]
}, {
    name: "阿富汗",
    position: [69.11, 34.28]
}, {
    name: "阿尔及利亚",
    position: [3.08, 36.42]
}, {
    name: "阿尔巴尼亚",
    position: [19.49, 41.18]
}]