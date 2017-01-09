/**
 * Created by Administrator on 2016/10/24.
 */
var  React = require('react');
var  ReactDOM = require('react-dom');
var Weather=require('./components/weather/index')

ReactDOM.render(
    <div>
        <Weather url="http://wthrcdn.etouch.cn/weather_mini?city="/>
    </div>
    ,
    document.getElementById('content')
)