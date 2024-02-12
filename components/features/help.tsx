export function Help() {
  return (
    <div className='bg-sky-100 bg-opacity-10 rounded-lg p-4'>
      <div className='flex flex-col items-start gap-6 xl:flex-row w-full justify-between'>
        <div>
          <p className='text-2xl pb-6 font-bold'>Need Help?</p>
          <ul className='flex flex-col gap-2'>
            <li className='flex items-start pb-3'>
              <svg
                className='h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2 mr-3'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path
                  d='m19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm-7.5.5L9 4L6.5 9.5L1 12l5.5 2.5L9 20l2.5-5.5L17 12zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25z'
                  fill='none'
                />
              </svg>
              <div>
                <strong>
                  <a href='https://buildship.com/experts'>Hire a BuildShip Expert:</a>
                </strong>
                <p>
                  Need to get your product ready fast? Browse and choose from a range of freelancers, agencies, and
                  indie makers - well versed with BuildShip.
                </p>
              </div>
            </li>
            <li className='flex items-start pb-3'>
              <svg
                className='h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2 mr-3'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path
                  d='m19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm-7.5.5L9 4L6.5 9.5L1 12l5.5 2.5L9 20l2.5-5.5L17 12zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25z'
                  fill='none'
                />
              </svg>
              <div>
                <strong>
                  <a href='https://buildship.com/discord'>The BuildShip Community:</a>
                </strong>
                <p>
                  An active community of low-code builders. Ask questions, seek guidance, share thoughts, showcase
                  projects, and connect with other BuildShip enthusiasts.
                </p>
              </div>
            </li>
            <li className='flex items-start pb-3'>
              <svg
                className='h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2 mr-3'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path
                  d='m19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm-7.5.5L9 4L6.5 9.5L1 12l5.5 2.5L9 20l2.5-5.5L17 12zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25z'
                  fill='none'
                />
              </svg>
              <div>
                <strong>
                  <a href='https://docs.buildship.com/support-messages'>Send a Support Request:</a>
                </strong>
                <p>
                  Got a question, need to request for a feature, or see a bug? Send us a support request directly from
                  your BuildShip Dashboard.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Help;
