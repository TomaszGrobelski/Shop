import dirtyBoots from '../../../images/Home/BillBowerman/dirtyBoots.jpg'

function BillBowerman() {
  return (
    <div className="flex flex-col sm:flex-row bg-gray-100">
        <div className="sm:w-[50%] p-6 text-[28px]">
            <p className='py-4'>"Good shoes must meet three requirements. Be light, comfortable and durable"</p>
            <span className=' text-gray-900'>-Bill Bowerman</span>
        </div>
        <img className=' object-fill sm:object-fill sm:w-[50%] grayscale ' src={dirtyBoots} alt="Dirty Boots" />
    </div>
  )
}

export default BillBowerman