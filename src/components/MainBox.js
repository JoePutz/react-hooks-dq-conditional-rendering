import React, {useState} from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */

    const [childName, setChildName] =useState(Profile)

    function makeProfileFocus() {
      setChildName(Profile)
    }
    function makeCocktailFocus() {
      setChildName(Cocktails)
    }

    function makePhotoFocus() {
      setChildName(Photos)
    }

    function makePokemonFocus() {
      setChildName(Pokemon)
    }

  // let detailsToDisplay = <div>Hi, I'm a div!</div>;

  return (
    <div>
      <MenuBar onUserClick={makeProfileFocus} 
        onCocktailClick={makeCocktailFocus}
        onPhotoClick={makePhotoFocus}
        onPokemonClick={makePokemonFocus}/>
      {childName}
    </div>
  );
}

export default MainBox;
