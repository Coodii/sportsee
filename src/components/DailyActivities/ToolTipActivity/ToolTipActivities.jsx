import React from 'react'
import './toolTipActivity.css'

export const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="toolTip-activities">
            <p className="label label_activities">{`${payload[0].value}kg`}</p>
            <p className="label label_activities">{`${payload[1].value}Kcal`}</p>
          </div>
    );
}
}