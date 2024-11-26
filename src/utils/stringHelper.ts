export function buildPathArray(path: string): string[] {
  return path.split("/").reduce((acc: string[], cur: string) => {
    if (cur === "") return acc;

    const newPath = `/${cur}`;
    const fullPath = acc.length > 0 ? `${acc[acc.length - 1]}${newPath}` : newPath;
    acc.push(fullPath);

    return acc;
  }, []);
}
