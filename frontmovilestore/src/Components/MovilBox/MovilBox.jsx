import React from 'react';
import { Card } from 'antd';

import state from '../state';



const MovilBox = ({movil}) => {

    return (
        <Card hoverable style={{width: 240,height: 365,margin:10}}
        cover={<img alt="movil_poster" src={movil.url_img} />}
        onClick={() => state.setMovie(movil)}>
        </Card>
    );
};

export default MovilBox;