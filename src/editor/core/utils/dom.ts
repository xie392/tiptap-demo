export function getDatasetAttribute(attributeName: string) {
  return (element) => element.getAttribute(attributeName)
}
