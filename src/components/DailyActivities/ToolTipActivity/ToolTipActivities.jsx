import React from 'react'
import './toolTipActivity.css'

export function ToolTipActivities ({active, payload}){
  if (active) {
    return (
      <div className="tooltip_activities">
            <p className="label label_activities">{`${payload[0].value}kg`}</p>
            <p className="label label_activities">{`${payload[1].value}Kcal`}</p>
          </div>
    );
}
}