export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  let callCount = weakMap.get(endpoint);
  callCount += 1;

  weakMap.set(endpoint, callCount);

  if (callCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
