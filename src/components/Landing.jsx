const Landing = () => {
  const bio =
    'custom accesories brand from Ukraine made by talented ukranian artist with passion of making beautiful things'

  return (
    <>
      <div className='flex flex-col justify-center'>
        <div className='text-5xl lg:text-9xl font-Nabi uppercase text-pink-300'>
          Vitalina
        </div>
        <div className='text-2xl lg:text-4xl font-Rouge text-pink-300'>
          {bio}
        </div>
      </div>
    </>
  )
}

export default Landing
