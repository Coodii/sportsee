import React from 'react'
import './toolTipAverageSessions.css'

export default function ToolTipAverageSessions({active,payload}) {
    
    if (active) {
        return (
          <div className="tooltip_average_sessions">
            <p className="label label_average_sessions">{`${payload[0].value}min`}</p>
          </div>
        );
    }
}


