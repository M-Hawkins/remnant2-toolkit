import Tooltip from '@/features/ui/Tooltip'
import Image from 'next/image'
import { POPULAR_VOTE_THRESHOLD } from '../constants'

export default function PopularBuildBadge() {
  return (
    <Tooltip
      content={
        <span className="rounded-md border-2 border-cyan-500 bg-black p-2">
          Awarded to builds that exceed {POPULAR_VOTE_THRESHOLD} favorites!
        </span>
      }
    >
      <Image
        src={`https://${process.env.NEXT_PUBLIC_IMAGE_URL}/badges/crystal_small.png`}
        width={43}
        height={50}
        alt="image denoting the build is popular"
      />
    </Tooltip>
  )
}
