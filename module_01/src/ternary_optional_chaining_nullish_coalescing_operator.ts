{
  // Ternary Operator
  const age = 18;
  const canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
  console.log(canVote);

  // Optional Chaining
  const user = {
    name: "John",
    address: {
      city: "New York",
    },
  };
  console.log(user?.address?.city); // Output: New York
  console.log(user?.contact?.phone); // Output: undefined

  // Nullish Coalescing Operator
  const input = null;
  const defaultValue = input ?? "Default Value";
  console.log(defaultValue); // Output: Default Value

  // Combined Example
  const person = {
    name: "Alice",
    age: 20,
    contact: null,
  };

  // Using Ternary Operator
  const votingEligibility =
    person.age >= 18 ? "Eligible to vote" : "Not eligible to vote";
  console.log(votingEligibility); // Output: Eligible to vote

  // Using Optional Chaining
  const phoneNumber = person.contact?.phone;
  console.log(phoneNumber); // Output: undefined

  // Using Nullish Coalescing Operator
  const displayedPhoneNumber = phoneNumber ?? "No phone number provided";
  console.log(displayedPhoneNumber); // Output: No phone number provided
}
