export default [
    {
        name: 'enviromentTexture',
        type: 'cubeTexture',
        path: [
            'textures/environmentMap/px.jpg',
            'textures/environmentMap/nx.jpg',
            'textures/environmentMap/py.jpg',
            'textures/environmentMap/ny.jpg',
            'textures/environmentMap/pz.jpg',
            'textures/environmentMap/nz.jpg'
        ]
    },

    {
        name: 'bakedTexture',
        type: 'texture',
        path: ['models/coffeebag/baked.jpg']
    },

    {
        name: 'matCapEarthTexture',
        type: 'texture',
        path: ['textures/matcaps/pink_matcap.png']
    },

    {
        name: 'matCapWaterTexture',
        type: 'texture',
        path: ['textures/matcaps/darkgreen_matcap.png']
    },

    {
        name: 'matCapBeanTexture',
        type: 'texture',
        path: ['textures/matcaps/bean_matcap01.png']
    },

    // 3D Models

    {
        name: 'coffeeBagModel',
        type: 'gtlfModel',
        path: 'models/coffeebag/coffee_bag_bake.glb'
    },

    {
        name: 'coffeeBeansModel',
        type: 'gtlfModel',
        path: 'models/coffeebag/beans.glb'
    },

    {
        name:'globeModel',
        type: 'gtlfModel',
        path: 'models/globe.glb'
    }

]