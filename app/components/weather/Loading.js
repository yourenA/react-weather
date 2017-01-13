/**
 * Created by daijiaru on 2016/10/24.
 */

let ChangeArea=React.createClass({
    render:function () {
        let loading='block';
        let showWeather=this.props.showWeather;
        if(showWeather){
            loading='none';
        }
        return(
            <div className="loading" style={{display:loading}}>loading...</div>
        );
    }
});

module.exports=ChangeArea;