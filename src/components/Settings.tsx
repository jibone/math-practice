import { FC, useState } from "react";

const Settings: FC = () => {
  const [additionChecked, setAdditionCheck] = useState(false);

  const handleSettingsSave = () => {
    console.log("handel settings save");
    console.log(additionChecked);
  };

  return (
    <div className="container mx-auto">
      <div className="mt-10">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1">
            <h3 className="text-lg font-medium text-gray-900 leading-6">
              Basic Arithmetic
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Configure the basic arithmetic question
            </p>
          </div>
          <div className="col-span-2">
            <div className="overflow-hidden shadow">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <fieldset>
                  <legend className="text-base font-medium text-gray-900">
                    Addition
                  </legend>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="addition"
                          name="adition"
                          type="checkbox"
                          checked={additionChecked}
                          onChange={() => {
                            setAdditionCheck((prev) => !prev);
                          }}
                          className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label className="font-medium text-gray-700">
                          Include addition question
                        </label>
                        <p className="text-gray-500">
                          Select optins for numbers and digits.
                        </p>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset>
                  <div>
                    <legend className="text-base font-medium text-gray-900">
                      Numbers
                    </legend>
                    <p className="text-sm text-gray-500">
                      How many number of operations
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        id="number_two"
                        name="numbers"
                        type="radio"
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                      />
                      <label className="block ml-3 text-sm font-medium text-gray-700">
                        Two
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="number_three"
                        name="numbers"
                        type="radio"
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                      />
                      <label className="block ml-3 text-sm font-medium text-gray-700">
                        Three
                      </label>
                    </div>
                  </div>
                </fieldset>
                <fieldset>
                  <div>
                    <legend className="text-base font-medium text-gray-900">
                      Digits
                    </legend>
                    <p className="text-sm text-gray-500">
                      Numbers of digits for each number.
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        id="digit_one"
                        name="digits"
                        type="radio"
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                      />
                      <label className="block ml-3 text-sm font-medium text-gray-700">
                        One
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="digits_two"
                        name="digits"
                        type="radio"
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                      />
                      <label className="block ml-3 text-sm font-medium text-gray-700">
                        Two
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="digits_three"
                        name="digits"
                        type="radio"
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                      />
                      <label className="block ml-3 text-sm font-medium text-gray-700">
                        Three
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent shadow-sm rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={handleSettingsSave}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
