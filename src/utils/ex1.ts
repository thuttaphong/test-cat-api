export class Utils {
  public static findMax(...args: number[]): number {
    return Math.max(...args)
  }

  public static findMin(...args: number[]): number {
    return Math.min(...args)
  }

  public static reformatData(x: any): Record<string, any> {
    const result = x.reduce((h, data) => Object.assign(h, { [data.role]:( h[data.role] || [] ).concat({nickname: data.name}) }), {})
    return result
  }
}

export default Utils

