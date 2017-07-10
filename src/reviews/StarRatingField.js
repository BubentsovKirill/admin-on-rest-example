import React from 'react';
import Icon from 'material-ui/svg-icons/action/stars';


//TODO: создание рейтинга
const style = { opacity: 0.87, width: 20, height: 20 };
const StarRatingFiled = ({record}) => (
    <span>
        {/*создаем массив если record.rating = 3, то array.length = 3*/}
        {/*потом перебираем массив и выводим на каждый элемент иконку*/}
        {/*array.fill - заполняет весь массив одним значением*/}
        {Array(record.rating).fill(true).map((_, i) => <Icon key={i} style={style} />)}
    </span>
);

StarRatingFiled.defaultProps = {
    label: 'rating',
    source: 'rating',
    addLabel: true
};

export default StarRatingFiled;