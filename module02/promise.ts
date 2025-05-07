{
  const createPromise = () =>
    new Promise<string>((resolve, reject) => {
      const data: string = "blow my mind";
      if (data) {
        resolve(data);
      } else {
        reject("not found");
      }
    });

  const loadData = async () => {
    const response = await createPromise();
  };

  loadData();

  const getTodos = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
  };
  getTodos();
}
