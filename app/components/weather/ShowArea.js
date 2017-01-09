/**
 * Created by daijiaru on 2016/10/24.
 */
var React=require('react');


var ShowArea=React.createClass({
    handClick:function () {
        this.props.showDialog();
    },
    render:function () {

        return(
            <div className="top">
                <button onClick={this.handClick}>切换城市</button><span>{this.props.area}</span>
            </div>
        );
    }
});

module.exports=ShowArea;