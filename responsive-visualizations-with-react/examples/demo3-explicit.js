import React from 'react'
import { VictoryChart, VictoryLine } from 'victory/dist/victory'
import Resizable from 'react-resizable-box'
import ContainerDimensions from 'react-container-dimensions'
export default <Resizable width={800} height={400} customClass="border">
    <ContainerDimensions>
      { ({ width, height }) => (
        <VictoryChart width={width} height={height}>
          <VictoryLine y={(data) => Math.sin(1.5 * Math.PI * data.x)}/>
        </VictoryChart>
      )}
    </ContainerDimensions>
  </Resizable>
