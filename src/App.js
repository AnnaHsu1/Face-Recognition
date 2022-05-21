import './App.css';
import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import SearchForm from './components/searchForm/SearchForm';
import Logo from './components/logo/Logo';
import Rank from './components/rank/Rank';
import FaceRecognition from './components/faceRecognition/FaceRecognition';
import SignIn from './components/signIn/SignIn';
import Register from './components/register/Register';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '', 
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  calculateFaceLocation = (data) => {
    const box = JSON.parse(data, null, 2).outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('face');
    const width = Number(image.width);
    const height = Number (image.height);
    
    return {
      left: box.left_col * width,
      right: width - (box.right_col * width),
      top: box.top_row * height,
      bottom: height - (box.bottom_row * height)
    }
  }

  displayBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  onSubmit = () => {
    // this.setState({imageUrl: this.state.input})
    // app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    // .then(response => this.displayBox(this.calculateFaceLocation(response)))
    // .catch(e => console.log(e));
    this.setState({imageUrl: this.state.input})
      const raw = JSON.stringify({
        user_app_id : {
          user_id: "pwj46293hwzb",
          app_id: "a8e76a50facd4dad87a54acd8548c081"
        },
        inputs: [
          {
            data: {
              image: {
                url: this.state.input
              },
            },
          },
        ],
      });
   
      fetch(
         "https://api.clarifai.com/v2/models/f76196b43bbd45c99b4f3cd8e8b40a8a/outputs",
         {
           method: "POST",
           headers: {
             Accept: "application/json",
             Authorization: "Key b401f24bc9ef48dab81f16da489ac802",
           },
           body: raw,
         }
       )
       .then((response) => response.text())
       .then((result) => this.displayBox(this.calculateFaceLocation(result)))
       .catch((error) => console.log("error", error));
    }

    onRouteChange = (route) => {
      if(route === 'signin')
        this.setState({isSignedIn: false})
      else if (route === 'home')
        this.setState({isSignedIn: true})
      
      this.setState({route: route});
    }


  render(){
    return (
      <div className="App">
        <Navigation onRouteChange = {this.onRouteChange} isSignedIn = {this.state.isSignedIn}/>
        {this.state.route === 'home' 
        ? <div>
          <Logo />
          <Rank />
          <SearchForm inputChange = {this.onInputChange} onSubmit = {this.onSubmit}/>
          <FaceRecognition imageUrl= {this.state.imageUrl} box= {this.state.box}/>
        </div>
        : (this.state.route === 'signin' 
        ? <SignIn onRouteChange = {this.onRouteChange}/>
        : <Register onRouteChange = {this.onRouteChange}/>
        )
      }
      </div>
    );
  }
}

export default App;
