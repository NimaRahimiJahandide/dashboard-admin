let xAxisData = [
    {
        "name": 'Jane', 'Sale' : 112_000
    },
    {
        "name": 'Feb', 'Sale' : 99_000
    },
    {
        "name": 'Mar', 'Sale' : 12_000
    },
    {
        "name": 'Apr', 'Sale' : 90_000
    },
    {
        "name": 'May', 'Sale' : 54_000
    },
    {
        "name": 'Jun', 'Sale' : 85_000
    },
    {
        "name": 'Jul', 'Sale' : 34_000
    },
    {
        "name": 'Agu', 'Sale' : 18_550
    },
    {
        "name": 'Sep', 'Sale' : 0
    },
    {
        "name": 'Oct', 'Sale' : 74_320
    },
    {
        "name": 'Nov', 'Sale' : 12_900
    },
    {
        "name": 'Dev', 'Sale' : 30_000
    },
]

const newMembers = [
    { 
        id : 1,
        username : 'Anna Keller',
        title: 'Software Engineer',
        img: 'images/user.png',
    },
    { 
        id : 2,
        username : 'Alex Smith',
        title: 'Web Developer',
        img: 'images/user.png',
    },
    { 
        id : 3,
        username : 'Luis Alberto',
        title: 'SEO Engineer',
        img: 'images/user.png',
    },
    { 
        id : 4,
        username : 'Walter White',
        title: 'Hackers',
        img: 'images/user.png',
    }
]

const transactions = [
    {
        id: 1,
        username: 'Anna Keller',
        date: '2 Jun 2021',
        amount: 112,
        status: 'Approved',
        img: 'images/user.png',
    },
    {
        id: 2,
        username: 'Alex Smith',
        date: '5 Aug 2022',
        amount: 24,
        status: 'Pending',
        img: 'images/user.png',
    },
    {
        id: 3,
        username: 'Luis Alberto',
        date: '10 May 2020',
        amount: 224,
        status: 'Declined',
        img: 'images/user.png',
    },
    {
        id: 4,
        username: 'Walter White',
        date: '9 Mar 2021',
        amount: 98,
        status: 'Approved',
        img: 'images/user.png',
    },
]

let userRows = [
    {
        id: 1,
        username: 'Anna Keller',
        avatar: 'images/user.png',
        status: 'active',
        transaction: '$112.00',
        email: 'Email@email.com'
    },
    {
        id: 2,
        username: 'Alex Smith',
        avatar: 'images/user.png',
        status: 'non-active',
        transaction: '$120.00',
        email: 'Email@email.com'
    },
    {
        id: 3,
        username: 'Luis Alberto',
        avatar: 'images/user.png',
        status: 'active',
        transaction: '$98.00',
        email: 'Email@email.com'
    },
    {
        id: 4,
        username: 'Walter White',
        avatar: 'images/user.png',
        status: 'active',
        transaction: '0.00',
        email: 'Email@email.com'
    },
    {
        id: 5,
        username: 'Nina Jones',
        avatar: 'images/user.png',
        status: 'non-active',
        transaction: '$55.98',
        email: 'Email@email.com'
    }
]

let products = [
    {
        id: 1,
        name: 'Apple Airpods',
        avatar: 'images/airpod.jpg',
        price: 198,
    },
    {
        id: 2,
        name: 'Acer Laptop',
        avatar: 'images/acer.jpg',
        price: 898,
    },
    {
        id: 3,
        name: 'Dell Laptop',
        avatar: 'images/dell.jpg',
        price: 1098,
    },
    {
        id: 4,
        name: 'HP Laptop',
        avatar: 'images/hp.jpg',
        price: 998,
    },
    {
        id: 5,
        name: 'Huawei Laptop',
        avatar: 'images/Huawei.avif',
        price: 798,
    },
]

const productDate = [
    {
        name: 'Jan',
        sales: 3000,
    },
    {
        name: 'Feb',
        sales: 5000,
    },
    {
        name: 'Mar',
        sales: 2000,
    },
]

export {xAxisData, newMembers, transactions, userRows, products, productDate}