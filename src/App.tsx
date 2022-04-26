import React, { useEffect, useState,  } from 'react';
import './App.css';
import NavbarClass from './components/Navbar';
import List from './components/List';
import UserContext from './context/UserContex';
import  Axios  from 'axios';

function App() {
  const [user, setUser] = useState<any>({
    name: {
        title: '',
        first: '',
        last: '',
    },
    picture: {
        large:'',
        medium:'',
        thumbnail:'',
    }
});

  useEffect(() => {
    Axios.get('https://randomuser.me/api/')
      .then((res) => {
        setUser(res.data.results[0]);
      });
  },[]);

  return (
    <UserContext.Provider value={user} >
      
    <NavbarClass imageUrl='https://logos-marcas.com/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png'/>
    <h1 className='text-center bg-light'>Welcome, {user.name.first}</h1>
    <h2 className='text-center bg-light'>Rick And Morty Character List</h2>
    <List/>
    </UserContext.Provider>
    
    
  );
}

export default App;
