{
  type GenericObject<T> = Array<T>;

  interface Parents {
    name: string;
    contact: string;
    email: string;
  }
  const Parents: GenericObject<Parents> = [
    {
      name: "John Doe",
      contact: "1234567890",
      email: "",
    },
    {
      name: "John Doe",
      contact: "1234567890",
      email: "",
    },
    {
      name: "John Doe",
      contact: "1234567890",
      email: "",
    },
  ];

  interface Developer<T> {
    name: string;
    age: number;
    skills: string[];
    devices: T;
  }
  interface DeveloperOneDevices {
    laptop: string;
    laptopModel: string;
    phone: string;
    phoneModel: string;
    smartWatch: string;
    smartWatchModel: string;
  }
  interface DeveloperTwoDevices {
    laptop: string;
    laptopModel: string;
    phone: string;
    phoneModel: string;
    smartWatch: string;
    smartWatchModel: string;
    car: string;
    carModel: string;
  }

  const developer1: Developer<DeveloperOneDevices> = {
    name: "John Doe",
    age: 25,
    skills: ["JavaScript", "TypeScript", "React"],
    devices: {
      laptop: "Dell",
      laptopModel: "XPS 13",
      phone: "iPhone",
      phoneModel: "12 Pro",
      smartWatch: "Apple Watch",
      smartWatchModel: "Series 6",
    },
  };
  const developer2: Developer<DeveloperTwoDevices> = {
    name: "John Doe",
    age: 25,
    skills: ["JavaScript", "TypeScript", "React"],
    devices: {
      laptop: "Dell",
      laptopModel: "XPS 13",
      phone: "iPhone",
      phoneModel: "12 Pro",
      smartWatch: "Apple Watch",
      smartWatchModel: "Series 6",
      car: "Tesla",
      carModel: "Model S",
    },
  };
}
