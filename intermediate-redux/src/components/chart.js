import _Loadash from 'lodash';
import React from 'react';
import {
    Sparklines,
    SparklinesLine,
    SparklinesReferenceLine } from 'react-sparklines';

/**
 * @param  {Object} data from props
 * @returns {Number} average data
 */
function average(data) {
    return _Loadash.round(_Loadash.sum(data) / data.length);
}

export default (props) =>
        <div>
            <Sparklines data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>;


