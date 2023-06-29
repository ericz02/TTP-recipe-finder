const Contact = () => {

  const handleClick = () => {
    alert("Success!");
  };

  return (
    <div className="h-[1100px]">
      <h1 className="text-center text-blue-900 font-semibold text-[20px] mt-[20px]">
        CONTACT
      </h1>
      <div className="border-b border-blue-900 w-[1000px] mx-auto w-1/2 mt-[20px]"></div>

      <p className="mt-[20px] mx-auto w-1/2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam cumque alias voluptatum aperiam quod laboriosam, officiis libero. Fuga, ipsa quae. Magni eligendi expedita consequatur dolorem molestias alias esse placeat delectus error veritatis cum accusamus optio nam earum, ut blanditiis animi quo deleniti iusto velit perspiciatis similique amet. Corporis, quod in?
      </p>

      <div className="mx-auto w-1/2 mt-[20px] mb-[20px]">
        <p>
          <strong className="text-blue-900">Email:</strong> foo@bar123.com
        </p>
        <p>
          <strong className="text-blue-900">Phone:</strong> 123-123-123
        </p>
        <p>
          <strong className="text-blue-900">Fax:</strong> 123-123-123
        </p>
        <p>
          <strong className="text-blue-900">Staten Island Office</strong>
        </p>
        <p>123 Main Street, Main, NY 10000</p>
      </div>

      <div className="mx-auto w-1/2">
        <h1 className="text-center font-semibold text-[20px] text-blue-900 mb-[10px]">
          What You Get When Asking Your Question
        </h1>

        <ul className="list-disc">
          <li>Less than 12-hour response to your question.</li>
          <li>Thoroughness and expertise of a Certified Exchange Specialist</li>
          <li>Plan of action summarized in an email follow up.</li>
        </ul>

        <div>
          <label
            className="mt-[30px] block text-blue-900 font-bold mb-2"
            for="first_name"
          >
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                  focus:outline-none focus:shadow-outline"
            id="first_name"
            type="text"
            placeholder="Enter your first name"
          ></input>

          <label
            className="mt-[30px] block text-blue-900 font-bold mb-2"
            for="first_name"
          >
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                  focus:outline-none focus:shadow-outline"
            id="first_name"
            type="text"
            placeholder="Enter your last name"
          ></input>

          <label
            className="mt-[30px] block text-blue-900 font-bold mb-2"
            for="first_name"
          >
            Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                  focus:outline-none focus:shadow-outline"
            id="first_name"
            type="text"
            placeholder="Enter your email address"
          ></input>

          <label
            className="mt-[30px] block text-blue-900 font-bold mb-2"
            for="first_name"
          >
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                  focus:outline-none focus:shadow-outline"
            id="first_name"
            type="text"
            placeholder="Enter your Phone Number"
          ></input>

          <label className=" mt-[30px] block text-blue-900 font-bold mb-2">
            What is the issue you are dealing with?
          </label>
          <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>Select an issue</option>
            <option>Lorem, ipsum dolor.</option>
            <option>Lorem, ipsum.</option>
            <option>Lorem ipsum dolor sit.</option>
            <option>Lorem, ipsum dolor.</option>
          </select>

          <button
            className="bg-blue-900 hover:bg-blue-900 text-white font-bold py-2 px-4 
              border-b-4 border-blue-900 hover:border-blue-900 rounded mt-[50px]"
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
