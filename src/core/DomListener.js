export class DomListener {
  constructor($root) {
    if (!$root) {
      throw new Error(`No $root providet for DomListener`)
    }
    this.$root = $root
  }
}
