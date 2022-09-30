const products = [
    {
        id: '1',
        name: 'Tarjeta de Video Gigabyte',
        price: 2500,
        category: 'tarjeta',
        stock: 30,
        description: 'Laptop diseñada para escolares',
        img: '/images/equipo1.jpg',
    },
    {
        id: '2',
        name: 'Tarjeta de Video asus',
        price: 3000,
        category: 'tarjeta',
        stock: 30,
        description: 'Laptop diseñada para escolares',
        img: '/images/equipo2.jpg',
    },
    {
        id: '3',
        name: 'Mouse G502 Logitech',
        price: 250,
        category: 'mouse',
        stock: 30,
        description: 'Laptop diseñada para escolares',
        img: '/images/g305.webp',
    },
    {
        id: '4',
        name: 'Mouse Logitech',
        price: 2500,
        category: 'mouse',
        stock: 30,
        description: 'Laptop diseñada para escolares',
        img: '/images/equipo4.jpg',
    },
    {
        id: '5',
        name: 'Audifonos Hyperx',
        price: 280,
        category: 'audifonos',
        stock: 30,
        description: 'Laptop diseñada para escolares',
        img: '/images/equipo5.jpg',
    },
    {
        id: '6',
        name: 'Procesador ryzen',
        price: 2500,
        category: 'procesador',
        stock: 30,
        description: 'Laptop diseñada para escolares',
        img: '/images/equipo6.jpg',
    },
    {
        id: '7',
        name: 'Teclado HyperX Alloy FPS Pro',
        price: 700,
        category: 'teclado',
        stock: 30,
        description: 'Laptop diseñada para escolares',
        img: '/images/tecladohyperx.jpg',
    },


]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
         }, 500)
    })
}
export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}