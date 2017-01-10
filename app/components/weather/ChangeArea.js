/**
 * Created by daijiaru on 2016/10/24.
 */
let React=require('react');

let ChangeArea=React.createClass({
    handleChange:function (ev) {

        var ev = ev || window.event;
        ev.stopPropagation();
        let target = ev.target || ev.srcElement;
        if(target.nodeName.toLowerCase() == 'span'){
            this.props.changeWeatherShow();
            this.props.changeArea(target.textContent);
            this.props.showDialog();

        }
    },
    render:function () {
        let showChange=this.props.showChange;
        let flag='none';
        if(showChange){
            flag='block';
        }
        let citys=this.props.citys.map(function (city,index) {
            let ddContent=[];
            for(let i=0;i<city.city.length;i++){
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