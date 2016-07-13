import React from 'react'
import Resizable from 'react-resizable-box'
import ContainerDimensions from 'react-container-dimensions'
export default <Resizable width={800} height={400} customClass="border">
    <ContainerDimensions>
      { ({ width, height }) => {
        const fontSize = Math.min(height, width) / 2
        return (
          <h2 style={{ fontSize }}>Resizable Title!</h2>
        )}
      }
    </ContainerDimensions>
  </Resizable>
