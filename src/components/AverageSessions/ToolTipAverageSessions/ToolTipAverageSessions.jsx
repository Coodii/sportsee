import React from 'react'
import './toolTipAverageSessions.css'

export default function ToolTipAverageSessions(content) {
    
    if (content.active && content.payload && content.payload.length) {
        return (
          <div className="toolTip-averageSessions">
            <p className="label label_averageSessions">{`${content.payload[0].value}min`}</p>
          </div>
        );
    }
}


