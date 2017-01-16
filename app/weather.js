/**
 * Created by Administrator on 2016/10/24.
 */
let  React = require('react');
let  ReactDOM = require('react-dom');
let Weather=require('./components/weather/index');

let render = () => {
    ReactDOM.render(
        <div>
            <Weather url="http://wthrcdn.etouch.cn/weather_mini?city="/>
        </div>
        ,
        document.getElementById('content')
    );
};

if (module.hot) {
    // Support hot reloading of components
    // and display an overlay for runtime errors
    const renderApp = render;
    render = () => {
        try {
            renderApp();
        } catch (error) {
            console.error(error);
        }
    }
    const rerender = () => {
        setTimeout(render);
    }
    module.hot.accept('./components/weather/index', rerender);
}

render();