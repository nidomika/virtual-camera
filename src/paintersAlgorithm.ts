import Polygon from './polygon'

export default function paintersAlgorithm(poly1: Polygon, poly2: Polygon) {
  // compare function for sorting polygons
  if (poly1.maxZ() < poly2.minZ()) {
    return 1
  }

  if (poly1.distanceToObserver() > poly2.distanceToObserver()) {
    return -1
  }

  if (poly1.distanceToObserver() < poly2.distanceToObserver()) {
    return 1
  } else {
    return 0
  }
}
