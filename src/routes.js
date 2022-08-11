import Home from './pages/home/Home';
import UsersList from './pages/users/UserList'
import NewUser from './pages/new-user/NewUser'
import Products from './pages/products/Products'

let routes = [
    { path: '/', element: <Home/> },
    { path: '/users', element: <UsersList/> },
    { path: '/newUser', element: <NewUser/> },
    { path: '/products', element: <Products/> },
];

export default routes;
