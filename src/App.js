import React from 'react'; 
import { Component } from 'react';
import Hello from './components/Hello';
import Home from './components/Home';
import AddComponent from './components/AddComponent';

import Calculator from './components/Calculator';

class App extends Component {
    render() { return (<Calculator />)}
       
}

// class App extends Component {
//     constructor(props) {
//         super(props); // call to the constructor of the parent class (i.e., React.Component), passing the props object as an argument.
//         this.state = {
//             color : 'black',
//             number : 0,
//         }
//     }

//     componentDidMount() {
//         setTimeout( () => {
//             this.setState({ color: 'pink'})
//         }, 5000
//         );
//     };

//     increase = () => {
//         this.setState({ number: this.state.number + 1});
//     };
    
//     decrease = () => {
//         this.setState({ number: this.state.number - 1 });
//     };
    

//     render() {
//         return (
//           <div>
//             <div
//               style={{
//                 backgroundColor: this.state.color,
//                 paddingTop: 100,
//                 width: 400,
//                 height: 80,
//                 margin: 'auto'
//               }}
//             />
//             <div style={{ textAlign: "center", padding: 30 }}>
//             <button onClick={this.decrease}>Decrease</button>
//             <span style={{ padding: 10 }}>{this.state.number}</span>
//             <button onClick={this.increase}>Increase</button>
//           </div> 
//           </div>
//         );
//       }
// }

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isLoggedIn : false
//         };
//     }

//     handleLogin = () => {
//         this.setState({ isLoggedIn : true})
//     }

//     handleLogout = () => {
//         this.setState({ isLoggedIn : false})
//     }

//     render () {
//         const { isLoggedIn } = this.state
//         if (isLoggedIn)
//         return (
//             <Home onLogOut={this.handleLogout}/>
//         )
//         return(
//               <div style={{textAlign: 'center'}}>
//         <div>
//             <h1>Please Log in</h1>
//             <button onClick={this.handleLogIn}>Log in</button>
//         </div>
//       </div>
//         )
//     }
// }



// class App extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         display: true
//       };
//     }
  
//     delete = () => {
//       this.setState({ display: false });
//     };
   
//     render() {
//       let comp;
//       if (this.state.display) {
//         comp = <Hello />;
//       }
//       return (
//         <div style={{ textAlign: 'center' }}>
//           {comp}
//           <button onClick={this.delete}>
//             Delete the component
//           </button>
//         </div>
//       );
//     }
//   }

// Thao tác tăng, giảm số sử dụng event

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             number : 0
//         };
//     }

//     increase = () => {
//         this.setState({ number: this.state.number + 1});
//     };
    
//     decrease = () => {
//         this.setState({ number: this.state.number - 1 });
//     };
    
//     render() {
//         return (
//           <div style={{ textAlign: "center", padding: 30 }}>
//             <button onClick={this.decrease}>Decrease</button>
//             <span style={{ padding: 10 }}>{this.state.number}</span>
//             <button onClick={this.increase}>Increase</button>
//           </div>
//         );
//       }    

// }

  export default App;