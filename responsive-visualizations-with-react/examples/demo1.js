import React from 'react'
import { VictoryChart, VictoryLine } from 'victory/dist/victory'
export default <VictoryChart width={800} height={400}>
  <VictoryLine y={(data) => Math.sin(1.5 * Math.PI * data.x)} />
</VictoryChart>
