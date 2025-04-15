import React from "react";

const DeleteAlert = ({ content, onDelete }) => {
  return (
    <div className="bg-blue-100 p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h3 className="text-lg font-semibold text-blue-800 mb-4">Warning</h3>
      <p className="text-sm text-gray-700">{content}</p>

      <div className="flex justify-end mt-6">
        <button
          type="button"
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteAlert;
