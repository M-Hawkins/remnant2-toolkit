import Image from 'next/image'

import { Tooltip } from '@/features/ui/Tooltip'

export function NewBuildBadge({
  unoptimized = false,
}: {
  unoptimized?: boolean
}) {
  return (
    <Tooltip content={`Denotes a build created in the past 24 hours.`}>
      <button aria-label="Badge denoting the build is a new build in the toolkit.">
        <Image
          src={`https://${process.env.NEXT_PUBLIC_IMAGE_URL}/badges/new_build_badge.png`}
          width={50}
          height={50}
          alt="image denoting the build was created in the past 24 hours"
          loading="eager"
          unoptimized={unoptimized}
        />
      </button>
    </Tooltip>
  )
}
