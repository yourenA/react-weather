/**
 * Created by daijiaru on 2016/10/24.
 */
var React=require('react');
var $=require('jquery');
var ShowArea=require('./ShowArea');
var ShowWeather=require('./ShowWeather');
var ChangeArea=require('./ChangeArea');
require('./index.scss');
var citys=require('./city');
var Weather=React.createClass({
    getInitialState:function(){
        return{
            showWeather:false,
            showChange:false,
            area:'广州',
            forecast:[],
            ganmao:'',
            wendu:'',
            yesterday:{},
            city:''
        };
    },
    showDialog:function () {
        this.setState({
            showChange:!this.state.showChange,
        });
    },
    changeWeather:function (area) {
        $.ajax({
            url:this.props.url+area,
            type:'POST',
            dataType:'jsonp',
            success:function (data) {
                console.log(data);
                if(data.status=='1002'){
                    alert('没有找到该城市,请重新选择');
                    this.showDialog();
                }else{
                    this.setState({
                        showWeather:true,
                        forecast:data.data.forecast,
                        ganmao:data.data.ganmao,
                        wendu:data.data.wendu,
                        yesterday:data.data.yesterday,
                        city:data.data.city
                    });
                }

            }.bind(this),
            error:function () {
                console.log('出错了');
            }.bind(this)
        });
    },
    changeWeatherShow:function () {
        this.setState({
            showWeather:false
        });
    },
    componentDidMount:function () {
        this.changeWeather('广州');
    },
    changeArea:function (area) {
        this.setState({
            area:area
        });
        this.changeWeather(area);
    },
    render:function () {
        return(
            <div>
                <ShowArea   showDialog={this.showDialog}  area={this.state.area} />
                <ChangeArea changeWeatherShow={this.changeWeatherShow}  citys={citys} showChange={this.state.showChange} showDialog={this.showDialog} changeArea={this.changeArea}/>
                <ShowWeather
                    city={this.state.city}
                    showWeather={this.state.showWeather}
                    area={this.state.area}
                    forecast={this.state.forecast}
                    ganmao={this.state.ganmao}
                    wendu={this.state.wendu}
                    yesterday={this.state.yesterday}
                />
            </div>
        );
    }
});

module.exports=Weather;