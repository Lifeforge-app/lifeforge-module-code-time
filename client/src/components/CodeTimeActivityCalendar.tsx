import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { ActivityCalendar, Widget, WithQuery } from '@lifeforge/ui'

import { forgeAPI } from '@/manifest'

const target = forgeAPI.getActivities

function CodeTimeActivityCalendar() {
  const [year, setYear] = useState(new Date().getFullYear())

  const dataQuery = useQuery(
    target
      .input({
        year: year.toString()
      })
      .queryOptions({
        refetchInterval: 60 * 1000
      })
  )

  return (
    <Widget
      gridColumnSpan={{ base: 1, lg: 2 }}
      icon="tabler:activity"
      title="activitiesCalendar"
    >
      <WithQuery query={dataQuery}>
        {({ data: activities, firstYear }) => (
          <ActivityCalendar
            blockMargin={5}
            blockSize={16}
            data={activities}
            firstYear={firstYear}
            height="15rem"
            labels={{
              totalCount: `${
                Math.floor(
                  activities.reduce((a, b) => a + b.count, 0) / 60
                ) > 0
                  ? `${Math.floor(
                      activities.reduce((a, b) => a + b.count, 0) / 60
                    )} hours`
                  : ''
              } ${
                Math.floor(
                  activities.reduce((a, b) => a + b.count, 0) % 60
                ) > 0
                  ? `${Math.floor(
                      activities.reduce((a, b) => a + b.count, 0) % 60
                    )} minutes`
                  : ''
              } ${
                activities.reduce((a, b) => a + b.count, 0) === 0
                  ? 'no time'
                  : ''
              } spent on {{year}}`
            }}
            maxLevel={6}
            tooltipContent={activity =>
              `${
                Math.floor(activity.count / 60) > 0
                  ? `${Math.floor(activity.count / 60)} hours`
                  : ''
              } ${
                Math.floor(activity.count % 60) > 0
                  ? `${Math.floor(activity.count % 60)} minutes`
                  : ''
              } ${activity.count === 0 ? 'no time' : ''} spent on ${
                activity.date
              }`.trim()
            }
            year={year}
            onYearChange={setYear}
          />
        )}
      </WithQuery>
    </Widget>
  )
}

export default CodeTimeActivityCalendar
