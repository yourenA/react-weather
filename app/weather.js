/**
 * Created by Administrator on 2016/10/24.
 */
let  React = require('react');
let  ReactDOM = require('react-dom');
let Weather=require('./components/weather/index');

ReactDOM.render(
    <div>
        <Weather url="http://wthrcdn.etouch.cn/weather_mini?city="/>
    </div>
    ,
    document.getElementById('content')
);