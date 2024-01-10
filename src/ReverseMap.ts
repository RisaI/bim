export default interface ReverseMap<K, V> {
  /**
   * @returns a boolean indicating whether an element with the specified key existed and has been removed or not.
   */
  deleteValue(value: V): boolean;

  /**
   * @return the key associated with a given value if the value is present in the map.
   */
  getKey(value: V): K | undefined;

  /**
   * @returns a boolean indicating whether an element with the specified value exists or not.
   */
  hasValue(value: V): boolean;
}
