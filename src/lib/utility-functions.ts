export async function sleep(ms: number = 80) {
  await new Promise((res) => setTimeout(res, ms));
}

export function debounce<Params extends unknown[]>(
  func: (...args: Params) => unknown,
  timeout: number = 300
): (...args: Params) => void {
  let timer: NodeJS.Timeout;
  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

export function getValue(object: any, path: string) {
  const keys = path.split(".");
  let value = object;
  for (const key of keys) {
    if (value[key]) value = value[key];
    else return undefined;
  }
  return value;
}
