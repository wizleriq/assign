const News = () => {
  return (
    <section className="flex h-[22%] sm:w-32 lg:w-full lg:h-[50vh] items-center lg:justify-center bg-[#ECECEC] lg:mt-0" style={{ padding: '10px 0' }}>
      <div  className='mt-6 lg:mt-0 mb-32 lg:w-[456px] lg:h-[44px] g-0'>
      {/* style={{ width: '456px', height: '44px', gap: '0px', }} */}
      <h2 className="text-center mt-3 capitalize  text-3xl lg:text-4xl font-normal lg:font-medium" style= {{fontFamily: 'Poppins', fontWeight: '500', lineHeight: '44px', letterSpacing: '-0.4000000059604645px' ,textAlign: 'center', color: '#141718'}}>Join our newsletter</h2>
      <p className='' style={{fontFamily: 'inter', fontSize: '17px', fontWeight: '400', lineHeight: '30px', textAlign: 'center', color: '#141718'}}> Dont miss the fun. Get the buzz on latest product deals and more.</p>
      <div className="flex items-center justify-center mt-9">
          <form className="flex flex-col items-center">
            <input
              type="text"
              placeholder="Email address"
              className="text-left py-1 px-4 text-[#000000] rounded-md border-[#000000] border-2 font-normal text-base outline-none"
              style={{ fontFamily: 'Inter', fontSize: '16px', background: '#ECECEC' }}
            />
        
          </form>
        </div>
      </div>
     
    </section>
  );
}

export default News;