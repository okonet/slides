import React from 'react'
import Resizable from 'react-resizable-box'
import ContainerDimensions from 'react-container-dimensions'
export default <Resizable width={800} height={400} customClass="border">
    <ContainerDimensions>
      { ({ width, height }) => (
        <svg viewBox={`0 0 ${width} ${height}`}>
          <circle cx={width / 2} cy={height / 2} r={Math.min(width, height) / 4} />
        </svg>
      )}
    </ContainerDimensions>
  </Resizable>
