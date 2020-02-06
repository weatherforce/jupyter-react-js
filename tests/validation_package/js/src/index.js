import JupyterReact from 'jupyter-react-js'
import Test from './test'

function load_ipython_extension(){
	requirejs([
	"base/js/namespace",
	"base/js/events",
	], function(Jupyter, events){
		JupyterReact.init(Jupyter, events, 'react.thing',{ Test });
	});
}


module.exports = {
	load_ipython_extension: load_ipython_extension
};
