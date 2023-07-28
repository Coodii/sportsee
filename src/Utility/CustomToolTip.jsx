import React from 'react'
import './customToolTip.css'

export const CustomLegend = ({payload}) => {
    return (
        <div className="radialChart__legend">
        <p className="radialChart__legend-value">{payload[0]?.payload.score}% </p>
        <p className="radialChart__legend-label">de votre objectif</p>
      </div>
    );
}