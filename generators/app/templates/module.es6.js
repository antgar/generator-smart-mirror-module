// Made by Antoine Garcia in 2016
import Module from '../Module';

class <%= module %> extends Module{
  constructor(){
    super()
    this.name = <%= module %>;
    this.options = {
        text: <%= module %>
    };
  }
  start(mc){
    this.mc = mc;
  }

  generateDisplay(){
    var wrapper = document.createElement("div");
		wrapper.innerHTML = this.options.text;
		return wrapper;
  }

  getScripts(){
    return [];
  }

  getCSS(){
    return [];
  }
}
module.exports = <%= module %>;
