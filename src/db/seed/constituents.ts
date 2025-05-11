function randomEmail(): string{
  const letters = 'abcdefghijklmnopqrstuvwxyz'
  let email = ''
  let domain = ''
  for (let i = 0; i < 10; i++) {
    email += letters[Math.floor(Math.random() * 26)]
    domain += letters[Math.floor(Math.random() * 26)]
  }
  return `${email}@${domain}.com`
}

const constituentData = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@test.com",
    createdAt: new Date("01-01-2025"),
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "jane@example.com",
    createdAt: new Date("10-01-2024"),
  },
  {
    firstName: "Test",
    lastName: "Johnson",
    email: "test@test.com",
    createdAt: new Date("12-07-2024"),
  },
  {
    firstName: "Michael",
    lastName: "Brown",
    email: randomEmail(),
    createdAt: new Date("02-01-2025"),
  },
  {
    firstName: "Emily",
    lastName: "Davis",
    email: randomEmail(),
    createdAt: new Date("03-10-2024"),
  },
  {
    firstName: "Chris",
    lastName: "Martinez",
    email: randomEmail()
  },
  {
    firstName: "Jessica",
    lastName: "Taylor",
    email: randomEmail()
  },
  {
    firstName: "David",
    lastName: "Harris",
    email: randomEmail()
  },
  {
    firstName: "Laura",
    lastName: "Clark",
    email: randomEmail()
  },
  {
    firstName: "Daniel",
    lastName: "Lewis",
    email: randomEmail()
  },
  {
    firstName: "Sarah",
    lastName: "Lee",
    email: randomEmail()
  },
  {
    firstName: "James",
    lastName: "King",
    email: randomEmail()
  },
  {
    firstName: "Megan",
    lastName: "Green",
    email: randomEmail()
  },
  {
    firstName: "Joshua",
    lastName: "Walker",
    email: randomEmail()
  },
  {
    firstName: "Amanda",
    lastName: "Hall",
    email: randomEmail()
  },
];

export { constituentData };
