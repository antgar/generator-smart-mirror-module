// Made by Antoine Garcia in 2016
import Module from '../Module';

class <%= module %> extends Module{
  constructor(){
    super()
    this.name = '<%= module %>';
    this.options = {
        text: '<%= module %>'
    };
  }
  start(mc){
    this.mc = mc; //You can use this.mc.updateDom(this) everywhere in your code.
  }

  //Return the DOM to display in this method.
  generateDisplay(){
    var wrapper = document.createElement("div");
		wrapper.innerHTML = this.options.text;
		return wrapper;
  }

  //Return the scripts you need (your scripts needs to be present in your folder).
  getScripts(){
    return [];
  }

  //Return the styles you need (your files needs to be present in your folder).
  getCSS(){
    return [];
  }
}
module.exports = <%= module %>;
