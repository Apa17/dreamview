export function randomizeNumber(min: number, max: number): number {
  max = Math.floor(max);
  min = Math.ceil(min);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function addDays(date: Date, days: number) {
  date.setDate(date.getDate() + days);
  return date;
}

export function generateFunciones(
  maxDays: number,
  maxNumberOfFuncionesPerDay: number
): string[] {
  const funciones: string[] = [];
  const days: number = randomizeNumber(1, maxDays);

  for (let i = 0; i < days; i++) {
    const aux: number[] = [];
    const numberOfFuncionesPerDay: number = randomizeNumber(
      1,
      maxNumberOfFuncionesPerDay
    );
    while (aux.length < numberOfFuncionesPerDay) {
      const num = randomizeNumber(9, 23);
      if (aux.indexOf(num) === -1) aux.push(num);
    }
    const date = addDays(new Date(), i);
    aux.forEach((element) => {
      funciones.push(
        `${date.getDate()}/${
          date.getMonth() + 1
        }/${date.getFullYear()} - ${element}:00`
      );
    });
  }
  return funciones;
}

export function generateRandomBoolean(): boolean {
  return Math.random() < 0.5;
}

export function generateAsientos(): string[] {
  const asientos: string[] = [];
  const rows: string[] = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const columns: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  rows.forEach((row) => {
    columns.forEach((column) => {
      if (generateRandomBoolean())
        asientos.push(`Fila ${row}- Asiento ${column}`);
    });
  });
  return asientos;
}
