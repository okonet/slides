import React from 'react'
import { VictoryChart, VictoryLine } from 'victory/dist/victory'
import Resizable from 'react-resizable-box'
export default <Resizable width={800} height={400} customClass="border">
    <VictoryChart width={800} height={400}>
      <VictoryLine y={(data) => Math.sin(1.5 * Math.PI * data.x)} />
    </VictoryChart>
  </Resizable>
