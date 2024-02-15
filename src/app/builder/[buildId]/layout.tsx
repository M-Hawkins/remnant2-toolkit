import { Metadata, ResolvingMetadata } from 'next'

import { isErrorResponse } from '@/features/error-handling/isErrorResponse'
import { PageHeader } from '@/features/ui/PageHeader'

import { getBuild } from '../actions'
import BuildPage from './page'

export async function generateMetadata(
  { params: { buildId } }: { params: { buildId: string } },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const buildData = await getBuild(buildId)
  if (isErrorResponse(buildData)) {
    console.error(buildData.errors)
    return {
      title: 'Private Build',
      description: 'This build is private.',
      openGraph: {
        title: 'Private Build',
        description: 'This build is private.',
        url: `https://remnant2toolkit.com/builder/${buildId}`,
        images: [
          {
            url: 'https://d2sqltdcj8czo5.cloudfront.net/toolkit/og-image-sm.jpg',
            width: 150,
            height: 150,
          },
        ],
        type: 'website',
      },
      twitter: {
        title: 'Private Build',
        description: 'This build is private.',
      },
    }
  }

  const { build } = buildData

  if (!build.isPublic) {
    return {
      title: 'Private Build',
      description: 'This build is private.',
      openGraph: {
        title: 'Private Build',
        description: 'This build is private.',
        url: `https://remnant2toolkit.com/builder/${build.id}`,
        images: [
          {
            url: 'https://d2sqltdcj8czo5.cloudfront.net/toolkit/og-image-sm.jpg',
            width: 150,
            height: 150,
          },
        ],
        type: 'website',
      },
      twitter: {
        title: 'Private Build',
        description: 'This build is private.',
      },
    }
  }

  // const previousOGImages = (await parent).openGraph?.images || []
  //const previousTwitterImages = (await parent).twitter?.images || []
  const title = `${build.name} by ${build.createdByDisplayName}`
  const description =
    build.description ??
    'A build for Remnant 2, generated by remnant2toolkit.com'

  return {
    title,
    description,
    openGraph: {
      title,
      description: description,
      siteName: 'Remnant 2 Toolkit',
      url: `https://remnant2toolkit.com/builder/${build.id}`,
      images: [
        {
          url: 'https://d2sqltdcj8czo5.cloudfront.net/toolkit/og-image-sm.jpg',
          width: 150,
          height: 150,
        },
      ],
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
  }
}

export default async function Layout({
  params: { buildId },
}: {
  params: { buildId: string }
}) {
  const buildData = await getBuild(buildId)
  if (isErrorResponse(buildData)) {
    console.error(buildData.errors)
    return (
      <div className="flex max-w-lg flex-col">
        <PageHeader
          title="Something went wrong!"
          subtitle="The build either can't be found or is marked private."
        />
      </div>
    )
  }
  const { build } = buildData

  return <BuildPage params={{ build }} />
}
