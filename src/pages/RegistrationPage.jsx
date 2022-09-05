import SignIn from "../components/SignIn";

function RegistrationPage() {
  return (
    <>
      <div className="flex justify-center flex-col">
        <p className="flex justify-center">Log in</p>
        <div>
          <SignIn />
        </div>
      </div>
    </>
  );
}

export default RegistrationPage;
