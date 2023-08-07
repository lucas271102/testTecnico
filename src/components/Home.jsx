import React from "react";
import Royal from "../assets/royal.jpg";
import { Link as Anchor} from "react-router-dom";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const Home = () => {
  return (
    <>
      <div className="border border-black p-2 shadow-md shadow-black/50">
        <div className="flex justify-center font-light gap-6 p-4 items-center">
          <h1 className="text-3xl">🦮Vetly</h1>

          <div className="relative w-[60%]  p-2 ">
            <label for="Search" className="sr-only">
              {" "}
              Search{" "}
            </label>

            <input
              type="text"
              id="Search"
              placeholder="Search for..."
              class="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
            />

            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button
                type="button"
                className="text-gray-600 hover:text-gray-700"
              >
                <span class="sr-only">Search</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </span>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </div>
        <div className="flex justify-center gap-96 w-[100%]  p-4">
          <Dropdown>
            <DropdownTrigger className="w-[20%]">
              <Button variant="bordered" className="font-bold text-xl">
                Categories
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Action event example"
              onAction={(key) => alert(key)}
              className="w-[100%]"
            >
              <DropdownItem key="new">Literas</DropdownItem>
              <DropdownItem key="copy">Comida de Perro</DropdownItem>
              <DropdownItem key="edit">Transportadoras</DropdownItem>
              <DropdownItem key="new">Comida de Gato</DropdownItem>
              <DropdownItem key="copy">Juguetes</DropdownItem>
              <DropdownItem key="edit">Peluquerías</DropdownItem>
              <DropdownItem key="new">Vacunas</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <div className="flex gap-20">
            <button>Home</button>
            <Anchor to="/login" className="bg-yellow-300 p-2 border rounded-md font-semibold font-sans">
                Inicar Sesión
              
            </Anchor>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="p-8">
          <h2 className=" font-semibold text-2xl p-4">
            Descuentos en Royal Mini Adult{" "}
          </h2>
          <p className="p-4">Descuentos en comida de Perro adulto Royal</p>
          <div className="p-4">
            <button className="bg-pink-600 p-2 text-white  border rounded-md text-sm">
              Visitar producto
            </button>
          </div>
        </div>
        <img src={Royal} alt="" className="w-[50%]" />
      </div>
    </>
  );
};

export default Home;
