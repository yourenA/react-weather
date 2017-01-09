/**
 * Created by daijiaru on 2016/10/24.
 */
var React=require('react');

var ChangeArea=React.createClass({
    handleChange:function (ev) {

        var ev = ev || window.event;
        ev.stopPropagation();
        var target = ev.target || ev.srcElement;
        if(target.nodeName.toLowerCase() == 'span'){
            this.props.changeWeatherShow();
            this.props.changeArea(target.textContent);
            this.props.showDialog();

        }
    },
    render:function () {
        var showChange=this.props.showChange;
        var flag='none';
        if(showChange){
            flag='block';
        }
        var citys=this.props.citys.map(function (city,index) {
            var ddContent=[];
            for(var i=0;i<city.city.length;i++){
                ddContent.push(<span key={i} className='city'>{city.city[i]}</span>);
            }
            return(
                <dl key={index}>
                    <dt>{city.provide}</dt>
                    <dd>
                        {ddContent}
                    </dd>
                </dl>
            );
        });
        return(
            <div className="dialog" onClick={this.props.showDialog} style={{display:flag}}>
                <div className="dialog-content" onClick={this.handleChange}>
                    {citys}
                </div>
            </div>
        );
    }
});

module.exports=ChangeArea;