import { SetStateAction, useEffect, useState } from "react";
import "./App.css";
import AddItemModal from "./components/AddNewItem";
import { Button } from "./components/button";
import { ItemCard } from "./components/card";
import { Input, Select } from "./components/input";
import Search from "./components/input/Search";
import { Modal } from "./components/modal";

interface ItemType {
  image: string;
  name: string;
  id: string;
  description: string;
}

function App() {
  const [data, setData] = useState<ItemType[]>([]);

  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [addItemForm, setAddItemForm] = useState({
    name: "",
    description: "",
    image: "",
  });
  const [showAddItemModal, setShowAddItemModal] = useState(false);

  //filtred data when searching
  const filteredData: ItemType[] = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filteredData.length / 9);

  useEffect(() => {
    //fetch data from mock api
    fetch("https://650dd5bfa8b42265ec2cbee3.mockapi.io/items")
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //sort items of data
  const handleSort = (type: string) => {
    if (type === "id")
      setData((oldValue) => [
        ...oldValue?.sort((a, b) => {
          return parseInt(a.id) - parseInt(b.id);
        }),
      ]);
    else
      setData((oldValue) => [
        ...oldValue?.sort((a, b) => {
          return a.name.localeCompare(b.name);
        }),
      ]);

    setCurrentPage(0);
  };

  //search items
  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(0);
  };

  const handleAddItem = () => {
    setCurrentPage(0);
    setSearchTerm("");

    const generateId =
      parseInt(
        data.sort((a, b) => {
          return parseInt(a.id) - parseInt(b.id);
        })[data.length - 1]?.id
      ) + 1; //generate id from last value in the list + 1

    setData((oldValue) => [
      ...oldValue,
      { ...addItemForm, id: generateId.toString() },
    ]);

    setAddItemForm({ image: "", name: "", description: "" });
  };
  return (
    <div className="App">
      <AddItemModal
        show={showAddItemModal}
        addItemForm={addItemForm}
        setAddItemForm={setAddItemForm}
        onAction={handleAddItem}
        onClose={() => setShowAddItemModal(false)}
      />
      <div className="header">
        <div className="title">Product items</div>
        <div className="filters">
          <Select
            options={[
              { label: "By name", value: "name" },
              { label: "By id", value: "id" },
            ]}
            placeholder="Sort by"
            onSelect={(value: string) => {
              handleSort(value);
            }}
          />
          <div className="space-horizontal" />
          <Search
            handleSearch={(value) => handleSearch(value)}
            placeholder="Search item"
          />
          <div className="space-horizontal" />

          <Button onClick={() => setShowAddItemModal(true)}>Add item</Button>
        </div>
      </div>

      <div className="main">
        {filteredData?.map((item, index) => {
          if (index >= currentPage * 9 && index < currentPage * 9 + 9)
            return (
              <ItemCard
                key={index}
                name={item.name}
                image={item.image}
                description={item.description}
                id={parseInt(item.id)}
              />
            );
        })}
      </div>
      <div className="pagination">
        <div
          onClick={() => {
            if (currentPage - 1 >= 0) setCurrentPage((value) => value - 1);
          }}
        >
          Previous
        </div>
        <span>{"Page " + (currentPage + 1) + "/" + totalPages}</span>
        <div
          onClick={() => {
            if (currentPage + 1 < totalPages)
              setCurrentPage((value) => value + 1);
          }}
        >
          Next
        </div>
      </div>
    </div>
  );
}

export default App;
