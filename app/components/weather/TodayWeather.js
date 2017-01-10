/**
 * Created by daijiaru on 2016/10/24.
 */
let React=require('react');
let TodayWeather=React.createClass({
    render:function () {

        return(
            <div className="">
                <div className="weather_img" style={{backgroundPosition:this.props.pos}}></div>
                <p className="wendu">{this.props.wendu} ℃</p>
                <span className="type">{this.props.todayYear+'年'+this.props.todayMonth+'月'+this.props.todayDate} | {this.props.todayType}</span>
                <span  className="type">{this.props.ganmao}</span>
            </div>
        );
    }
});

module.exports=TodayWeather;