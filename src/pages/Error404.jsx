import { useEffect } from "react";

export const Error404 = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.replace("/");
    }, 5000);
  }, []);
  return (
    <>
      <section className='gate'>
        <div className='flex flex-col gap-8 text-center'>
          <p className='text-[34px]'>404 Page Not Found. </p>
          <p className='text-[18px]'>Redirecting ...</p>
        </div>
      </section>
    </>
  );
};
