import { getContestans } from '@/app/actions'
import Image from 'next/image';
import clsx from 'clsx'

async function ContestansOverlay() {
  const res = await getContestans()
  
  if ('errorMessage' in res) {
    return (
      <main>
        <h1 className={`mb-4 text-xl md:text-2xl`}>
          players
        </h1>
        <p>Error: {res.errorMessage}</p>
      </main>
    );
  }
  return (
    <div className='flex items-center justify-center flex-col'>
      <p>Who is ordering?</p>
      <div className='text-black flex items-center justify-center gap-[12px] w-full'>
        {res.map((player: any) => (
          <div key={player.id} className={clsx('flex flex-col items-center justify-center max-w-fit', { 'hidden': player.eliminated })}>
            <label htmlFor={player.id}>
              <Image 
                src={`/players/${player.image}`}
                alt='img'
                width={120}
                height={120}
                className='rounded-full'
              />
            </label>
            <input type="radio" name='contestant' id={player.id} value={player.id}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContestansOverlay
