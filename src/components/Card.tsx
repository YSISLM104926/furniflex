
const Card = () => {
    return (
        <div className="w-[277px] h-[445px] mx-auto bg-[#fdfbfb] p-4 rounded-xl shadow-lg" style={{ fontFamily: 'barlow' }}>
            <div className="w-[245px] h-[236px] mx-auto">
                <img className='bg-[#F2F2F2] w-[245px] h-[236px]' style={{ borderRadius: '8px' }} src="https://i.ibb.co/0JD2W3c/c6.png" alt="" />
            </div>
            <div>
                <h1 className='text-xl font-medium text-start mx-[3px] text-[#343434] mt-3'>Blank Bamboo Wicker</h1>
            </div>
            <div className='flex gap-2 mx-[3px] mt-2'>
                <div><h1 className="font-bold text-[#323232]">€299.00</h1></div>
                <div><s className="font-bold text-[#ABABAB]">€350.00</s></div>
                <div><h1 className="font-bold text-[#B92E2E]">30% OFF</h1></div>
            </div>
            <div className="mt-2">
                <p className="text-[#838383] text-start font-thin">Lightweight, easy to clean, sturdy, safe and stable. Non-slip legs</p>
            </div>
            <div>
                <button
                    type="submit"
                    className=" mt-2 bg-black text-white py-2 px-4 rounded-md w-[245px]"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default Card