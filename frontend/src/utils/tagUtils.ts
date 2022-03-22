import { ChipProps } from "../components/Chip/Chip";

export function getUniqueTags(tags: ChipProps[][]): ChipProps[] {
  if (tags.length === 0) {
    return [];
  }

  return [
    ...new Map(
      tags
        .reduce((acc, cur) => acc.concat(cur))
        .map((item) => [item.slug, item])
    ).values(),
  ];
}
