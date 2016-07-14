import React from 'react'
import ContainerDimensions from 'react-container-dimensions'
export default <div className="border" style={{ width: 800, height: 400 }}>
    <ContainerDimensions>
      { ({ width, height }) =>
        <svg viewBox={`0 0 ${width} ${height}`}>
          <circle cx={width / 2} cy={height / 2} r={Math.min(width, height) / 4} />
        </svg>
      }
    </ContainerDimensions>
  </div>
