import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from './Login';
import { LogoutButton } from './Logout';
import { Profile } from './Profile';
import GETHIRED from './Icons/GETHIRED';

function App() {

const{ isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src="https://i.imgur.com/DlgU6sG.png"  alt="logo" /> */}
        <GETHIRED />

        

        { isAuthenticated?( 
        < >
        
        <Profile />
        <LogoutButton />
        
        </>
        ):(
          
          <LoginButton />
          
          )}     
      
      </header>
      <body className = "Body">
        <div className = "contenedor-body">
          <div className = "contenedor-hb">
            {/* <h1 className = "h1-body">Bienvenido a GETHIRED</h1> */}
            {/* <h3 className = "h3-body">Consigue el tarabajo de tus sueños!</h3> */}
            {/* <button className = "contenedor-button">Empecemos</button> */}
          </div>
          {/* <img className = "img-body" src = "https://www.trabajin.com/blog/wp-content/uploads/2021/05/que-es-una-landing-page-670x419-1.png"></img> */}
        </div>
      </body>
      <footer>
      
      </footer>
    </div>
  );
}

export default App;