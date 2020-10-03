export class Utils {
  public static findMax(...args: number[]): number {
    return [...args].reduce((a, b) => a < b ? b : a)
  }

  public static findMin(...args: number[]): number {
    return [...args].reduce((a, b) => a > b ? b : a)
  }

  public static reformatData(x: any): Record<string, any> {
    const result = x.reduce((h, data) => Object.assign(h, { [data.role]: (h[data.role] || []).concat({ nickname: data.name }) }), {})
    return result
  }
  public static findExpectedNumber(args: number[], x): any {
    console.log(args);

    args.forEach(m => {
      
    })
    return []
  }
}

export default Utils

