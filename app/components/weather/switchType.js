/**
 * Created by daijiaru on 2016/10/25.
 */
function switchType(weatherType) {
    var pos='';
    switch(weatherType)
    {
    case '阵雨':
        pos='-200px -250px';
        break;
    case '晴':
        pos='0px 0px';
        break;
    case '多云':
        pos='-600px 0px';
        break;
    case '小雨':
        pos='-400px -250px';
        break;
    case '阴':
        pos='0px -250px';
        break;
    case '雨夹雪':
        pos='-200px -500px';
        break;
    case '中雨':
        pos='-200px -250px';
        break;
    default:
        pos='-200px -750px';
    }

    return pos;
}

module.exports=switchType;