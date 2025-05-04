{
  const searchName = (name: string | undefined) => {
    if (name) {
      console.log(`Searching for ${name}`);
    } else {
      console.log(`Searching for an unknown name`);
    }
  };
  searchName("John Doe");
  searchName(""); // This will not throw an error, but it will log "Searching for an unknown name"
  searchName(undefined); // This will throw an error because undefined is not assignable to type 'string'
}
