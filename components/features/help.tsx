export function Help() {
  return (
    <div className='bg-sky-100 bg-opacity-10 rounded-lg p-4'>
      <div className='flex flex-col items-start gap-6 xl:flex-row w-full justify-between'>
        <div>
          <p className='text-2xl pb-6 font-bold'>Need Help?</p>
          <ul className='flex flex-col gap-2'>
            <li className='flex items-start pb-3'>
              💬
              <div className='pl-2'>
                <strong>
                  <a href='https://buildship.com/discord' target='_blank' className='text-blue-500 text-lg'>
                    Join BuildShip Community
                  </a>
                </strong>
                <p>
                  An active and large community of no-code / low-code builders. Ask questions, share feedback, showcase
                  your project and connect with other BuildShip enthusiasts.
                </p>
              </div>
            </li>
            <li className='flex items-start pb-3'>
              🙋
              <div className='pl-2'>
                <strong>
                  <a href='https://buildship.com/experts' target='_blank' className='text-blue-500 text-lg'>
                    Hire a BuildShip Expert
                  </a>
                </strong>
                <p>
                  Need personalized help to build your product fast? Browse and hire from a range of independent
                  freelancers, agencies and builders - all well versed with BuildShip.
                </p>
              </div>
            </li>
            <li className='flex items-start pb-3'>
              🛟
              <div className='pl-2'>
                <strong>
                  <a
                    href='https://docs.buildship.com/support-messages'
                    target='_blank'
                    className='text-blue-500 text-lg'
                  >
                    Send a Support Request
                  </a>
                </strong>
                <p>
                  Got a specific question on your workflows / project or want to report a bug? Send a us a request using
                  the "Support" button directly from your BuildShip Dashboard.
                </p>
              </div>
            </li>
            <li className='flex items-start pb-3'>
              ⭐️
              <div className='pl-2'>
                <strong>
                  <a
                    href='https://discord.com/channels/853498675484819476/1186781874127896588'
                    target='_blank'
                    className='text-blue-500 text-lg'
                  >
                    Feature Request
                  </a>
                </strong>
                <p>
                  Something missing in BuildShip for you? Share on the <strong>#FeatureRequest</strong> channel on
                  Discord. Also browse and cast your votes on other feature requests.
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
