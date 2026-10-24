import { useModuleTranslation } from '@lifeforge/localization'
import { Text } from '@lifeforge/ui'

export default function HoursAndMinutesFromSeconds({
  seconds,
  size = '4xl'
}: {
  seconds: number
  size?: '3xl' | '4xl'
}) {
  const { t } = useModuleTranslation()

  if (seconds === 0) {
    return (
      <Text color="muted" mr="md" size="xl">
        {t('units.noTime')}
      </Text>
    )
  }

  const hours = Math.floor(seconds / 60)

  const minutes = Math.floor(seconds % 60)

  return (
    <>
      {hours > 0 && (
        <>
          <Text size={size} weight="semibold">
            {hours.toLocaleString()}
          </Text>
          <Text as="span" color="muted" pl="xs" size="2xl">
            {t('units.h')}
          </Text>
        </>
      )}
      {hours > 0 && minutes > 0 && ' '}
      {minutes > 0 && (
        <>
          <Text size={size} weight="semibold">
            {minutes}
          </Text>
          <Text as="span" color="muted" pl="xs" size="2xl">
            {t('units.m')}
          </Text>
        </>
      )}
    </>
  )
}
