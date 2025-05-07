{
  const addCourseToStudent = <
    T extends {
      name: string;
      gmail: string;
    }
  >(
    student: T
  ) => {
    const course: string = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "Helen",
    gmail: "helen@mail.com",
    userId: "helen123",
  });
  const student2 = addCourseToStudent({
    name: "Jelen",
    gmail: "jelen@gmail.com",
    passId: "jelen123",
  });

  const student3 = addCourseToStudent({
    name: "Jelen",
    gmail: "",
  });
}
