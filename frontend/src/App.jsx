import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import ShoppingList from "./components/Test";

function App() {
  const products = [
    {
      imageURL:
        "https://content.imageresizer.com/images/memes/Mike-Monster-Inc-Bruh-Meme-meme-3.jpg",
      heading: "Monster",
      description:
        "A monster is a creature that is often found in myths or horror stories.",
      id: 1,
    },
    {
      imageURL:
        "https://content.imageresizer.com/images/memes/sad-kermit-at-window-meme-3.jpg",
      heading: "Frog",
      description: "Frogs are amphibians that live in or near water.",
      id: 2,
    },
    {
      imageURL:
        "https://content.imageresizer.com/images/memes/helo-fish-meme-5.jpg",
      heading: "Fih",
      description:
        "Fish are gill-bearing aquatic craniate animals that lack limbs with digits.",
      id: 3,
    },
    {
      imageURL:
        "https://content.imageresizer.com/images/memes/Tired-child-meme-6.jpg",
      heading: "Sleepy",
      description:
        "Sleepy is a character from the classic fairy tale 'Snow White'.",
      id: 4,
    },
  ];

  const employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" },
  ];

  return (
    <>
      <h1>Hello, World!</h1>

      {products.map((product) => (
        <Card
          key={product.id}
          imageURL={product.imageURL}
          heading={product.heading}
          description={product.description}
        />
      ))}

      {employees.map((employee, index) => (
        <div key={index}>
          <h2>{employee.name}</h2>
          <p>{employee.salary}</p>
          <p>{employee.department}</p>
        </div>
      ))}
    </>
  );
}

export default App;
