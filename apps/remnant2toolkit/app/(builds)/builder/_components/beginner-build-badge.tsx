import { getImageUrl, Tooltip } from '@repo/ui';

export function BeginnerBuildBadge() {
  return (
    <Tooltip content={`Denotes a base game build.`}>
      <button aria-label="Badge denoting the build is a base game build.">
        <img
          src={getImageUrl(`/badges/beginner-build-badge.png`)}
          width={52}
          height={60}
          alt="Badge denoting the build is a base game build."
        />
      </button>
    </Tooltip>
  );
}
