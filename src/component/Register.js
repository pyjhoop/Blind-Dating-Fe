import React, { useState } from 'react';
import { checkEmail } from '../api/RegisterApi';

const RegistrationFlow = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  const [formData, setFormData] = useState({
    email: '',
    userPassword: '',
    age: null,
    gender: null
  });

  const handleEmailChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckEmail = async () => {
    try{
        const res = await checkEmail(formData.email)
        return res;
    } catch (error) {
        console.error(error);
    }
  }

  const goBack = () => {
    if(step === 1) {
        const data = handleCheckEmail();
        console.log(data);
    }
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const advanceStep = () => {
    setStep(step + 1);
  };
  const ProgressBar = ({ currentStep, totalSteps }) => {
    const widthPercentage = ((currentStep) / (totalSteps - 1)) * 100;
    return (
      <div className="flex items-center w-full">
        {currentStep > 1 && (
          <button
            onClick={goBack}
            className="text-pink-500 mr-2"
          >
            Previous
          </button>
        )}
        <div className="flex-grow bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
          <div
            className="bg-pink-500 h-1.5 rounded-full"
            style={{ width: `${widthPercentage}%` }}
          ></div>
        </div>
      </div>
    );
  };

  

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <label className="block text-lg font-semibold mt-6">이메일과 비밀번호 입력해주세요</label>
            <div>
              <label className="block text-left text-gray-700 text-sm font-bold mb-2 mt-10" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                placeholder='email'
                type='email'
                name='email'
                value={formData.email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <label className="block text-left text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name='userPassword'
                type="password"
                placeholder="**************"
                onChange={handlePasswordChange}
              />
            </div>

            <button
              onClick={advanceStep}
              className="block w-full py-3 px-6 mt-4 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600"
            >
              Continue
            </button>
          </div>
        );
        case 2:
            return (
                <div>
            <label className="block text-lg font-semibold">What's Your Name?sdsdfasd</label>
            <span className="block text-sm text-gray-600">Let's Get to Know Each Other</span>
            <input
              type="text"
              name="name"
              value={formData.name}
            //   onChange={handleInputChange}
              className="mt-4 mb-6 w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-pink-500"
              placeholder="Your Name"
            />
            <button
              onClick={advanceStep}
              className="block w-full py-3 px-6 mt-4 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600"
            >
              Continue
            </button>
          </div>
            )
      // ...other cases for steps 2, 3, and 4
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center md:w-[420px] md:h-[915px] m-auto h-screen p-4 bg-pink-100">
        <div className='w-4/6 mt-12'>
            <ProgressBar currentStep={step} totalSteps={totalSteps}/>
        </div>
        <div className="w-full max-w-xs h-full">
            {renderStep()}
        </div>
    </div>
  );
};

export default RegistrationFlow;
