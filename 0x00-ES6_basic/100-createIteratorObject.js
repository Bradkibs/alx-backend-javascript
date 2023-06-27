export default function createIteratorObject(report) {
  const values = Object.values(report);
  let index = 0;

  const iteratorObject = {
    next() {
      if (index < values.length) {
        return {
          value: values[index++],
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };

  return iteratorObject;
}
