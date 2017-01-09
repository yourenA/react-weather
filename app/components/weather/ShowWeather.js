/**
 * Created by daijiaru on 2016/10/24.
 */
var React=require('react');
var Loading=require('./Loading');
var switchType=require('./switchType');
var TodayWeather=require('./TodayWeather');
var ShowWeather=React.createClass({
    render:function () {
        var newWeather=this.props.forecast;
        var date=new Date();
        var todayYear=date.getFullYear();
        var todayMonth=date.getMonth()+1;
        var todayType='';
        var todayDate='';
        var pos='';
        if(newWeather[0]){//这里要加一个判断，因为第一次的时候还没有数据,直接使用newWeather[0].type会出错
            todayType=newWeather[0].type;
            todayDate=newWeather[0].date;
            pos=switchType(todayType);
        }
        var SixWeathers=newWeather.map(function (weather,index) {
            var fl=weather.fl || weather.fengli;
            var fx=weather.fx || weather.fengxiang;
            var dw=weather.low.slice(3);
            var gw=weather.high.slice(3);
            return(
                <li key={index} className="item">
                    <ul>
                        <li>{weather.date}</li>
                        <li>{weather.type}</li>
                        <li>{dw}</li>
                        <li>{gw}</li>
                        <li>{fl}</li>
                        <li>{fx}</li>
                    </ul>
                </li>
                );

        }.bind(this));
        var flag='none';
        var showWeather=this.props.showWeather;
        if(showWeather){
            flag='block';
        }
        return(
            <div>
                <Loading showWeather={this.props.showWeather} />
                <div className="weather" style={{display:flag}}>
                    <TodayWeather pos={pos} wendu={this.props.wendu} todayYear={todayYear} todayMonth={todayMonth} todayDate={todayDate} todayType={todayType} ganmao={this.props.ganmao} />
                    <ul className="list">
                        <li  className="item">
                            <ul>
                                <li>日期</li>
                                <li>天气</li>
                                <li>低温</li>
                                <li>高温</li>
                                <li>风力</li>
                                <li>风向</li>
                            </ul>
                        </li>
                        {SixWeathers}
                    </ul>
                </div>
            </div>

        );
    }
});

module.exports=ShowWeather;