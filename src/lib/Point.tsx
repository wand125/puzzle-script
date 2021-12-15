export class Point {
  x: number;
  y: number;
  type: any;
  type2: number;
  adjacent: any;
  adjacent_dia: never[];
  surround: any;
  neighbor: never[];
  use: any;
  constructor(
    x: number,
    y: number,
    type: any,
    adjacent: any,
    surround: any,
    use: any,
    neighbor = [],
    adjacent_dia = [],
    type2 = 0
  ) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.type2 = type2;
    this.adjacent = adjacent;
    this.adjacent_dia = adjacent_dia;
    this.surround = surround;
    this.neighbor = neighbor;
    this.use = use;
  }
}
