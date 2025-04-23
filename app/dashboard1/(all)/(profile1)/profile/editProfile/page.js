"use client";
import { useRef, useState, useEffect } from "react";
// import { Input } from "@/components/ui/input";
import axios from "axios";
import { updateUser } from "./action";

export default function PublicProfileSettings() {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [previewImage, setPreviewImage] = useState("avatar.png");
  const [idUser, setIdUser] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUserId() {
      try {
        const response = await fetch(
          "http://localhost:8000/ELACO/getUserId",
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch user ID: ${response.statusText}`);
        }

        const userIdData = await response.json();
        setIdUser(userIdData.id_user);
      } catch (error) {
        console.error("Error fetching user ID:", error);
      }
    }

    fetchUserId();
  }, []);

  useEffect(() => {
    if (!idUser) return;

    async function getUserData() {
      try {
        const response = await fetch(
          `http://localhost:8000/ELACO/${idUser}`
        );

        if (!response.ok) {
          throw Error(`The error ${response.statusText}`);
        }

        const data = await response.json();
        setUser(data.user);
        setPreviewImage(
          data?.user?.photo
            ?` http://localhost:8000/images/${data.user.photo}`
            : "/image.png"
        );
      } catch (err) {
        console.log(err);
      }
    }

    getUserData();
  }, [idUser]);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewImage(URL.createObjectURL(selectedFile));
    }
  };

  async function handleFormSubmit(formData) {
    // Upload user details
    await updateUser(formData, idUser, setUser);

    // If a new image was selected, upload it
    if (file) {
      const formDataImage = new FormData();
      formDataImage.append("file", file);

      try {
        const res = await axios.patch(
          `http://localhost:8000/uplaod/${idUser}`,
          formDataImage
        );
        setPreviewImage(`http://localhost:8000/images/${res.data.userImage}`);
      } catch (err) {
        console.error(err);
      }
    }
  }

  if (user === null) {
    return <p>loading</p>;
  }

  return (
    <div className="bg-white w-full flex flex-col px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
      <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block bg-[#ffffff]"></aside>

      <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4 bg-[#ffffff]">
        <div className="p-2 md:p-4">
          <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
            <h2 className="pl-6 text-2xl font-bold sm:text-xl">
              Public Profile
            </h2>

            <div className="grid max-w-2xl mx-auto mt-8">
              <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                <div className="flex flex-col items-center space-y-5">
                  <img
                    className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                    src={previewImage}
                    alt="Bordered avatar"
                  />
                </div>

                <div className="flex flex-col space-y-5 sm:ml-8">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                    className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200"
                  >
                    Change Picture
                  </button>

                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </div>
              </div>

              <form
                className="items-center mt-8 sm:mt-14 text-[#161931]"
                action={handleFormSubmit}
              >
                <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                  <div className="w-full">
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                    >
                      Your first name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                      placeholder="Your first name"
                      defaultValue={user.firstName}
                      name="firstName"
                      required
                    />
                  </div>

                  <div className="w-full">
                    <label
                      htmlFor="last_name"
                      className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                    >
                      Your last name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                      placeholder="Your last name"
                      defaultValue={user.lastName}
                      name="lastName"
                      required
                    />
                  </div>
                </div>

                <div className="mb-2 sm:mb-6">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                  >
                    Your phone number
                  </label>
                  <input
                    type="number"
                    id="phone"
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    defaultValue={user.phone}
                    name="phone"
                    required
                  />
                </div>

                <div className="mb-2 sm:mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    defaultValue={user.email}
                    disabled
                    name="email"
                    required
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}