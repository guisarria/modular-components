'use client'

import { Card, Title, BarChart, Subtitle } from '@tremor/react'

const chartdata2 = [
  {
    name: 'Topic 1',
    'Group A': 890,
    'Group B': 338,
    'Group C': 538,
    'Group D': 396,
    'Group E': 138,
    'Group F': 436,
  },
  {
    name: 'Topic 2',
    'Group A': 289,
    'Group B': 233,
    'Group C': 253,
    'Group D': 333,
    'Group E': 133,
    'Group F': 533,
  },
]

const dataFormatter = (number: number) => {
  return '$ ' + Intl.NumberFormat('us').format(number).toString()
}

export const BarChartTest = () => (
  <Card>
    <Title>Writing Contest: Entries</Title>
    <BarChart
      className="mt-6"
      data={chartdata2}
      index="name"
      categories={[
        'Group A',
        'Group B',
        'Group C',
        'Group D',
        'Group E',
        'Group F',
      ]}
      colors={['blue', 'teal', 'amber', 'rose', 'indigo', 'emerald']}
      valueFormatter={dataFormatter}
      yAxisWidth={48}
    />
  </Card>
)

import { Text, Metric, Flex, ProgressBar } from '@tremor/react'

export const Test2 = () => (
  <Card className="max-w-xs mx-auto">
    <Text>Sales</Text>
    <Metric>$ 71,465</Metric>
    <Flex className="mt-4">
      <Text>32% of annual target</Text>
      <Text>$ 225,000</Text>
    </Flex>
    <ProgressBar value={32} className="mt-2" />
  </Card>
)
