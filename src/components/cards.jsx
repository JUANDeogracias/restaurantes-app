import React from "react";

function Cards({ id, name, url, onDelete }) {
  // Mover deletePost fuera del useEffect para poder usarla en el onClick
  const deletePost = async () => {
    try {
      await fetch(`${url}${id}`, { method: "DELETE" });
      console.log(`Deleted user with ID: ${id}`);
      onDelete(id);
    } catch (e) {
      console.error("Failed to delete the user:", e);
    }
  };

  return (
    <div
      id={id}
      className="max-w-64 min-w-64 mx-auto p-3 min-h-64 mt-10 h-full w-full rounded-xl flex flex-col border-solid border-2"
    >
      <h1 className="text-center">{name}</h1>
      <div className="mx-auto mt-auto">
        <button
          onClick={deletePost}
          className=" w-24 mx-auto  bg-[#d11517] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Cards;
