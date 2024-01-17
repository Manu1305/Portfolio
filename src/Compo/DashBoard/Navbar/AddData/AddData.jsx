import React from 'react'
import Nav from '../../../Nav'
import NavbarDash from '../Navbar';

function AddData() {
  return (
    <div>
      <NavbarDash />
      <h1>Add daTA</h1>

      <form action="" className="gap-3">
        <div className="flex flex-row">
          <label htmlFor="name">Name</label>

          <input type="text" id="name" className="border-2 border-rose-500 " />
        </div>
        <div className="flex flex-row mt-5 border-slate-950">
          <label htmlFor="name">Phone</label>

          <input type="text" id="name" className="border-2 border-rose-500 " />
        </div>
        <div className="flex flex-row mt-5 border-slate-950">
          <label htmlFor="name">Date of birth</label>

          <input type="text" id="name" className="border-2 border-rose-500 " />
        </div>
        <div className="flex flex-row mt-5 border-slate-950">
          <label htmlFor="name">email</label>

          <input type="text" id="name" className="border-2 border-rose-500 " />
        </div>
        <div className="flex flex-row mt-5 border-slate-950">
          <label htmlFor="name">State</label>

          <input type="text" id="name" className="border-2 border-rose-500 " />
        </div>
        <div className="flex flex-row mt-5 border-slate-950">
          <label htmlFor="name">District</label>

          <input type="text" id="name" className="border-2 border-rose-500 " />
        </div>
        <div className="flex flex-row mt-5 border-slate-950">
          <label htmlFor="name">Place</label>

          <input type="text" id="name" className="border-2 border-rose-500 " />
        </div>
        <div>
          <button
            type="button"
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddData
